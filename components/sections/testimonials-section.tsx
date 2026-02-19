"use client"

import { motion } from "motion/react"
import { FileText, Receipt, Users, Bell, Palette, Eye, FileDown, CreditCard, Mail, Database, FolderOpen, Zap } from "lucide-react"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

const testimonials = [
  {
    text: "Yes. Convert an approved proposal into an invoice in seconds—keeping line items and totals consistent.",
    name: "Can I turn an approved proposal into an invoice?",
    role: "Invoices",
    icon: Receipt,
  },
  {
    text: "No account needed. Send a simple link and your client can view, comment, and approve right away.",
    name: "Do clients need an account to view proposals?",
    role: "Proposals",
    icon: FileText,
  },
  {
    text: "Absolutely. Add your logo, colors, and reusable templates so everything you send looks consistent and on-brand.",
    name: "Can I customize branding and reuse templates?",
    role: "Branding",
    icon: Palette,
  },
  {
    text: "Yes. Draftup keeps invoice statuses organized and helps you follow up with polite, automated reminders.",
    name: "Does Draftup help with payment follow-up?",
    role: "Payments",
    icon: Bell,
  },
  {
    text: "You’ll see when a proposal is sent, viewed, and approved—so you always know what stage a deal is in.",
    name: "Can I track when a proposal is viewed?",
    role: "Tracking",
    icon: Eye,
  },
  {
    text: "Draftup keeps client details, proposals, and invoices together so you’re not hunting across tools and threads.",
    name: "Is there a place to manage all my clients?",
    role: "Clients",
    icon: Users,
  },
  {
    text: "Yes. Download clean PDFs for proposals and invoices whenever you need to share files or keep records.",
    name: "Can I export proposals and invoices as PDFs?",
    role: "Export",
    icon: FileDown,
  },
  {
    text: "Draftup supports clear line items, totals, and due dates so clients know exactly what they’re paying for.",
    name: "Can I include services, packages, and due dates?",
    role: "Invoices",
    icon: Receipt,
  },
  {
    text: "Starter works great for solo work. Upgrade anytime when you need more invoicing volume, templates, or team features.",
    name: "Which plan should I choose?",
    role: "Pricing",
    icon: CreditCard,
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

const integrations = [
  { name: "Stripe", icon: CreditCard },
  { name: "PDF Export", icon: FileText },
  { name: "Resend", icon: Mail },
  { name: "Supabase", icon: Database },
  { name: "Google Drive", icon: FolderOpen },
  { name: "Zapier", icon: Zap },
]

export function TestimonialsSection() {
  return (
    <section id="faq" className="px-6 py-24 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12"
        >
          <div className="border border-zinc-800 py-1.5 px-4 rounded-full text-sm text-zinc-400">FAQ</div>

          <h2 className="font-display text-4xl md:text-5xl font-bold text-zinc-100 mt-6 text-center tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-center mt-4 text-zinc-500 text-lg text-balance">
            Quick answers about proposals, invoices, and getting paid with Draftup.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>

        <div className="mt-16 pt-16 border-t border-zinc-800/50">
          <p className="text-center text-sm text-zinc-500 mb-8">Powered by tools you trust</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              className="flex gap-12 md:gap-16"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                },
              }}
            >
              {[...integrations, ...integrations].map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={`${item.name}-${index}`}
                    className="flex items-center gap-2 whitespace-nowrap flex-shrink-0 text-zinc-700"
                  >
                    <Icon className="h-6 w-6 text-zinc-500" />
                    <span className="text-xl font-semibold">{item.name}</span>
                  </div>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
