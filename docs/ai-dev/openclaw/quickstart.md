---
sidebar_position: 2
title: 快速开始
---

## 快速开始

本指南将帮助你在 5 分钟内完成 OpenClaw 的基本配置。

## 前提条件

- 已安装 OpenClaw
- 至少一个平台账号（飞书、Discord 等）
- OpenAI API Key 或其他兼容的 AI 模型

## 步骤 1: 初始化配置

```bash
openclaw configure
```

这将启动交互式配置向导，引导你完成基本设置。

## 步骤 2: 配置 AI 模型

编辑配置文件 `~/.openclaw/config.yaml`：

```yaml
models:
  default: openai/gpt-4o
  
openai:
  apiKey: your-api-key-here
  # 或使用环境变量 OPENAI_API_KEY
```

## 步骤 3: 添加飞书机器人

1. 打开 [飞书开放平台](https://open.feishu.cn/)
2. 创建企业自建应用
3. 添加机器人能力
4. 获取 App ID 和 App Secret
5. 配置事件订阅

```yaml
feishu:
  appId: your-app-id
  appSecret: your-app-secret
  verificationToken: your-verification-token
  encryptKey: your-encrypt-key
```

## 步骤 4: 启动 OpenClaw

```bash
openclaw start
```

## 下一步

- [飞书配置](./feishu) - 详细配置飞书集成
- [定时任务](./cron) - 设置自动化任务
- [自定义技能](./skills) - 开发自定义技能
