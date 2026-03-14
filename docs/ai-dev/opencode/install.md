---
sidebar_position: 1
title: 安装
---

## 安装

OpenCode 支持多种安装方式。

## macOS

### Homebrew

```bash
brew install opencode/tap/opencode
```

### 手动安装

```bash
# Apple Silicon
curl -L -o opencode https://github.com/U-Now-Team/opencode/releases/latest/download/opencode-darwin-arm64
chmod +x opencode
sudo mv opencode /usr/local/bin/
```

## Linux

### 安装脚本

```bash
curl -sL https://raw.githubusercontent.com/U-Now-Team/opencode/main/install.sh | bash
```

### 手动安装

```bash
# x86_64
curl -L -o opencode https://github.com/U-Now-Team/opencode/releases/latest/download/opencode-linux-x86_64
chmod +x opencode
sudo mv opencode /usr/local/bin/
```

## Windows

### winget

```bash
winget install OpenCode.OpenCode
```

### Scoop

```bash
scoop install opencode
```

## 验证安装

```bash
opencode --version
```
