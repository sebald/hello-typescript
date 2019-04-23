import React from 'react';

type Tags = keyof JSX.IntrinsicElements;

export type BoxProps<Tag extends Tags = 'div'> = {
  as?: Tag;
  children?: React.ReactNode;
} & JSX.IntrinsicElements[Tag];

export const Box = <T extends Tags>({
  as,
  ...props
}: BoxProps<T>) =>
  React.createElement(as || 'div', props);

// ---

<Box as="a" href="https://devsmeetup.de" />;

// Error, HTML button does not have a [href]
<Box as="button" href="https://devsmeetup.de" />;
