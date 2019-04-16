// @ts-nocheck
import theme from 'mdx-deck/themes';

export default {
  ...theme,
  colors: {
    ...theme.colors,
    text: '#011627',
  },

  blockquote: {
    borderLeft: '10px solid #eee',
    paddingLeft: '50px',
    fontWeight: '400',
    fontSize: '1.25em',
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
