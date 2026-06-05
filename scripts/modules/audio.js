/**
 * audio.js — 音频模块（Web Speech API）
 */

let currentUtterance = null;
let cachedVoices = [];
let voicesLoaded = false;

// 初始化语音列表
function initVoices() {
  if (!('speechSynthesis' in window)) return;

  // 立即获取一次（触发Chrome加载voices）
  speechSynthesis.getVoices();

  speechSynthesis.onvoiceschanged = () => {
    cachedVoices = speechSynthesis.getVoices();
    voicesLoaded = true;
  };
}

initVoices();

export function speakWord(word) {
  if (!('speechSynthesis' in window)) {
    console.warn('[audio] speechSynthesis not supported');
    return false;
  }

  speechSynthesis.cancel();

  const utter = new SpeechSynthesisUtterance(word);
  utter.lang = 'en-US';
  utter.rate = 0.75;
  utter.pitch = 1;
  utter.volume = 1;

  const trySpeak = () => {
    const voices = speechSynthesis.getVoices();
    const enVoice = voices.find(v => v.lang.startsWith('en')) ||
                    voices.find(v => v.lang === 'en-US') ||
                    voices[0];
    if (enVoice) {
      utter.voice = enVoice;
    }
    speechSynthesis.speak(utter);
  };

  const voices = speechSynthesis.getVoices();
  if (voices.length > 0) {
    trySpeak();
  } else {
    // 等待voices加载完成后再播放
    speechSynthesis.onvoiceschanged = trySpeak;
  }

  return true;
}

export function stopSpeaking() {
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel();
  }
}

export function isSpeaking() {
  return 'speechSynthesis' in window && speechSynthesis.speaking;
}

// 预加载语音列表
export function preloadVoices() {
  if ('speechSynthesis' in window) {
    speechSynthesis.getVoices();
    speechSynthesis.onvoiceschanged = () => speechSynthesis.getVoices();
  }
}
