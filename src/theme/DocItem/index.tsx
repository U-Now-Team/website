import React from 'react';
import DocItem from '@theme-original/DocItem';
import Giscus from '@giscus/react';

export default function DocItemWithComments(props) {
  return (
    <>
      <DocItem {...props} />
      <div className="margin-top--xl">
        <Giscus
          id="comments"
          repo="U-Now-Team/website"
          repoId="R_kgDORiLwWQ"
          category="General"
          categoryId="DIC_kwDORiLwWc4C4OA7"
          mapping="pathname"
          strict="0"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="bottom"
          theme="preferred_color_scheme"
          lang="zh-CN"
          loading="lazy"
        />
      </div>
    </>
  );
}
