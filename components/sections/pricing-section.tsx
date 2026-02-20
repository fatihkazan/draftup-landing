"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Freelancer",
    priceMonthly: 9,
    priceYearly: 7,
    checkoutUrl: "https://draftup.lemonsqueezy.com/checkout/buy/929f6b32-b7e5-4364-b8e8-f3f923d75cb2",
    features: [
      "1 user",
      "10 invoices/month",
      "Proposal creation",
      "PDF export",
      "Client portal",
      "Email sending",
      "Payment tracking",
    ],
    highlighted: false,
  },
  {
    name: "Starter",
    priceMonthly: 19,
    priceYearly: 15,
    checkoutUrl: "https://draftup.lemonsqueezy.com/checkout/buy/c4f2026b-d6d0-4426-9d7f-40aa3bb0feeb",
    features: [
      "3 users",
      "25 invoices/month",
      "Proposal creation",
      "PDF export",
      "Client portal",
      "Email sending",
      "Payment tracking",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    priceMonthly: 39,
    priceYearly: 31,
    checkoutUrl: "https://draftup.lemonsqueezy.com/checkout/buy/782eb6ff-2248-4ed3-8998-6f1b92f74712",
    features: [
      "10 users",
      "150 invoices/month",
      "Proposal creation",
      "PDF export",
      "Client portal",
      "Email sending",
      "Payment tracking",
      "Automatic payment reminders",
      "Priority support",
    ],
    badge: "Most Popular",
    highlighted: true,
  },
  {
    name: "Scale",
    priceMonthly: 79,
    priceYearly: 63,
    checkoutUrl: "https://draftup.lemonsqueezy.com/checkout/buy/700085c2-d105-4c79-8200-cdd78ea01cf7",
    features: [
      "50 users",
      "Unlimited invoices",
      "Proposal creation",
      "PDF export",
      "Client portal",
      "Email sending",
      "Payment tracking",
      "Automatic payment reminders",
      "Priority support",
    ],
    highlighted: false,
  },
]

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Pricing</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-100 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance text-lg mb-8">
            Start small, upgrade anytime. Everything you need to send proposals and get paid on time.
          </p>

          {/* Monthly / Yearly Toggle */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !isYearly ? "bg-zinc-100 text-zinc-900" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                isYearly ? "bg-zinc-100 text-zinc-900" : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              Yearly
            </button>
            <span className="bg-[#22C55E] text-black text-xs font-medium px-3 py-1 rounded-full">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {plans.map((plan) => {
            const price = isYearly ? plan.priceYearly : plan.priceMonthly
            return (
              <div
                key={plan.name}
                className={`relative p-6 sm:p-8 rounded-2xl border flex flex-col h-full ${
                  plan.highlighted ? "bg-zinc-100 border-zinc-100" : "bg-zinc-900/50 border-zinc-800/50"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-[#22C55E] text-black text-xs font-medium px-3 py-1 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}
                {/* Plan Header */}
                <div className="mb-6">
                  <h3
                    className={`font-heading text-xl font-semibold ${
                      plan.highlighted ? "text-zinc-900" : "text-zinc-100"
                    }`}
                  >
                    {plan.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span
                    className={`font-display text-4xl font-bold ${plan.highlighted ? "text-zinc-900" : "text-zinc-100"}`}
                  >
                    ${price}
                  </span>
                  <span className={`text-sm ${plan.highlighted ? "text-zinc-600" : "text-zinc-500"}`}>/mo</span>
                  {isYearly && (
                    <p className={`text-xs mt-1 ${plan.highlighted ? "text-zinc-500" : "text-zinc-600"}`}>
                      billed annually
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 shrink-0 ${plan.highlighted ? "text-zinc-900" : "text-zinc-400"}`} />
                      <span className={`text-sm ${plan.highlighted ? "text-zinc-700" : "text-zinc-400"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={plan.checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-6 text-center rounded-full font-medium text-sm transition-colors mt-auto bg-[#22C55E] text-black hover:bg-[#1ea34f]"
                >
                  Get Started
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
