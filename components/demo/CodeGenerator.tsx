"use client";

import { useState } from "react";
import { Play, FileCode, CheckCircle2 } from "lucide-react";
import { CodeBlock } from "@/components/ui/CodeBlock";
import {
  STACK_OPTIONS,
  SDK_OPTIONS,
  CODE_SAMPLES,
  type StackId,
  type SdkOption,
} from "@/lib/mock-data";

export function CodeGenerator() {
  const [stackId, setStackId] = useState<StackId>("electron-rn-nestjs");
  const [sdk, setSdk] = useState<SdkOption>("libsignal");
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(true);

  const selectedStack = STACK_OPTIONS.find((s) => s.id === stackId)!;
  const sample = CODE_SAMPLES[stackId];

  const handleGenerate = () => {
    setGenerating(true);
    setGenerated(false);
    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
    }, 1500);
  };

  return (
    <div className="animate-fade-in">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Stack-Aware Code Generator</h1>
        <p className="mt-1 text-gray-400">
          Select your stack and SDK to generate complete integration scaffolding.
        </p>
      </header>

      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Technology Stack
          </label>
          <select
            value={stackId}
            onChange={(e) => {
              const id = e.target.value as StackId;
              setStackId(id);
              const stack = STACK_OPTIONS.find((s) => s.id === id)!;
              setSdk(stack.sdk as SdkOption);
            }}
            className="w-full rounded-lg border border-surface-border bg-surface-overlay px-4 py-2.5 text-sm text-white focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
          >
            {STACK_OPTIONS.map((stack) => (
              <option key={stack.id} value={stack.id}>
                {stack.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            E2EE SDK
          </label>
          <div className="flex gap-2">
            {SDK_OPTIONS.map((option) => (
              <button
                key={option}
                onClick={() => setSdk(option)}
                className={`flex-1 rounded-lg border px-4 py-2.5 text-sm transition-all ${
                  sdk === option
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-surface-border text-gray-400 hover:border-gray-500"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={handleGenerate}
        disabled={generating}
        className="mb-8 flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-surface transition-all hover:bg-accent/90 disabled:opacity-60"
      >
        {generating ? (
          <>
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-surface border-t-transparent" />
            Generating scaffolding...
          </>
        ) : (
          <>
            <Play className="h-4 w-4" />
            Generate Integration Code
          </>
        )}
      </button>

      {generated && (
        <div className="animate-slide-up space-y-6">
          <div className="flex items-center gap-2 text-sm text-green-400">
            <CheckCircle2 className="h-4 w-4" />
            Generated {sample.files.length} files for {selectedStack.label} + {sdk}
          </div>

          <div className="flex flex-wrap gap-2">
            {sample.files.map((file) => (
              <span
                key={file}
                className="flex items-center gap-1.5 rounded-md border border-surface-border bg-surface-overlay px-2.5 py-1 font-mono text-xs text-gray-400"
              >
                <FileCode className="h-3 w-3" />
                {file}
              </span>
            ))}
          </div>

          <CodeBlock
            code={sample.code}
            filename={sample.filename}
            language={sample.language}
          />
        </div>
      )}
    </div>
  );
}
