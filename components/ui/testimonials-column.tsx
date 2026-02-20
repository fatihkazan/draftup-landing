"use client"

import React from "react"
import { motion } from "motion/react"
import { LucideIcon } from "lucide-react"

interface Testimonial {
  text: string
  name: string
  role: string
  icon: LucideIcon
}

export const TestimonialsColumn = (props: {
  className?: string
  testimonials: Testimonial[]
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, role, icon: Icon }, i) => (
                <div
                  className="p-5 sm:p-8 rounded-2xl border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm max-w-[280px] sm:max-w-xs w-full shadow-lg shadow-black/20"
                  key={i}
                >
                  <p className="text-zinc-300 leading-relaxed">{text}</p>
                  <div className="flex items-center gap-3 mt-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-800 ring-2 ring-zinc-800">
                      <Icon className="h-5 w-5 text-[#22C55E]" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-medium text-zinc-100 tracking-tight leading-5">{name}</span>
                      <span className="text-sm text-zinc-500 leading-5">{role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  )
}
