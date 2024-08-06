// app/CopyableCodeBlock.js
import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FaRegCopy, FaCheck } from 'react-icons/fa';

const CopyableCodeBlock = ({ children, language }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = (code) => {
        navigator.clipboard.writeText(code).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="relative">
            <button
                onClick={() => copyToClipboard(children)}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-200"
            >
                {copied ? <FaCheck /> : <FaRegCopy />}
            </button>
            <SyntaxHighlighter language={language} style={darcula}>
                {children}
            </SyntaxHighlighter>
        </div>
    );
};

export default CopyableCodeBlock;
