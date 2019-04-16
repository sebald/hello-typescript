// @ts-nocheck

import theme from 'mdx-deck/themes';
import tomorrow from 'react-syntax-highlighter/styles/prism/tomorrow';
import prismTypeScript from 'react-syntax-highlighter/languages/prism/typescript';

export default {
  ...theme,
  colors: {
    ...theme.colors,
    heading: '#0074D9',
  },
  prism: {
    style: tomorrow,
    languages: {
      ts: prismTypeScript,
    },
  },

  blockquote: {
    borderLeft: '10px solid #eee',
    paddingLeft: '50px',
    fontWeight: '400',
  },

  li: {
    paddingBottom: '10px',
  },
  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
};
