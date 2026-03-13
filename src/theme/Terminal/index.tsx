import React, { useState, useEffect, useRef } from 'react';
import styles from './Terminal.module.css';

/**
 * Terminal 终端风格代码块组件
 * 
 * @param {string} title - 顶部中间标题文字
 * @param {string} state - 初始状态: 'expanded' | 'collapsed' | 'tip'
 * @param {boolean} expandable - 是否允许展开折叠 (默认 true)
 * @param {function} onToggle - 点击按钮时触发回调
 * @param {React.ReactNode} children - 内容区域内容
 */
export default function Terminal({
  title = '终端',
  state: initialState = 'expanded',
  expandable = true,
  onToggle,
  children
}) {
  const [state, setState] = useState(initialState);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  // 计算内容实际高度
  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children, state]);

  // 同步外部传入的 state
  useEffect(() => {
    setState(initialState);
  }, [initialState]);

  const handleToggle = () => {
    if (!expandable || state === 'tip') return;
    
    const newState = state === 'expanded' ? 'collapsed' : 'expanded';
    setState(newState);
    onToggle?.(newState);
  };

  // 状态对应的右上角按钮颜色（与标题栏底部边框色一致）
  const getButtonColor = () => {
    switch (state) {
      case 'expanded': return '#3b82f6'; // 蓝色 - 展开
      case 'collapsed': return '#22c55e'; // 绿色 - 折叠
      case 'tip': return '#f59e0b'; // 橙黄色 - 提示
      default: return '#3b82f6';
    }
  };

  // 状态对应的标题栏底部边框色
  const getHeaderBorderColor = () => {
    switch (state) {
      case 'expanded': return '#3b82f6';
      case 'collapsed': return '#22c55e';
      case 'tip': return '#f59e0b';
      default: return '#e5e7eb';
    }
  };

  // 状态对应的胶囊背景色
  const getBadgeBgColor = () => {
    switch (state) {
      case 'expanded': return '#3b82f6'; // 蓝色 - 展开
      case 'collapsed': return '#22c55e'; // 绿色 - 折叠
      case 'tip': return '#f59e0b'; // 橙色 - 提示
      default: return '#3b82f6';
    }
  };

  return (
    <div className={styles.container}>
      {/* 顶部标题栏 */}
      <div 
        className={styles.header}
        style={{ borderBottomColor: getHeaderBorderColor() }}
      >
        {/* 左上角三点图标 */}
        <div className={styles.dots}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* 中间胶囊标题 */}
        <div 
          className={styles.titleBadge}
          style={{ backgroundColor: getBadgeBgColor() }}
        >
          {title}
        </div>

        {/* 右上角圆形按钮 - tip 状态下不显示 */}
        {state !== 'tip' && (
          <button
            className={styles.toggleButton}
            style={{ backgroundColor: getButtonColor() }}
            onClick={handleToggle}
          disabled={!expandable || state === 'tip'}
          aria-label={state === 'expanded' ? '折叠' : '展开'}
        />
        )}
      </div>

      {/* 内容区域 - 使用 Docusaurus 默认代码块样式 */}
      <div 
        ref={contentRef}
        className={styles.content}
        style={{
          maxHeight: state === 'collapsed' ? '60px' : state === 'tip' ? '120px' : `${contentHeight}px`,
          opacity: state === 'collapsed' ? 0.7 : 1
        }}
      >
        {children}
      </div>
    </div>
  );
}
