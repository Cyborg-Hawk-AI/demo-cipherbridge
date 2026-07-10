"use client";

import { useState } from "react";
import { Play, CheckCircle2, Users, UserPlus, UserMinus } from "lucide-react";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { GROUP_SCHEMA_CODE } from "@/lib/mock-data";

export function GroupSchema() {
  const [memberCount, setMemberCount] = useState(5);
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(true);
  const [action, setAction] = useState<"create" | "add" | "remove">("create");

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
        <h1 className="text-2xl font-bold">Group Messaging Schema Generator</h1>
        <p className="mt-1 text-gray-400">
          Megolm sender key distribution and member management patterns with forward secrecy.
        </p>
      </header>

      <div className="mb-6 grid gap-6 lg:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Group Size
          </label>
          <input
            type="range"
            min={2}
            max={50}
            value={memberCount}
            onChange={(e) => setMemberCount(Number(e.target.value))}
            className="w-full accent-accent"
          />
          <div className="mt-1 flex items-center gap-2 text-sm text-gray-400">
            <Users className="h-4 w-4" />
            {memberCount} members
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Operation
          </label>
          <div className="flex gap-2">
            {[
              { id: "create" as const, label: "Create Group", icon: Users },
              { id: "add" as const, label: "Add Member", icon: UserPlus },
              { id: "remove" as const, label: "Remove Member", icon: UserMinus },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setAction(id)}
                className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg border px-2 py-2.5 text-xs transition-all ${
                  action === id
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-surface-border text-gray-400 hover:border-gray-500"
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="glass mb-6 rounded-xl p-4">
        <h3 className="mb-3 text-sm font-medium text-gray-300">Schema Preview</h3>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { label: "Key Algorithm", value: "Megolm (AES-256)" },
            { label: "Epoch on Member Change", value: "Yes" },
            { label: "Device Fan-out", value: `${memberCount * 2} devices` },
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
            Generating schema...
          </>
        ) : (
          <>
            <Play className="h-4 w-4" />
            Generate Group Schema
          </>
        )}
      </button>

      {generated && (
        <div className="animate-slide-up space-y-4">
          <div className="flex items-center gap-2 text-sm text-green-400">
            <CheckCircle2 className="h-4 w-4" />
            Generated {action} pattern for {memberCount}-member group
          </div>
          <CodeBlock
            code={GROUP_SCHEMA_CODE}
            filename="group-key-manager.ts"
            language="typescript"
          />
        </div>
      )}
    </div>
  );
}
