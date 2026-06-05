#!/usr/bin/env swift

import AppKit
import Foundation
import Vision

struct OcrResult: Codable {
    let file: String
    let text: String
    let confidence: Float
}

func usage() -> Never {
    fputs("Usage: swift scripts/tools/ocr-images.swift <image-folder> <output-json>\\n", stderr)
    exit(2)
}

let args = CommandLine.arguments
guard args.count == 3 else {
    usage()
}

let inputFolder = URL(fileURLWithPath: args[1], isDirectory: true)
let outputFile = URL(fileURLWithPath: args[2])
let supportedExtensions = Set(["png", "jpg", "jpeg", "tif", "tiff", "bmp", "heic"])

let fileManager = FileManager.default
guard let enumerator = fileManager.enumerator(at: inputFolder, includingPropertiesForKeys: nil) else {
    fputs("Cannot read image folder: \\(inputFolder.path)\\n", stderr)
    exit(1)
}

let imageFiles = enumerator.compactMap { item -> URL? in
    guard let url = item as? URL else {
        return nil
    }
    return supportedExtensions.contains(url.pathExtension.lowercased()) ? url : nil
}.sorted { $0.path < $1.path }

var results: [OcrResult] = []
let request = VNRecognizeTextRequest()
request.recognitionLevel = .accurate
request.usesLanguageCorrection = true
request.recognitionLanguages = ["zh-Hans", "en-US"]

for imageFile in imageFiles {
    guard let image = NSImage(contentsOf: imageFile),
          let tiffData = image.tiffRepresentation,
          let bitmap = NSBitmapImageRep(data: tiffData),
          let cgImage = bitmap.cgImage else {
        results.append(OcrResult(file: imageFile.lastPathComponent, text: "", confidence: 0))
        continue
    }

    let handler = VNImageRequestHandler(cgImage: cgImage, options: [:])

    do {
        try handler.perform([request])
    } catch {
        results.append(OcrResult(file: imageFile.lastPathComponent, text: "", confidence: 0))
        continue
    }

    let observations = request.results ?? []
    let candidates = observations.compactMap { observation -> (String, Float)? in
        guard let candidate = observation.topCandidates(1).first else {
            return nil
        }
        return (candidate.string, candidate.confidence)
    }

    let text = candidates.map { $0.0 }.joined(separator: "\n")
    let confidence = candidates.isEmpty
        ? 0
        : candidates.map { $0.1 }.reduce(0, +) / Float(candidates.count)

    results.append(OcrResult(file: imageFile.lastPathComponent, text: text, confidence: confidence))
}

let encoder = JSONEncoder()
encoder.outputFormatting = [.prettyPrinted, .sortedKeys]

do {
    let data = try encoder.encode(results)
    try fileManager.createDirectory(at: outputFile.deletingLastPathComponent(), withIntermediateDirectories: true)
    try data.write(to: outputFile)
    let message = "OCR completed: \(results.count) image(s) -> \(outputFile.path)\n"
    FileHandle.standardOutput.write(Data(message.utf8))
} catch {
    fputs("Cannot write OCR output: \(error.localizedDescription)\n", stderr)
    exit(1)
}
