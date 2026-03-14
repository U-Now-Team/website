---
sidebar_position: 3
title: 飞书配置
---

## 飞书配置

本指南详细介绍如何将 OpenClaw 与飞书机器人集成。

## 创建飞书应用

1. 访问 [飞书开放平台](https://open.feishu.cn/)
2. 点击"创建企业自建应用"
3. 填写应用名称和图标
4. 创建应用

## 配置应用权限

在应用详情页，点击"权限管理"，添加以下权限：

| 权限名称 | 说明 |
|----------|------|
| im:chat:readonly | 读取群信息 |
| im:chat:create | 创建群聊 |
| im:message:send_as_bot | 发送消息 |
| im:message:send_as_bot | 接收消息 |

## 添加机器人

1. 在应用页面点击"添加应用能力"
2. 选择"机器人"
3. 配置机器人基本信息

## 获取配置信息

在应用详情页获取：

- **App ID**: 应用页面顶部
- **App Secret**: 应用密钥页面

## 配置加密

### 生成加密密钥

```bash
openssl genrsa 2048 | base64
```

### 配置事件订阅

1. 在应用页面点击"事件订阅"
2. 添加事件：
   - `im.message.receive_bot` - 接收消息
   - `im.chat.member.user.created` - 用户入群
3. 配置请求 URL：
  ```
  https://your-domain.com/webhook/feishu
  ```

## OpenClaw 配置

编辑 `~/.openclaw/config.yaml`：

```yaml
feishu:
  appId: your-app-id
  appSecret: your-app-secret
  verificationToken: your-verification-token
  encryptKey: your-encrypt-key  # 可选
```

## 部署

### 使用 ngrok 测试

```bash
ngrok http 8080
```

配置飞书事件请求 URL 为 ngrok 提供的地址。

### 生产环境

需要配置可公网访问的域名，并配置 TLS 证书。

## 验证

重启 OpenClaw：

```bash
openclaw restart
```

在飞书群聊中@机器人发送消息，测试是否正常响应。
