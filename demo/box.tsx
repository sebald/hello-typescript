import React from 'react';

type HtmlTag = keyof JSX.IntrinsicElements;

export type BoxProps<Tag extends HtmlTag = 'div'> = {
  as?: Tag;
  children?: React.ReactNode;
} & JSX.IntrinsicElements[Tag];

export const Box = <T extends HtmlTag>({ as, ...props }: BoxProps<T>) =>
  React.createElement(as || 'div', props);

// ---

<Box as="a" href="https://devsmeetup.de" />;

// Error, HTML button does not have a [href]
<Box as="button" href="https://devsmeetup.de" />;
