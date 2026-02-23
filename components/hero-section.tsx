"use client"

import { ArrowDown, Zap, Shield, Gauge } from "lucide-react"

function FloatingTool({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={`absolute ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl" />
        <div className="relative rounded-2xl border border-border bg-card p-6 backdrop-blur-sm">
          {children}
        </div>
      </div>
    </div>
  )
}

function ToolSVGDrill() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
      <rect x="8" y="25" width="40" height="30" rx="4" fill="#2A2A2C" stroke="#CEFF00" strokeWidth="1.5"/>
      <rect x="48" y="32" width="24" height="16" rx="2" fill="#333335" stroke="#CEFF00" strokeWidth="1"/>
      <circle cx="28" cy="40" r="8" fill="#333335" stroke="#CEFF00" strokeWidth="1.5"/>
      <circle cx="28" cy="40" r="3" fill="#CEFF00"/>
      <rect x="14" y="55" width="12" height="16" rx="2" fill="#2A2A2C" stroke="#CEFF00" strokeWidth="1"/>
      <line x1="72" y1="40" x2="80" y2="40" stroke="#CEFF00" strokeWidth="2" strokeLinecap="round"/>
      <line x1="72" y1="37" x2="78" y2="37" stroke="#FF6B00" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
      <line x1="72" y1="43" x2="78" y2="43" stroke="#FF6B00" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    </svg>
  )
}

function ToolSVGTape() {
  return (
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
      <circle cx="35" cy="35" r="28" fill="#2A2A2C" stroke="#CEFF00" strokeWidth="1.5"/>
      <circle cx="35" cy="35" r="18" fill="#333335" stroke="#FF6B00" strokeWidth="1"/>
      <circle cx="35" cy="35" r="8" fill="#1A1A1B" stroke="#CEFF00" strokeWidth="1"/>
      <path d="M35 7 L45 7 L45 15" fill="none" stroke="#CEFF00" strokeWidth="1.5" strokeLinecap="round"/>
      <rect x="43" y="5" width="8" height="4" rx="1" fill="#FF6B00" opacity="0.8"/>
    </svg>
  )
}

function ToolSVGMultiTool() {
  return (
    <svg width="60" height="90" viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg">
      <rect x="18" y="5" width="24" height="50" rx="4" fill="#2A2A2C" stroke="#CEFF00" strokeWidth="1.5"/>
      <rect x="22" y="10" width="16" height="8" rx="2" fill="#333335" stroke="#FF6B00" strokeWidth="1"/>
      <line x1="30" y1="55" x2="30" y2="85" stroke="#CEFF00" strokeWidth="2"/>
      <line x1="22" y1="55" x2="18" y2="75" stroke="#CEFF00" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="38" y1="55" x2="42" y2="75" stroke="#CEFF00" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="30" cy="30" r="3" fill="#CEFF00"/>
      <rect x="26" y="40" width="8" height="3" rx="1" fill="#FF6B00" opacity="0.6"/>
    </svg>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background grid-pattern">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pt-24">
        {/* Status Badge */}
        <div className="mb-8 flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 animate-slide-up">
          <div className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="font-mono text-xs text-muted-foreground">
            LAB STATUS: OPERATIONAL
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="max-w-5xl text-center font-sans text-5xl leading-tight tracking-tight text-foreground md:text-7xl lg:text-8xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
          The Lab for the{" "}
          <span className="text-primary text-glow-volt">Life-Proof.</span>
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 max-w-2xl text-center font-mono text-base leading-relaxed text-muted-foreground md:text-lg animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Master the art of the quick fix. From emergency plumbing hacks to the
          ultimate travel repair kit -- we provide the blueprints to keep you
          moving.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <button className="glow-volt group flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-sans text-sm text-primary-foreground transition-all hover:scale-105 active:scale-95">
            <Zap className="h-4 w-4" />
            Fix This Now
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-border bg-card px-8 py-4 font-mono text-sm text-foreground transition-all hover:border-primary hover:text-primary">
            <Shield className="h-4 w-4" />
            Explore the Lab
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 md:gap-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          {[
            { value: "2,400+", label: "Fix-It Guides" },
            { value: "180K", label: "Problems Solved" },
            { value: "4.9/5", label: "Lab Rating" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-sans text-2xl text-primary md:text-3xl">
                {stat.value}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Floating Tools - Desktop Only */}
        <div className="pointer-events-none absolute inset-0 hidden lg:block">
          <FloatingTool className="left-[5%] top-[30%] animate-float">
            <ToolSVGDrill />
          </FloatingTool>
          <FloatingTool className="right-[8%] top-[25%] animate-float-delayed">
            <ToolSVGTape />
          </FloatingTool>
          <FloatingTool className="left-[12%] bottom-[20%] animate-float-delayed-2">
            <ToolSVGMultiTool />
          </FloatingTool>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Scroll to explore
          </span>
          <ArrowDown className="h-4 w-4 animate-bounce text-primary" />
        </div>
      </div>
    </section>
  )
}
