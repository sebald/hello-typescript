// @ts-nocheck

import React from 'react';
import { CodeSurfer } from 'mdx-deck-code-surfer';
import vs from 'prism-react-renderer/themes/vsDarkPlus';

export default props => (
  <CodeSurfer lang="typescript" showNumbers={false} theme={vs} {...props} />
);
