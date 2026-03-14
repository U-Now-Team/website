---
sidebar_position: 5
title: 自定义技能
---

## 自定义技能

OpenClaw 的技能系统允许你创建自定义功能扩展。

## 技能结构

技能目录位于 `~/.openclaw/skills/`：

```
skills/
└── my-skill/
    ├── SKILL.md      # 技能定义
    ├── scripts/      # 脚本目录
    └── references/   # 参考资料
```

## 创建技能

### 1. 创建技能目录

```bash
mkdir -p ~/.openclaw/skills/my-skill
```

### 2. 编写 SKILL.md

```markdown
# 我的技能

## 描述
这是一个示例技能，用于演示技能系统。

## 触发条件
- 关键词: "hello", "你好"

## 执行动作
回复欢迎消息。
```

### 3. 技能格式

```markdown
# SKILL - 技能名称

## 描述
简短描述技能功能

## 触发条件
- 关键词: keyword1, keyword2
- 正则: /^hello/

## 参数
| 参数 | 类型 | 说明 |
|------|------|------|
| param1 | string | 参数1说明 |

## 执行动作
描述技能执行的具体操作
```

## 内置变量

技能中可使用以下变量：

| 变量 | 说明 |
|------|------|
| `{{sender}}` | 发送者名称 |
| `{{channel}}` | 频道名称 |
| `{{message}}` | 原始消息 |
| `{{time}}` | 当前时间 |

## 示例：天气查询技能

```markdown
# 天气查询

## 描述
查询指定城市的天气

## 触发条件
- 关键词: "天气"

## 参数
| 参数 | 类型 | 说明 |
|------|------|------|
| city | string | 城市名称 |

## 执行动作
调用天气 API 获取天气预报
```

## 加载技能

修改配置文件 `~/.openclaw/config.yaml`：

```yaml
skills:
  enabled:
    - my-skill
    - weather
```

重启 OpenClaw 生效：

```bash
openclaw restart
```

## 测试技能

```bash
openclaw skill test my-skill
```
