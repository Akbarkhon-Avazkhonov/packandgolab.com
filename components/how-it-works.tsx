import { Search, BookOpen, CheckCircle2, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Search the Problem",
    description:
      "Describe what is broken. Our lab database matches you with the fastest, most reliable fix.",
    color: "text-primary",
    borderColor: "border-primary/30",
    bgColor: "bg-primary/10",
  },
  {
    number: "02",
    icon: BookOpen,
    title: "Follow the Blueprint",
    description:
      "Step-by-step instructions with tool lists, safety warnings, and time estimates. No guesswork.",
    color: "text-secondary",
    borderColor: "border-secondary/30",
    bgColor: "bg-secondary/10",
  },
  {
    number: "03",
    icon: CheckCircle2,
    title: "Verify & Complete",
    description:
      "Each guide has a verification checklist so you know the fix is solid before you move on.",
    color: "text-accent",
    borderColor: "border-accent/30",
    bgColor: "bg-accent/10",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Pack & Go",
    description:
      "Done. You have fixed it, learned something new, and you are ready to tackle the next thing.",
    color: "text-primary",
    borderColor: "border-primary/30",
    bgColor: "bg-primary/10",
  },
]

export function HowItWorksSection() {
  return (
    <section className="relative bg-card py-24">
      {/* Decorative line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            {'// PROTOCOL'}
          </span>
          <h2 className="max-w-md text-center font-sans text-4xl tracking-tight text-foreground md:text-5xl text-balance">
            Break it. Fix it. Pack it.
          </h2>
          <p className="max-w-md text-center font-mono text-sm text-muted-foreground leading-relaxed">
            Our four-step protocol takes you from &quot;oh no&quot; to &quot;good to go.&quot;
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`group relative flex flex-col rounded-xl border ${step.borderColor} bg-background p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(206,255,0,0.06)]`}
            >
              {/* Step number */}
              <span className="mb-4 font-mono text-4xl font-light text-border">
                {step.number}
              </span>

              {/* Icon */}
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${step.bgColor}`}
              >
                <step.icon className={`h-5 w-5 ${step.color}`} />
              </div>

              {/* Content */}
              <h3 className="mb-2 font-sans text-lg text-foreground">
                {step.title}
              </h3>
              <p className="font-mono text-xs text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Connector line - hidden on last item */}
              <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-border lg:block last:lg:hidden" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
