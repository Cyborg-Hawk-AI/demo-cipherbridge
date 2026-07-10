import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { DemoShell } from "@/components/demo/DemoShell";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-surface">
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-surface-border bg-surface/90 px-6 backdrop-blur-xl">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
        <span className="text-sm font-medium text-gray-300">CipherBridge Demo</span>
        <div className="w-24" />
      </header>
      <DemoShell />
    </div>
  );
}
