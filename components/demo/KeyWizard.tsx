"use client";

import { useState } from "react";
import { ChevronRight, ChevronLeft, CheckCircle2, Info } from "lucide-react";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { KEY_WIZARD_STEPS, KEY_WIZARD_CODE } from "@/lib/mock-data";

export function KeyWizard() {
  const [step, setStep] = useState(0);
  const [completed, setCompleted] = useState<number[]>([]);

  const current = KEY_WIZARD_STEPS[step];
  const isLast = step === KEY_WIZARD_STEPS.length - 1;

  const handleNext = () => {
    if (!completed.includes(step)) {
      setCompleted([...completed, step]);
    }
    if (!isLast) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="animate-fade-in">
      <header className="mb-8">
        <h1 className="text-2xl font-bold">Multi-Device Key Management Wizard</h1>
        <p className="mt-1 text-gray-400">
          AI-guided setup for key rotation, device linking, and revocation flows.
        </p>
      </header>

      {/* Progress */}
      <div className="mb-8 flex items-center gap-2">
        {KEY_WIZARD_STEPS.map((s, i) => (
          <div key={s.id} className="flex items-center gap-2">
            <button
              onClick={() => setStep(i)}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-all ${
                i === step
                  ? "bg-accent text-surface"
                  : completed.includes(i)
                    ? "bg-green-500/20 text-green-400"
                    : "bg-surface-overlay text-gray-500"
              }`}
            >
              {completed.includes(i) ? "✓" : i + 1}
            </button>
            {i < KEY_WIZARD_STEPS.length - 1 && (
              <div
                className={`h-0.5 w-8 ${completed.includes(i) ? "bg-green-500/40" : "bg-surface-border"}`}
              />
            )}
          </div>
        ))}
      </div>

      <div className="glass mb-6 rounded-2xl p-6">
        <h2 className="text-lg font-semibold">{current.title}</h2>
        <p className="mt-2 text-gray-400">{current.description}</p>

        <div className="mt-4 flex gap-3 rounded-lg border border-accent/20 bg-accent/5 p-4">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
          <p className="text-sm text-gray-300">{current.annotation}</p>
        </div>
      </div>

      {isLast && completed.includes(step) && (
        <div className="animate-slide-up mb-6">
          <div className="mb-4 flex items-center gap-2 text-sm text-green-400">
            <CheckCircle2 className="h-4 w-4" />
            Wizard complete — annotated code output ready
          </div>
          <CodeBlock
            code={KEY_WIZARD_CODE}
            filename="key-rotation.ts"
            language="typescript"
          />
        </div>
      )}

      <div className="flex gap-3">
        <button
          onClick={handlePrev}
          disabled={step === 0}
          className="flex items-center gap-1 rounded-lg border border-surface-border px-4 py-2 text-sm text-gray-400 transition-colors hover:text-white disabled:opacity-40"
        >
          <ChevronLeft className="h-4 w-4" />
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={isLast && completed.includes(step)}
          className="flex items-center gap-1 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-surface transition-all hover:bg-accent/90 disabled:opacity-60"
        >
          {isLast ? "Complete" : "Next Step"}
          {!isLast && <ChevronRight className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
