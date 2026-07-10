import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    price: 79,
    description: "For solo engineers shipping their first E2EE feature.",
    features: [
      "1 project",
      "50 AI queries / month",
      "Stack-aware code generator",
      "Key management wizard",
      "Community support",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: 199,
    description: "For teams building production chat or healthcare messaging.",
    features: [
      "5 projects",
      "Unlimited AI queries",
      "All generators + troubleshooting agent",
      "Offline queue & group schema tools",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Team",
    price: 499,
    description: "For orgs with compliance requirements and multiple products.",
    features: [
      "Unlimited projects",
      "Team seats & shared workspaces",
      "Private deployment option",
      "Custom stack templates",
      "Dedicated onboarding call",
    ],
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-surface-border bg-surface-raised/30 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="text-gray-400">
            Start with a 14-day free trial. No credit card required for the demo.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-8 ${
                tier.highlighted
                  ? "border-accent/50 bg-gradient-to-b from-accent/10 to-transparent shadow-xl shadow-accent/10"
                  : "border-surface-border glass"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-surface">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold">{tier.name}</h3>
              <p className="mt-2 text-sm text-gray-400">{tier.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-bold">${tier.price}</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-300">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-8 w-full rounded-xl py-3 text-sm font-semibold transition-all ${
                  tier.highlighted
                    ? "bg-accent text-surface hover:bg-accent/90"
                    : "border border-surface-border text-gray-300 hover:border-gray-500 hover:text-white"
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
