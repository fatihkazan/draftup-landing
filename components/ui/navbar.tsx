"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it Works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-2 sm:p-4">
      <nav className="max-w-5xl mx-auto flex items-center justify-between h-12 px-4 sm:px-6 rounded-full bg-zinc-900/70 border border-zinc-800/50 backdrop-blur-md">
        <Link href="/" className="flex items-center shrink-0">
          <Image src="/logo.png" width={120} height={32} alt="Draftup" className="h-7 w-auto sm:h-8" />
        </Link>

        {/* Desktop nav - hidden below lg */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-sm rounded-full transition-colors text-zinc-400 hover:text-zinc-100"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://app.draftup.co/login"
            className="ml-2 px-4 py-1.5 text-sm rounded-full border border-primary/50 text-primary font-medium hover:border-primary/80 hover:bg-primary/10 transition-colors"
          >
            Login
          </Link>
          <Link
            href="#pricing"
            className="ml-2 px-4 py-1.5 text-sm rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile hamburger menu - visible below lg */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[280px] sm:w-[320px] bg-zinc-950 border-zinc-800 text-zinc-100 [&>button]:text-zinc-400 [&>button:hover]:text-zinc-100"
          >
            <SheetHeader>
              <SheetTitle className="sr-only">Navigation menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1 pt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-base rounded-lg transition-colors text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-zinc-800 space-y-2">
                <Link
                  href="https://app.draftup.co/login"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-base rounded-lg border border-primary/50 text-primary font-medium hover:border-primary/80 hover:bg-primary/10 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="#pricing"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-base text-center rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
