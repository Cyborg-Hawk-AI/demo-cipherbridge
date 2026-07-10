import Link from "next/link";
import { Shield } from "lucide-react";

export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-surface-border/50 bg-surface/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-accent to-brand">
            <Shield className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-semibold tracking-tight">CipherBridge</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/#features" className="text-sm text-gray-400 transition-colors hover:text-white">
            Features
          </Link>
          <Link href="/#pricing" className="text-sm text-gray-400 transition-colors hover:text-white">
            Pricing
          </Link>
          <Link
            href="/demo"
            className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-surface transition-all hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20"
          >
            Try Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-surface-border bg-surface-raised/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 md:flex-row">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-accent" />
          <span className="font-semibold">CipherBridge</span>
        </div>
        <p className="text-sm text-gray-500">
          Production E2EE integration scaffolding for any stack.
        </p>
        <p className="text-xs text-gray-600">© 2026 CipherBridge. Demo mock — not affiliated with Signal or Matrix.</p>
      </div>
    </footer>
  );
}
