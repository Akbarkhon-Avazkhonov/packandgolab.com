"use client"

import { useState } from "react"
import { Mail, CheckCircle2, ArrowRight, Zap } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section
      id="newsletter"
      className="relative overflow-hidden bg-card py-24"
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Glow effects */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        {/* Icon */}
        <div className="mb-6 inline-flex items-center justify-center rounded-xl border border-primary/30 bg-primary/10 p-4 glow-volt-sm">
          <Mail className="h-6 w-6 text-primary" />
        </div>

        {/* Label */}
        <span className="mb-4 block font-mono text-xs uppercase tracking-[0.3em] text-primary">
          {'// THE WEEKLY FIX'}
        </span>

        {/* Headline */}
        <h2 className="font-sans text-4xl tracking-tight text-foreground md:text-5xl text-balance">
          Never Get Stuck Again.
        </h2>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-lg font-mono text-sm text-muted-foreground leading-relaxed">
          Get one killer fix-it guide delivered every Saturday morning. No spam,
          no fluff -- just the blueprint you need for your next project.
        </p>

        {/* Form */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="email"
                placeholder="your-email@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg border border-border bg-background py-3.5 pl-10 pr-4 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="glow-volt flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-sans text-sm text-primary-foreground transition-all hover:scale-105 active:scale-95"
            >
              <Zap className="h-4 w-4" />
              Subscribe
            </button>
          </form>
        ) : (
          <div className="mx-auto mt-10 flex max-w-md items-center justify-center gap-3 rounded-lg border border-primary/30 bg-primary/10 p-4">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span className="font-mono text-sm text-primary">
              You are in! Check your inbox this Saturday.
            </span>
          </div>
        )}

        {/* Trust indicators */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
          {[
            "12,000+ Subscribers",
            "Weekly Delivery",
            "Unsubscribe Anytime",
          ].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <CheckCircle2 className="h-3 w-3 text-primary" />
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
