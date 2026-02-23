"use client"

import { useState } from "react"
import {
  Search,
  ArrowRight,
  Clock,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  Wrench,
  AlertTriangle,
} from "lucide-react"

const difficultyLevels = [
  { label: "All", value: "all" },
  { label: "Beginner", value: "beginner" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Advanced", value: "advanced" },
]

const guides = [
  {
    id: 1,
    title: "Fix a Leaky Faucet Without Calling a Plumber",
    category: "Plumbing",
    difficulty: "beginner",
    time: "15 min",
    steps: 6,
    completions: 14200,
    description:
      "Stop that drip in minutes. This guide walks you through diagnosing and fixing the most common faucet leaks with basic tools.",
  },
  {
    id: 2,
    title: "Replace a Broken Electrical Outlet",
    category: "Electrical",
    difficulty: "intermediate",
    time: "25 min",
    steps: 8,
    completions: 8900,
    description:
      "Safely replace a damaged or non-functional outlet. Includes safety checklist and circuit breaker protocol.",
  },
  {
    id: 3,
    title: "Build the Ultimate Travel Repair Kit",
    category: "Outdoor & Travel",
    difficulty: "beginner",
    time: "45 min",
    steps: 12,
    completions: 21500,
    description:
      "Assemble a compact, TSA-compliant kit that handles 90% of on-the-road emergencies. Our most popular guide.",
  },
  {
    id: 4,
    title: "Patch a Flat Tire: Full Roadside Protocol",
    category: "Auto Repair",
    difficulty: "beginner",
    time: "20 min",
    steps: 7,
    completions: 18700,
    description:
      "From jack placement to torque patterns, fix a flat with confidence whether you are in a parking lot or on the shoulder.",
  },
  {
    id: 5,
    title: "Rewire a Vintage Lamp: The Safe Way",
    category: "Electrical",
    difficulty: "advanced",
    time: "60 min",
    steps: 15,
    completions: 3400,
    description:
      "Restore vintage lighting without creating a fire hazard. Covers wire gauge selection, insulation, and UL-compliant connections.",
  },
  {
    id: 6,
    title: "Emergency Drywall Patch: Gallery-Ready Finish",
    category: "Paint & Finish",
    difficulty: "intermediate",
    time: "35 min",
    steps: 9,
    completions: 11200,
    description:
      "From doorknob holes to accidental impacts. Achieve an invisible patch that is ready for paint in under an hour.",
  },
]

function getDifficultyColor(difficulty: string) {
  switch (difficulty) {
    case "beginner":
      return "text-primary bg-primary/10 border-primary/20"
    case "intermediate":
      return "text-secondary bg-secondary/10 border-secondary/20"
    case "advanced":
      return "text-accent bg-accent/10 border-accent/20"
    default:
      return "text-muted-foreground bg-muted border-border"
  }
}

export function FixItLabSection() {
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredGuides = guides.filter((guide) => {
    const matchesDifficulty =
      filter === "all" || guide.difficulty === filter
    const matchesSearch =
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesDifficulty && matchesSearch
  })

  return (
    <section id="guides" className="relative bg-background py-24">
      {/* Subtle top border accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              {'// FIX-IT LAB'}
            </span>
            <h2 className="mt-2 font-sans text-4xl tracking-tight text-foreground md:text-5xl text-balance">
              Your Repair Blueprints.
            </h2>
            <p className="mt-2 max-w-md font-mono text-sm text-muted-foreground leading-relaxed">
              Step-by-step guides tested in our lab. Each one is designed to get
              you from broken to fixed with minimal tools.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search guides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-border bg-card py-3 pl-10 pr-4 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/* Difficulty Filter */}
        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mr-2">
            Difficulty:
          </span>
          {difficultyLevels.map((level) => (
            <button
              key={level.value}
              onClick={() => setFilter(level.value)}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-all ${
                filter === level.value
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {level.label}
            </button>
          ))}
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredGuides.map((guide) => (
            <article
              key={guide.id}
              className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(206,255,0,0.06)]"
            >
              {/* Top meta */}
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-md bg-muted px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  {guide.category}
                </span>
                <span
                  className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] capitalize ${getDifficultyColor(guide.difficulty)}`}
                >
                  {guide.difficulty}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-2 font-sans text-lg text-foreground group-hover:text-primary transition-colors text-pretty leading-tight">
                {guide.title}
              </h3>

              {/* Description */}
              <p className="mb-4 flex-1 font-mono text-xs text-muted-foreground leading-relaxed">
                {guide.description}
              </p>

              {/* Stats */}
              <div className="mb-4 flex items-center gap-4 border-t border-border pt-4">
                <div className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="font-mono text-xs text-muted-foreground">
                    {guide.time}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="font-mono text-xs text-muted-foreground">
                    {guide.steps} steps
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                  <span className="font-mono text-xs text-primary">
                    {(guide.completions / 1000).toFixed(1)}K done
                  </span>
                </div>
              </div>

              {/* CTA */}
              <button className="flex items-center gap-2 font-mono text-xs text-foreground transition-all group-hover:text-primary">
                Start This Fix
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </article>
          ))}
        </div>

        {filteredGuides.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20">
            <AlertTriangle className="mb-4 h-8 w-8 text-muted-foreground" />
            <p className="font-mono text-sm text-muted-foreground">
              No guides found. Try a different filter or search term.
            </p>
          </div>
        )}

        {/* View All */}
        <div className="mt-12 flex justify-center">
          <button className="flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-mono text-sm text-foreground transition-all hover:border-primary hover:text-primary">
            <Wrench className="h-4 w-4" />
            View All 2,400+ Guides
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
