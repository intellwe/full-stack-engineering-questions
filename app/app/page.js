"use client";

import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import MDXContent from './index.mdx';

export default function Page() {
  return (
    <div className="prose prose-lg prose-indigo mx-auto px-4 py-8">
      <MDXProvider>
        <MDXContent />
      </MDXProvider>
    </div>
  );
}
