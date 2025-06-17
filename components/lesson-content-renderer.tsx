"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Custom code block component with copy functionality
function CodeBlock({ children, className, ...props }: any) {
  const [copied, setCopied] = useState(false);
  const match = /language-(\w+)/.exec(className || "");
  const language = match ? match[1] : "javascript";

  // Extract string content from children
  const getCodeString = (children: any): string => {
    if (typeof children === "string") {
      return children;
    }
    if (Array.isArray(children)) {
      return children
        .map((child) =>
          typeof child === "string" ? child : child?.props?.children || ""
        )
        .join("");
    }
    if (children?.props?.children) {
      return getCodeString(children.props.children);
    }
    return String(children || "");
  };

  const code = getCodeString(children).replace(/\n$/, "");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  if (match) {
    return (
      <div className='relative mb-4'>
        <div className='flex items-center justify-between bg-gray-800 text-white px-4 py-2 rounded-t-lg'>
          <span className='text-sm font-medium capitalize'>{language}</span>
          <Button
            variant='ghost'
            size='sm'
            onClick={copyToClipboard}
            className='text-white hover:bg-gray-700 h-8 w-8 p-0'>
            {copied ? (
              <Check className='w-4 h-4' />
            ) : (
              <Copy className='w-4 h-4' />
            )}
          </Button>
        </div>
        <SyntaxHighlighter
          style={oneDark}
          language={language}
          PreTag='div'
          className='!mt-0 !rounded-t-none'
          customStyle={{
            margin: 0,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          }}>
          {code}
        </SyntaxHighlighter>
      </div>
    );
  }

  return (
    <code
      className='bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800'
      {...props}>
      {code}
    </code>
  );
}

// Custom components for react-markdown
const markdownComponents = {
  code: CodeBlock,
  h1: ({ children }: any) => (
    <h1 className='text-3xl font-bold mb-6 text-gray-900 border-b pb-2'>
      {children}
    </h1>
  ),
  h2: ({ children }: any) => (
    <h2 className='text-2xl font-semibold mb-4 text-gray-800 mt-8'>
      {children}
    </h2>
  ),
  h3: ({ children }: any) => (
    <h3 className='text-xl font-semibold mb-3 text-gray-700 mt-6'>
      {children}
    </h3>
  ),
  p: ({ children }: any) => (
    <p className='mb-4 text-gray-700 leading-relaxed'>{children}</p>
  ),
  ul: ({ children }: any) => (
    <ul className='list-disc list-inside mb-4 space-y-2 ml-4'>{children}</ul>
  ),
  ol: ({ children }: any) => (
    <ol className='list-decimal list-inside mb-4 space-y-2 ml-4'>{children}</ol>
  ),
  li: ({ children }: any) => <li className='text-gray-700'>{children}</li>,
  strong: ({ children }: any) => (
    <strong className='font-bold text-gray-900'>{children}</strong>
  ),
  em: ({ children }: any) => (
    <em className='italic text-gray-800'>{children}</em>
  ),
  blockquote: ({ children }: any) => (
    <blockquote className='border-l-4 border-blue-500 pl-4 py-2 mb-4 bg-blue-50 italic'>
      {children}
    </blockquote>
  ),
};

interface LessonContentProps {
  content: string;
}

export default function LessonContent({ content }: LessonContentProps) {
  return (
    <div className='prose prose-lg max-w-none mb-8'>
      <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
    </div>
  );
}
