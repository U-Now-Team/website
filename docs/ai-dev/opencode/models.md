---
sidebar_position: 2
title: 模型配置
---

## 模型配置

OpenCode 支持多种 AI 模型，包括 OpenAI、Claude、Gemini 等。

## 配置文件

编辑 `~/.opencode/config.yaml`：

```yaml
model:
  provider: openai
  name: gpt-4o
  
providers:
  openai:
    apiKey: sk-xxx
    baseUrl: https://api.openai.com/v1  # 可选
  
  anthropic:
    apiKey: sk-ant-xxx
    baseUrl: https://api.anthropic.com
  
  google:
    apiKey: xxx
```

## 支持的模型

### OpenAI

| 模型 | 说明 |
|------|------|
| gpt-4o | 最新旗舰模型 |
| gpt-4-turbo | GPT-4 快速版本 |
| gpt-3.5-turbo | 性价比高 |

### Anthropic

| 模型 | 说明 |
|------|------|
| claude-3-5-sonnet | 平衡性能与速度 |
| claude-3-opus | 最强能力 |

### Google

| 模型 | 说明 |
|------|------|
| gemini-1.5-pro | 多模态支持 |
| gemini-1.5-flash | 快速响应 |

## 环境变量

也可以使用环境变量：

```bash
export OPENAI_API_KEY=sk-xxx
export ANTHROPIC_API_KEY=sk-ant-xxx
export GOOGLE_API_KEY=xxx
```

## 多模型切换

在 OpenCode 中切换模型：

```
/model openai/gpt-4o
/model anthropic/claude-3-5-sonnet
```

## 自定义模型

如果使用本地模型或代理：

```yaml
providers:
  custom:
    baseUrl: http://localhost:8080/v1
    apiKey: optional-key
    model: your-model-name
```
