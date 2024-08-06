"use client";

import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import MDXContent from './index.mdx';

export default function Page() {
  return (
    <MDXProvider>
      <MDXContent />
    </MDXProvider>
  );
}
