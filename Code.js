// @ts-nocheck

import React from 'react';
import { CodeSurfer } from 'mdx-deck-code-surfer';
import theme from 'prism-react-renderer/themes/nightOwl';

export default ({ code, lang, ...props }) => {
  const raw = typeof code === 'string' ? code : code.default;
  return (
    <CodeSurfer
      lang={lang || 'typescript'}
      showNumbers={false}
      theme={theme}
      code={raw}
      {...props}
    />
  );
};
