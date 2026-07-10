"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  filename?: string;
  language?: string;
}

export function CodeBlock({ code, filename, language = "typescript" }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="overflow-hidden rounded-lg border border-surface-border bg-[#0d1117]">
      {filename && (
        <div className="flex items-center justify-between border-b border-surface-border px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-gray-400">{filename}</span>
            <span className="rounded bg-surface-overlay px-1.5 py-0.5 font-mono text-[10px] uppercase text-accent-muted">
              {language}
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-gray-400 transition-colors hover:bg-surface-overlay hover:text-white"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-green-400" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                Copy
              </>
            )}
          </button>
        </div>
      )}
      <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-gray-300">
        <code>{code}</code>
      </pre>
    </div>
  );
}
