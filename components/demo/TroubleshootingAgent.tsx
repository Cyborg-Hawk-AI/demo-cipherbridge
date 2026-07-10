"use client";

import { useState } from "react";
import { Send, Bot, AlertTriangle, Lightbulb } from "lucide-react";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { TROUBLESHOOTING_SAMPLES } from "@/lib/mock-data";

export function TroubleshootingAgent() {
  const [input, setInput] = useState("");
  const [selectedSample, setSelectedSample] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [response, setResponse] = useState<
    (typeof TROUBLESHOOTING_SAMPLES)[number]["response"] | null
  >(null);

  const handleAnalyze = () => {
    setAnalyzing(true);
    setResponse(null);

    setTimeout(() => {
      const match =
        TROUBLESHOOTING_SAMPLES.find(
          (s) =>
            selectedSample === s.id ||
            input.toLowerCase().includes(s.prompt.toLowerCase().slice(0, 20)) ||
            input.toLowerCase().includes(s.id.replace("-", " ")),
        ) ?? TROUBLESHOOTING_SAMPLES[0];

      setSelectedSample(match.id);
      setResponse(match.response);
      setAnalyzing(false);
    }, 2000);
  };

  const loadSample = (id: string) => {
    const sample = TROUBLESHOOTING_SAMPLES.find((s) => s.id === id)!;
    setInput(sample.log);
    setSelectedSample(id);
    setResponse(null);
  };

  return (
    <div className="animate-fade-in">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Interactive Troubleshooting Agent</h1>
        <p className="mt-1 text-gray-400">
          Paste error logs or describe your integration issue — get corrected code and explanations.
        </p>
      </header>

      <div className="mb-4">
        <p className="mb-2 text-sm font-medium text-gray-300">Quick samples</p>
        <div className="flex flex-wrap gap-2">
          {TROUBLESHOOTING_SAMPLES.map((s) => (
            <button
              key={s.id}
              onClick={() => loadSample(s.id)}
              className={`rounded-lg border px-3 py-1.5 text-xs transition-all ${
                selectedSample === s.id
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-surface-border text-gray-400 hover:border-gray-500"
              }`}
            >
              {s.prompt.slice(0, 40)}...
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Error log or question
        </label>
        <textarea
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setResponse(null);
          }}
          rows={6}
          placeholder="Paste your stack trace, error message, or integration question here..."
          className="w-full resize-none rounded-lg border border-surface-border bg-surface-overlay px-4 py-3 font-mono text-sm text-gray-300 placeholder:text-gray-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      <button
        onClick={handleAnalyze}
        disabled={!input.trim() || analyzing}
        className="mb-8 flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-surface transition-all hover:bg-accent/90 disabled:opacity-60"
      >
        {analyzing ? (
          <>
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-surface border-t-transparent" />
            Analyzing with CipherBridge AI...
          </>
        ) : (
          <>
            <Send className="h-4 w-4" />
            Diagnose &amp; Fix
          </>
        )}
      </button>

      {response && (
        <div className="animate-slide-up space-y-6">
          <div className="glass rounded-xl p-5">
            <div className="mb-2 flex items-center gap-2 text-accent">
              <Bot className="h-5 w-5" />
              <span className="font-semibold">Diagnosis</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">{response.diagnosis}</p>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-2 text-sm font-medium text-gray-300">
              <AlertTriangle className="h-4 w-4 text-yellow-400" />
              Corrected Code
            </div>
            <CodeBlock code={response.fix} filename="fix.ts" language="typescript" />
          </div>

          <div className="flex gap-3 rounded-xl border border-brand/20 bg-brand/5 p-4">
            <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
            <p className="text-sm leading-relaxed text-gray-300">{response.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
}
