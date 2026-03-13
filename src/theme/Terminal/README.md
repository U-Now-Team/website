# Terminal 终端风格代码块组件

Docusaurus 主题组件，用于在文档中展示终端风格的代码块，支持展开/折叠和提示三种状态。

## 安装

组件已集成到主题中，无需额外安装。

## 使用方法

### 基本用法

```jsx
import Terminal from '@theme/Terminal';

<Terminal title="终端展开" state="expanded">
  <pre>这里是代码内容...</pre>
</Terminal>
```

### 三种状态

```jsx
// 1. 展开状态 - 蓝色标识
<Terminal title="终端展开" state="expanded">
  <pre>完整显示的代码内容</pre>
</Terminal>

// 2. 折叠状态 - 绿色标识
<Terminal title="终端折叠" state="collapsed">
  <pre>折叠后只显示一小条</pre>
</Terminal>

// 3. 提示状态 - 橙色标识，无展开/折叠按钮
<Terminal title="终端提示" state="tip">
  <p>这是一条提示信息</p>
</Terminal>
```

### 受控模式

```jsx
import Terminal from '@theme/Terminal';

function Example() {
  const handleToggle = (newState) => {
    console.log('当前状态:', newState);
  };

  return (
    <Terminal 
      title="受控示例" 
      state="expanded"
      onToggle={handleToggle}
    >
      <pre>这里是代码内容...</pre>
    </Terminal>
  );
}
```

### 禁用展开/折叠

```jsx
<Terminal title="不可切换" state="expanded" expandable={false}>
  <pre>按钮已禁用</pre>
</Terminal>
```

## API

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| title | `string` | `'终端'` | 顶部中间标题文字 |
| state | `'expanded' \| 'collapsed' \| 'tip'` | `'expanded'` | 组件状态 |
| expandable | `boolean` | `true` | 是否允许展开折叠 |
| onToggle | `function` | - | 状态切换回调函数，参数为新状态 |
| children | `ReactNode` | - | 内容区域内容 |

## 样式

- 展开状态：蓝色按钮 + 蓝色标题栏边框
- 折叠状态：绿色按钮 + 绿色标题栏边框  
- 提示状态：橙色按钮隐藏 + 橙色标题栏边框

内容区域使用 Docusaurus 默认代码块背景色，支持深色模式。
