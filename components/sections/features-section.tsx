"use client"

import { motion } from "framer-motion"
import { Zap, BarChart3, Layers, Command } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function FeaturesSection() {
  return (
    <section id="features" className="px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">Features</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-100 mb-4">
            Everything you need to close deals
          </h2>
          <p className="text-zinc-500 max-w-xl mx-auto text-balance">
            Create proposals, send invoices, and stay on top of every client—without juggling spreadsheets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-3">
          {/* Card 1 - Analytics (wider - 3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3"
          >
            <Card className="group h-full overflow-hidden border-zinc-800/50 bg-zinc-900/50 hover:border-zinc-700/50 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <BarChart3 className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-zinc-100">Proposal Builder</p>
                </div>
                <p className="text-zinc-500 text-sm mb-5">
                  Build polished proposals with templates, scope blocks, and pricing tables.
                </p>
                <div className="rounded-xl border border-zinc-800 bg-[#1a1a1a] p-4">
                  <div className="rounded-lg border border-zinc-700 bg-zinc-900/70 p-3">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <p className="text-zinc-300 text-xs">Proposal</p>
                        <p className="text-zinc-100 text-sm font-semibold">Website Redesign</p>
                      </div>
                      <span className="text-[10px] font-medium px-2 py-1 rounded-full bg-[#22C55E]/20 text-[#22C55E] border border-[#22C55E]/40">
                        Approved
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between mb-3">
                      <p className="text-zinc-500 text-xs">Total</p>
                      <p className="text-zinc-100 text-lg font-bold">$4,800</p>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <p className="text-zinc-500 text-[11px]">Completion</p>
                        <p className="text-zinc-400 text-[11px]">72%</p>
                      </div>
                      <div className="h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                        <div className="h-full w-[72%] rounded-full bg-[#22C55E]" />
                      </div>
                    </div>
                    <div className="mt-3 flex gap-1.5">
                      {["Draft", "Sent", "Approved"].map((state) => (
                        <span
                          key={state}
                          className={`text-[10px] px-1.5 py-0.5 rounded border ${
                            state === "Approved"
                              ? "bg-[#22C55E]/20 text-[#22C55E] border-[#22C55E]/40"
                              : "bg-zinc-800 text-zinc-400 border-zinc-700"
                          }`}
                        >
                          {state}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2 - Performance (narrower - 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <Card className="group h-full overflow-hidden border-zinc-800/50 bg-zinc-900/50 hover:border-zinc-700/50 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    <Zap className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-zinc-100">Invoice Tracking</p>
                </div>
                <p className="text-zinc-500 text-sm mb-5">Know what’s sent, viewed, paid, or overdue in real time.</p>
                <div className="rounded-xl border border-zinc-800 bg-[#1a1a1a] p-3 mt-auto">
                  <div className="space-y-2">
                    {[
                      { client: "Acme Co", amount: "$1,250", status: "Paid" },
                      { client: "North Studio", amount: "$860", status: "Pending" },
                      { client: "Atlas Labs", amount: "$2,100", status: "Overdue" },
                    ].map((invoice) => (
                      <div
                        key={invoice.client}
                        className="rounded-md border border-zinc-700 bg-zinc-900/70 p-2.5 flex items-center justify-between gap-2"
                      >
                        <div>
                          <p className="text-zinc-100 text-xs font-medium">{invoice.client}</p>
                          <p className="text-zinc-400 text-[11px]">{invoice.amount}</p>
                        </div>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full border ${
                            invoice.status === "Paid"
                              ? "bg-[#22C55E]/20 text-[#22C55E] border-[#22C55E]/40"
                              : invoice.status === "Pending"
                                ? "bg-amber-500/15 text-amber-300 border-amber-500/30"
                                : "bg-red-500/15 text-red-300 border-red-500/30"
                          }`}
                        >
                          {invoice.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 3 - Keyboard shortcuts (narrower - 2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2"
          >
            <Card className="group h-full overflow-hidden border-zinc-800/50 bg-zinc-900/50 hover:border-zinc-700/50 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center"
                    whileHover={{ y: -2 }}
                  >
                    <Command className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-zinc-100">Client Management</p>
                </div>
                <p className="text-zinc-500 text-sm mb-5">Keep contacts, notes, and deal history organized in one place.</p>
                <div className="rounded-xl border border-zinc-800 bg-[#1a1a1a] p-4 mt-auto">
                  <div className="rounded-lg border border-zinc-700 bg-zinc-900/70 p-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#22C55E]/20 border border-[#22C55E]/40 flex items-center justify-center text-[#22C55E] text-sm font-semibold">
                        AJ
                      </div>
                      <div className="min-w-0">
                        <p className="text-zinc-100 text-sm font-semibold truncate">Ava Johnson</p>
                        <p className="text-zinc-400 text-xs truncate">North Studio</p>
                      </div>
                    </div>
                    <div className="rounded-md border border-zinc-700 bg-zinc-800/60 p-2.5 flex items-center justify-between">
                      <p className="text-zinc-400 text-xs">Revenue</p>
                      <p className="text-[#22C55E] text-sm font-semibold">$24,300</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 4 - Integrations (wider - 3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-3"
          >
            <Card className="group h-full overflow-hidden border-zinc-800/50 bg-zinc-900/50 hover:border-zinc-700/50 transition-all duration-300 rounded-2xl">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center"
                    whileHover={{ rotate: 180 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Layers className="w-5 h-5 text-zinc-400 group-hover:text-zinc-200 transition-colors" />
                  </motion.div>
                  <p className="font-heading font-semibold text-zinc-100">Payment Follow-up</p>
                </div>
                <p className="text-zinc-500 text-sm mb-5">Automated reminders that keep you professional—and get you paid.</p>
                <div className="rounded-xl border border-[#22C55E]/35 bg-[#1a1a1a] p-4 mt-auto">
                  <div className="rounded-lg border border-[#22C55E]/40 bg-[#22C55E]/12 p-4">
                    <p className="text-[#86efac] text-xs font-medium mb-1">Invoiced Today</p>
                    <p className="text-zinc-100 text-2xl font-bold mb-4">$3,460</p>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="px-3 py-1.5 rounded-md bg-[#22C55E] text-zinc-950 text-xs font-semibold"
                      >
                        Send Reminder
                      </button>
                      <button
                        type="button"
                        className="px-3 py-1.5 rounded-md border border-[#22C55E]/50 text-[#22C55E] text-xs font-semibold"
                      >
                        View Queue
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
