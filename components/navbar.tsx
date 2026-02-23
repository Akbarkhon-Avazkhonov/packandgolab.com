"use client"

import { useState } from "react"
import { Wrench, Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"

const navLinks = [
  { label: "Fix-It Guides", href: "#guides" },
  { label: "Tool Lab", href: "#tools" },
  { label: "Categories", href: "#categories" },
  { label: "Newsletter", href: "#newsletter" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <Wrench className="h-5 w-5 text-primary-foreground transition-transform group-hover:rotate-45" />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-lg leading-tight tracking-tight text-foreground">
              PackAndGo
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary">
              LAB
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="group flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <span className="text-steel text-xs font-mono opacity-0 transition-opacity group-hover:opacity-100">
                {'//'}
              </span>
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button className="glow-volt-sm rounded-lg bg-primary px-5 py-2.5 font-sans text-sm text-primary-foreground transition-all hover:scale-105 active:scale-95">
            Fix This Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden text-foreground"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 top-[73px] z-40 bg-background/98 backdrop-blur-lg md:hidden">
          <div className="flex flex-col gap-6 p-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 text-lg text-foreground transition-colors hover:text-primary"
              >
                <span className="text-xs text-primary font-mono">{'>'}</span>
                {link.label}
              </Link>
            ))}
            <button className="mt-4 w-full rounded-lg bg-primary px-5 py-3 font-sans text-sm text-primary-foreground">
              Fix This Now
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
