"use client"

import {
  Wrench,
  Droplets,
  Zap as ZapIcon,
  Paintbrush,
  Car,
  Tent,
  Smartphone,
  ArrowRight,
  Star,
  TrendingUp,
  Clock,
  Flame,
} from "lucide-react"

interface BentoCardProps {
  className?: string
  children: React.ReactNode
}

function BentoCard({ className, children }: BentoCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(206,255,0,0.08)] ${className}`}
    >
      {children}
    </div>
  )
}

const categories = [
  {
    icon: Droplets,
    label: "Plumbing",
    guides: 340,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: ZapIcon,
    label: "Electrical",
    guides: 280,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Paintbrush,
    label: "Paint & Finish",
    guides: 195,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Car,
    label: "Auto Repair",
    guides: 420,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Tent,
    label: "Outdoor & Travel",
    guides: 310,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Smartphone,
    label: "Tech & Gadgets",
    guides: 250,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
]

const trendingGuides = [
  {
    title: "Emergency Pipe Patch: 5-Minute Fix",
    difficulty: "Beginner",
    time: "5 min",
    views: "12.4K",
  },
  {
    title: "Rewire a Light Switch (Safely)",
    difficulty: "Intermediate",
    time: "20 min",
    views: "8.7K",
  },
  {
    title: "Build a Travel Tool Roll",
    difficulty: "Beginner",
    time: "30 min",
    views: "15.2K",
  },
  {
    title: "Fix a Running Toilet in 3 Steps",
    difficulty: "Beginner",
    time: "10 min",
    views: "22.1K",
  },
]

const topTools = [
  {
    name: "Multi-Bit Precision Screwdriver",
    rating: 4.9,
    reviews: 2340,
    tag: "Best Seller",
  },
  {
    name: "Heavy-Duty Duct Tape Pro",
    rating: 4.8,
    reviews: 1890,
    tag: "Lab Pick",
  },
  {
    name: "Compact Wire Stripper Kit",
    rating: 4.7,
    reviews: 967,
    tag: "Essential",
  },
]

export function BentoGridSection() {
  return (
    <section id="categories" className="relative bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            {'// TOOL ORGANIZER'}
          </span>
          <h2 className="max-w-lg text-center font-sans text-4xl tracking-tight text-foreground md:text-5xl text-balance">
            Every Fix, One Grid.
          </h2>
          <p className="max-w-md text-center font-mono text-sm text-muted-foreground leading-relaxed">
            Browse our lab by category. Each compartment holds the blueprints
            you need.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid auto-rows-[180px] grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {/* Categories - Large Card */}
          <BentoCard className="row-span-2 md:col-span-2 diamond-plate">
            <div className="flex h-full flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  Categories
                </span>
                <h3 className="mt-2 font-sans text-2xl text-foreground">
                  Find Your Fix
                </h3>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {categories.map((cat) => (
                  <button
                    key={cat.label}
                    className="flex flex-col items-start gap-2 rounded-lg border border-border bg-background/60 p-3 transition-all hover:border-primary/50 hover:bg-background/80"
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-md ${cat.bgColor}`}
                    >
                      <cat.icon className={`h-4 w-4 ${cat.color}`} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-mono text-xs text-foreground">
                        {cat.label}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        {cat.guides} guides
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Trending Guides */}
          <BentoCard className="row-span-2 md:col-span-1 lg:col-span-2">
            <div className="flex h-full flex-col">
              <div className="mb-4 flex items-center gap-2">
                <Flame className="h-4 w-4 text-accent" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                  Trending Now
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3">
                {trendingGuides.map((guide, i) => (
                  <button
                    key={guide.title}
                    className="group/item flex items-center gap-4 rounded-lg border border-transparent p-3 text-left transition-all hover:border-border hover:bg-background/50"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted font-mono text-xs text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex flex-1 flex-col gap-0.5">
                      <span className="font-mono text-sm text-foreground group-hover/item:text-primary transition-colors">
                        {guide.title}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 font-mono text-[10px] text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {guide.time}
                        </span>
                        <span className="font-mono text-[10px] text-muted-foreground">
                          {guide.views} views
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover/item:opacity-100 group-hover/item:text-primary" />
                  </button>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Quick Stats Card */}
          <BentoCard className="md:col-span-1">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">
                  This Week
                </span>
              </div>
              <div>
                <span className="font-sans text-4xl text-foreground">847</span>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  new fixes submitted by the community
                </p>
              </div>
            </div>
          </BentoCard>

          {/* Top Tools Card */}
          <BentoCard className="md:col-span-2 lg:col-span-2">
            <div className="flex h-full flex-col">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Wrench className="h-4 w-4 text-secondary" />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">
                    Lab-Tested Tools
                  </span>
                </div>
                <button className="flex items-center gap-1 font-mono text-xs text-muted-foreground transition-colors hover:text-primary">
                  View All <ArrowRight className="h-3 w-3" />
                </button>
              </div>
              <div className="flex flex-1 flex-col gap-2 sm:flex-row sm:gap-4">
                {topTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-1 flex-col justify-between rounded-lg border border-border bg-background/50 p-4 transition-all hover:border-primary/30"
                  >
                    <div>
                      <span className="inline-block rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary">
                        {tool.tag}
                      </span>
                      <p className="mt-2 font-mono text-xs text-foreground leading-relaxed">
                        {tool.name}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center gap-1">
                      <Star className="h-3 w-3 fill-primary text-primary" />
                      <span className="font-mono text-xs text-foreground">
                        {tool.rating}
                      </span>
                      <span className="font-mono text-[10px] text-muted-foreground">
                        ({new Intl.NumberFormat("en-US").format(tool.reviews)})
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* CTA Card */}
          <BentoCard className="md:col-span-1 bg-primary border-primary">
            <div className="flex h-full flex-col items-start justify-between">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary-foreground/60">
                  Quick Access
                </span>
                <h3 className="mt-1 font-sans text-xl text-primary-foreground">
                  Start a Fix
                </h3>
              </div>
              <button className="flex items-center gap-2 rounded-lg bg-primary-foreground px-4 py-2 font-mono text-xs text-primary transition-all hover:scale-105">
                Search Guides <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  )
}
