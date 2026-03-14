---
sidebar_position: 4
title: 定时任务
---

## 定时任务

OpenClaw 支持定时执行任务，可以设置每日资讯推送、提醒等功能。

## 基本用法

### 创建定时任务

```bash
openclaw cron add \
  --name "每日资讯" \
  --cron "0 9 * * *" \
  --message "搜索今日AI资讯" \
  --channel feishu
```

### 参数说明

| 参数 | 说明 | 示例 |
|------|------|------|
| `--name` | 任务名称 | "每日资讯" |
| `--cron` | Cron 表达式 | "0 9 * * *" |
| `--message` | 任务消息 | "搜索AI资讯" |
| `--channel` | 推送频道 | feishu, discord, telegram |
| `--to` | 推送目标 | 群ID或用户ID |

### Cron 表达式

```
┌───────────── 分钟 (0 - 59)
│ ┌───────────── 小时 (0 - 23)
│ │ ┌───────────── 日期 (1 - 31)
│ │ │ ┌───────────── 月份 (1 - 12)
│ │ │ │ ┌───────────── 星期 (0 - 6)
│ │ │ │ │
* * * * *
```

常用示例：

| 表达式 | 说明 |
|--------|------|
| `0 9 * * *` | 每天 9:00 |
| `0 22 * * *` | 每天 22:00 |
| `0 9 * * 1-5` | 工作日 9:00 |
| `*/30 * * * *` | 每 30 分钟 |

## 管理任务

### 查看任务列表

```bash
openclaw cron list
```

### 查看任务详情

```bash
openclaw cron info <job-id>
```

### 禁用任务

```bash
openclaw cron disable <job-id>
```

### 启用任务

```bash
openclaw cron enable <job-id>
```

### 删除任务

```bash
openclaw cron rm <job-id>
```

### 手动运行任务

```bash
openclaw cron run <job-id>
```

## 失败告警

可以配置任务失败时发送告警通知：

```bash
openclaw cron add \
  --name "每日资讯" \
  --cron "0 9 * * *" \
  --message "搜索AI资讯" \
  --failure-alert \
  --failure-alert-channel feishu \
  --failure-alert-to "群ID"
```

## 时区配置

默认使用 UTC 时区，可指定本地时区：

```bash
openclaw cron add \
  --name "每日资讯" \
  --cron "0 9 * * *" \
  --tz "Asia/Shanghai" \
  --message "搜索AI资讯"
```
