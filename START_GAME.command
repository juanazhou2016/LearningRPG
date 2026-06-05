#!/bin/zsh

cd "$(dirname "$0")" || exit 1

if ! command -v node >/dev/null 2>&1; then
  echo "未检测到 Node.js。请先安装 Node.js 后再启动游戏。"
  read -r "?按回车键关闭窗口..."
  exit 1
fi

node server.js &
serverPid=$!

sleep 1
open "http://127.0.0.1:8080"

wait "$serverPid"
