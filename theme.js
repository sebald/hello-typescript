// @ts-nocheck
import theme from 'mdx-deck/themes';

export default {
  ...theme,
  colors: {
    ...theme.colors,
    text: '#011627',
    link: '#011627',
  },

  heading: {
    position: 'relative',
    '&:before': {
      content: '""',
      position: 'absolute',
      bottom: '1%',
      left: '3%',
      right: '3%',
      height: '25%',
      background: '#7fdbca',
      opacity: '0.5',
      zIndex: '-1'
    },
  },

  h1: {
    '&:before': {
      background: 'none',
    },
  },

  blockquote: {
    borderLeft: '20px solid rgba(127, 219, 202, 0.5)',
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
