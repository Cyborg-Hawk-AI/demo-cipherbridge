import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-accent/20 bg-gradient-to-br from-accent/10 via-surface-raised to-brand/10 p-12 text-center md:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand/10 blur-3xl" />

          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Stop wrestling with prekey bundles
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-gray-400">
              Try the interactive demo — pick your stack, generate integration code, and
              diagnose real-world E2EE errors in under five minutes.
            </p>
            <Link
              href="/demo"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5 text-base font-semibold text-surface transition-all hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/25"
            >
              Open Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
