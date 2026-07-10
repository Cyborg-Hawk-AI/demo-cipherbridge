import {
  Bot,
  Code2,
  KeyRound,
  MessageSquareShare,
  RefreshCw,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Stack-Aware Code Generator",
    description:
      "Input your stack — Electron + React Native + NestJS, Flutter + Go, Vue + FastAPI — and receive complete libsignal or Matrix SDK integration scaffolding with platform-specific secure storage.",
  },
  {
    icon: KeyRound,
    title: "Multi-Device Key Management Wizard",
    description:
      "AI-guided flows for key rotation, QR device linking, Safety Number verification, and device revocation — with annotated code output for every step.",
  },
  {
    icon: RefreshCw,
    title: "Offline Delivery Queue Generator",
    description:
      "Backend queue logic with exponential retry, delivery receipts, and idempotency guards — tailored to your framework's job runner or message broker.",
  },
  {
    icon: Users,
    title: "Group Messaging Schema Generator",
    description:
      "Megolm sender key distribution, member add/remove with forward secrecy, and epoch rotation patterns — ready to drop into your codebase.",
  },
  {
    icon: Bot,
    title: "Interactive Troubleshooting Agent",
    description:
      "Paste error logs or integration questions. The agent diagnoses root causes and returns corrected code snippets with plain-language explanations.",
  },
  {
    icon: MessageSquareShare,
    title: "Spec-Aligned Output",
    description:
      "Fine-tuned on libsignal source, Matrix spec, Signal Protocol papers, and real GitHub integration issues — output quality no general LLM can match.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Everything you need to ship{" "}
            <span className="text-gradient">encrypted messaging</span>
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            From first prekey upload to group chat sender key rotation — CipherBridge
            handles the cryptography complexity so you can focus on product.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group glass rounded-2xl p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                <Icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{title}</h3>
              <p className="text-sm leading-relaxed text-gray-400">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
