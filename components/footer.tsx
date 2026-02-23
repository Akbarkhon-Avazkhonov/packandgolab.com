import { Wrench } from "lucide-react"
import Link from "next/link"

const footerLinks = [
  {
    title: "Lab Sections",
    links: [
      { label: "Fix-It Guides", href: "#guides" },
      { label: "Tool Reviews", href: "#tools" },
      { label: "Categories", href: "#categories" },
      { label: "Travel Kits", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Beginner Start", href: "#" },
      { label: "Safety First", href: "#" },
      { label: "Tool Glossary", href: "#" },
      { label: "Video Lab", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Submit a Fix", href: "#" },
      { label: "Forum", href: "#" },
      { label: "Lab Partners", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
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
            <p className="mt-4 max-w-xs font-mono text-xs text-muted-foreground leading-relaxed">
              The lab for the life-proof. We test, document, and share the
              fastest fixes for everyday problems so you can pack up and go.
            </p>
            <div className="mt-6 flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Lab Status: Operational
              </span>
            </div>
          </div>

          {/* Link Columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
                {group.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <span className="font-mono text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} PackAndGoLab. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
