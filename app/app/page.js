"use client";

import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import MDXContent from './index.mdx';
import Sidebar from './sidebar';
import CopyableCodeBlock from './CopyableCodeBlock';

const components = {
  code: (props) => <CopyableCodeBlock {...props} />,
};

export default function Page() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="prose prose-lg prose-indigo mx-auto px-4 py-8 ml-64">
        <MDXProvider components={components}>
          <MDXContent />
        </MDXProvider>
      </div>

    </div>
  );
}
