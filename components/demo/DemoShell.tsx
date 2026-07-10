"use client";

import { useState } from "react";
import {
  Bot,
  Code2,
  KeyRound,
  RefreshCw,
  Users,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { CodeGenerator } from "./CodeGenerator";
import { KeyWizard } from "./KeyWizard";
import { QueueGenerator } from "./QueueGenerator";
import { GroupSchema } from "./GroupSchema";
import { TroubleshootingAgent } from "./TroubleshootingAgent";

const tabs = [
  { id: "generator", label: "Code Generator", icon: Code2 },
  { id: "keys", label: "Key Wizard", icon: KeyRound },
  { id: "queue", label: "Delivery Queue", icon: RefreshCw },
  { id: "groups", label: "Group Schema", icon: Users },
  { id: "agent", label: "Troubleshooting", icon: Bot },
] as const;

export type DemoTab = (typeof tabs)[number]["id"];

export function DemoShell() {
  const [activeTab, setActiveTab] = useState<DemoTab>("generator");
  const [generating, setGenerating] = useState(false);

  const handleTabChange = (tab: DemoTab) => {
    if (tab !== activeTab) {
      setGenerating(true);
      setActiveTab(tab);
      setTimeout(() => setGenerating(false), 600);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="border-b border-surface-border bg-surface-raised/50 lg:w-64 lg:border-b-0 lg:border-r">
        <div className="p-4">
          <div className="mb-4 flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-2">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-xs font-medium text-accent">Mock Demo Mode</span>
          </div>
          <nav className="space-y-1">
            {tabs.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleTabChange(id)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-all ${
                  activeTab === id
                    ? "bg-accent/15 text-accent"
                    : "text-gray-400 hover:bg-surface-overlay hover:text-white"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {label}
                {activeTab === id && <ChevronRight className="ml-auto h-4 w-4" />}
              </button>
            ))}
          </nav>
        </div>

        <div className="hidden border-t border-surface-border p-4 lg:block">
          <p className="text-xs leading-relaxed text-gray-500">
            All outputs are pre-generated sample code. No API keys or backend required.
          </p>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto p-6 lg:p-8">
        {generating ? (
          <div className="flex h-64 items-center justify-center">
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-accent border-t-transparent" />
              <p className="text-sm text-gray-400">Loading module...</p>
            </div>
          </div>
        ) : (
          <>
            {activeTab === "generator" && <CodeGenerator />}
            {activeTab === "keys" && <KeyWizard />}
            {activeTab === "queue" && <QueueGenerator />}
            {activeTab === "groups" && <GroupSchema />}
            {activeTab === "agent" && <TroubleshootingAgent />}
          </>
        )}
      </main>
    </div>
  );
}
