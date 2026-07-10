"use client";

import { useState } from "react";
import { Play, CheckCircle2 } from "lucide-react";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { QUEUE_CODE } from "@/lib/mock-data";

const BACKENDS = [
  { id: "nestjs-bull", label: "NestJS + BullMQ" },
  { id: "fastapi-celery", label: "FastAPI + Celery" },
  { id: "go-redis", label: "Go + Redis Streams" },
  { id: "supabase-edge", label: "Supabase Edge Functions" },
];

export function QueueGenerator() {
  const [backend, setBackend] = useState("nestjs-bull");
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(true);

  const handleGenerate = () => {
    setGenerating(true);
    setGenerated(false);
    setTimeout(() => {
      setGenerating(false);
      setGenerated(true);
    }, 1200);
  };

  return (
    <div className="animate-fade-in">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Offline Delivery Queue Generator</h1>
        <p className="mt-1 text-gray-400">
          Backend queue logic with retry semantics and delivery receipts for your stack.
        </p>
      </header>

      <div className="mb-6">
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Backend Framework
        </label>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {BACKENDS.map((b) => (
            <button
              key={b.id}
              onClick={() => setBackend(b.id)}
              className={`rounded-lg border px-3 py-2.5 text-sm transition-all ${
                backend === b.id
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-surface-border text-gray-400 hover:border-gray-500"
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>

      <div className="glass mb-6 rounded-xl p-4">
        <h3 className="mb-3 text-sm font-medium text-gray-300">Queue Configuration</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "Max Retries", value: "5" },
            { label: "Backoff Strategy", value: "Exponential" },
            { label: "Receipt Timeout", value: "30s" },
          ].map(({ label, value }) => (
            <div key={label} className="rounded-lg bg-surface-overlay px-3 py-2">
              <p className="text-xs text-gray-500">{label}</p>
              <p className="text-sm font-medium">{value}</p>
            </div>
          ))}
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
            Generating queue pattern...
          </>
        ) : (
          <>
            <Play className="h-4 w-4" />
            Generate Queue Logic
          </>
        )}
      </button>

      {generated && (
        <div className="animate-slide-up space-y-4">
          <div className="flex items-center gap-2 text-sm text-green-400">
            <CheckCircle2 className="h-4 w-4" />
            Generated offline delivery queue for{" "}
            {BACKENDS.find((b) => b.id === backend)?.label}
          </div>
          <CodeBlock
            code={QUEUE_CODE}
            filename="offline-delivery-queue.ts"
            language="typescript"
          />
        </div>
      )}
    </div>
  );
}
