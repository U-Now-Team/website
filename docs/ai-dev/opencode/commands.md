---
sidebar_position: 4
title: 自定义命令
---

## 自定义命令

OpenCode 支持创建自定义命令来扩展功能。

## 创建命令

### 1. 创建命令文件

在 `~/.opencode/commands/` 目录下创建脚本：

```bash
mkdir -p ~/.opencode/commands
```

### 2. 编写命令脚本

示例 - `hello.sh`：

```bash
#!/bin/bash
echo "Hello, $1!"
```

### 3. 设置可执行权限

```bash
chmod +x ~/.opencode/commands/hello.sh
```

## 使用命令

在 OpenCode 中：

```
/hello World
```

输出：`Hello, World!`

## 命令参数

### 位置参数

```bash
#!/bin/bash
echo "Name: $1, Age: $2"
```

### 标志参数

```bash
#!/bin/bash
while [[ $# -gt 0 ]]; do
  case $1 in
    -n|--name)
      name="$2"
      shift 2
      ;;
    -a|--age)
      age="$2"
      shift 2
      ;;
    *)
      shift
      ;;
  esac
done
echo "Name: $name, Age: $age"
```

使用：

```
/hello -n John -a 25
```

## 命令类型

### Shell 脚本

```bash
#!/bin/bash
# your commands here
```

### Python

```python
#!/usr/bin/env python3
import sys
print(f"Hello, {sys.argv[1]}!")
```

### Node.js

```javascript
#!/usr/bin/env node
console.log(`Hello, ${process.argv[2]}!`);
```

## 高级用法

### 环境变量

命令中可以访问 OpenCode 的环境变量：

```bash
echo "Model: $OPENCODE_MODEL"
echo "Provider: $OPENCODE_PROVIDER"
```

### 管道操作

```bash
#!/bin/bash
cat | sort | uniq
```

## 命令列表

查看所有自定义命令：

```
/commands
```

或查看帮助：

```
/help mycommand
```
