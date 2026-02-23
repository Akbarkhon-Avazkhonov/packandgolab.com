"use client"

import {
  Star,
  ArrowRight,
  Shield,
  Award,
  ThumbsUp,
  ExternalLink,
} from "lucide-react"

const featuredTools = [
  {
    name: "Leatherman Wave+ Multi-Tool",
    category: "Multi-Tool",
    rating: 4.9,
    reviews: 4200,
    verdict: "The gold standard. 18 tools in one package.",
    tags: ["Lab Certified", "Best Overall"],
    stats: { durability: 98, versatility: 95, portability: 85 },
  },
  {
    name: "Gorilla Heavy-Duty Duct Tape",
    category: "Adhesives",
    rating: 4.8,
    reviews: 3100,
    verdict: "Holds through water, heat, and UV. Our go-to for emergency repairs.",
    tags: ["Lab Certified", "Most Used"],
    stats: { durability: 96, versatility: 88, portability: 92 },
  },
  {
    name: "Klein Tools 11-in-1 Screwdriver",
    category: "Screwdrivers",
    rating: 4.7,
    reviews: 2800,
    verdict: "Compact, durable, and covers 90% of screw types you will encounter.",
    tags: ["Lab Certified", "Best Value"],
    stats: { durability: 92, versatility: 90, portability: 95 },
  },
]

function StatBar({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-20 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
        <div
          className={`h-full rounded-full ${color} transition-all duration-700`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="font-mono text-xs text-muted-foreground w-8 text-right">
        {value}
      </span>
    </div>
  )
}

export function ToolLabSection() {
  return (
    <section id="tools" className="relative bg-background py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">
            {'// TOOL LAB'}
          </span>
          <h2 className="max-w-lg text-center font-sans text-4xl tracking-tight text-foreground md:text-5xl text-balance">
            Lab-Tested. Field-Proven.
          </h2>
          <p className="max-w-md text-center font-mono text-sm text-muted-foreground leading-relaxed">
            We buy, break, and rate tools so you do not have to. Every review is
            backed by real-world testing in our lab.
          </p>
        </div>

        {/* Tool Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {featuredTools.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-secondary/40 hover:shadow-[0_0_30px_rgba(46,91,255,0.08)]"
            >
              {/* Tool header with pattern */}
              <div className="relative h-40 diamond-plate flex items-center justify-center border-b border-border">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/80" />
                <div className="relative flex flex-col items-center gap-2">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-secondary/30 bg-secondary/10">
                    <Award className="h-8 w-8 text-secondary" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {tool.category}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                {/* Tags */}
                <div className="mb-3 flex flex-wrap gap-2">
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 rounded-full border border-secondary/20 bg-secondary/10 px-2.5 py-0.5 font-mono text-[10px] text-secondary"
                    >
                      <Shield className="h-2.5 w-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Name and Rating */}
                <h3 className="mb-1 font-sans text-lg text-foreground group-hover:text-secondary transition-colors">
                  {tool.name}
                </h3>
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(tool.rating)
                            ? "fill-primary text-primary"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-mono text-xs text-foreground">
                    {tool.rating}
                  </span>
                  <span className="font-mono text-[10px] text-muted-foreground">
                    ({tool.reviews.toLocaleString()} reviews)
                  </span>
                </div>

                {/* Verdict */}
                <p className="mb-4 font-mono text-xs text-muted-foreground leading-relaxed">
                  {tool.verdict}
                </p>

                {/* Stats */}
                <div className="mb-4 flex flex-col gap-2">
                  <StatBar
                    label="Durability"
                    value={tool.stats.durability}
                    color="bg-primary"
                  />
                  <StatBar
                    label="Versatility"
                    value={tool.stats.versatility}
                    color="bg-secondary"
                  />
                  <StatBar
                    label="Portable"
                    value={tool.stats.portability}
                    color="bg-accent"
                  />
                </div>

                {/* CTA */}
                <button className="mt-auto flex items-center gap-2 font-mono text-xs text-foreground transition-all group-hover:text-secondary">
                  <ThumbsUp className="h-3.5 w-3.5" />
                  Full Lab Report
                  <ExternalLink className="h-3 w-3 ml-auto" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
