---
sidebar_position: 1
title: 安装
---

## 安装

OpenClaw 支持多种安装方式，选择最适合你的平台。

## macOS

### Homebrew (推荐)

```bash
brew install openclaw/tap/openclaw
```

### 手动安装

```bash
# 下载最新版本
curl -L -o openclaw.tar.gz https://github.com/openclaw/openclaw/releases/latest/download/openclaw-darwin-arm64.tar.gz

# 解压
tar -xzf openclaw.tar.gz

# 添加到 PATH
sudo mv openclaw /usr/local/bin/
```

## Linux

### Ubuntu/Debian

```bash
# 添加仓库
sudo add-apt-repository ppa:openclaw/openclaw
sudo apt update
sudo apt install openclaw
```

### 手动安装

```bash
# x86_64
curl -L -o openclaw.tar.gz https://github.com/openclaw/openclaw/releases/latest/download/openclaw-linux-x86_64.tar.gz

# ARM64
curl -L -o openclaw.tar.gz https://github.com/openclaw/openclaw/releases/latest/download/openclaw-linux-arm64.tar.gz

tar -xzf openclaw.tar.gz
sudo mv openclaw /usr/local/bin/
```

## Windows

### winget

```bash
winget install OpenClaw.OpenClaw
```

### Scoop

```bash
scoop install openclaw
```

## 验证安装

```bash
openclaw --version
```

应该输出类似：
```
OpenClaw 1.0.0
```
