import Link from "next/link";
import { ArrowRight, Lock, Sparkles, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-grid-pattern bg-[size:64px_64px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-sm text-accent">
            <Sparkles className="h-3.5 w-3.5" />
            libsignal &amp; Matrix SDK — any stack
          </div>

          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            Production E2EE chat integration{" "}
            <span className="text-gradient">in minutes, not months</span>
          </h1>

          <p className="mb-10 text-lg leading-relaxed text-gray-400 md:text-xl">
            CipherBridge generates complete, runnable scaffolding for end-to-end encrypted
            messaging — stack-aware code, key management wizards, offline delivery queues, and
            an AI troubleshooting agent. No cryptography PhD required.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/demo"
              className="group flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5 text-base font-semibold text-surface transition-all hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/25"
            >
              Launch Interactive Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#features"
              className="rounded-xl border border-surface-border px-8 py-3.5 text-base font-medium text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
            >
              See Features
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { icon: Lock, label: "Signal Protocol & Olm/Megolm", sub: "Battle-tested E2EE" },
              { icon: Zap, label: "5 stacks supported", sub: "Electron, RN, NestJS & more" },
              { icon: Sparkles, label: "AI-guided setup", sub: "Key rotation to group schemas" },
            ].map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="glass rounded-xl p-5 text-left"
              >
                <Icon className="mb-3 h-5 w-5 text-accent" />
                <p className="font-medium text-white">{label}</p>
                <p className="mt-1 text-sm text-gray-500">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
