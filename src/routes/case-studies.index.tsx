import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/case-studies";
import { Reveal, SectionLabel } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Product Thinking & Business Analysis — Devashree Agnihotri" },
      {
        name: "description",
        content:
          "Three secondary-interest case studies on WhatsApp, Google Maps, and Instagram, exploring user needs, product decisions, and business trade-offs.",
      },
      {
        property: "og:title",
        content: "Product Thinking & Business Analysis — Devashree Agnihotri",
      },
      {
        property: "og:description",
        content: "Secondary-interest case studies exploring product decisions and business trade-offs.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/case-studies" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesIndex,
});

function CaseStudiesIndex() {
  return (
    <main className="hero-aura px-6 pb-28 pt-36">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionLabel>Secondary Interest</SectionLabel>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl">
            Product Thinking &amp; Business Analysis
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            These case studies complement my primary focus on HR and business operations, while
            continuing to explore user needs, product decisions, and business trade-offs.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.slug} delay={i * 0.08}>
              <Link
                to="/case-studies/$slug"
                params={{ slug: cs.slug }}
                className="group grid gap-6 rounded-3xl border border-border/60 bg-card/50 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lux sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"
              >
                <div className="min-w-0">
                  <span className="text-xs uppercase tracking-[0.24em] text-primary">
                    0{i + 1} · {cs.product}
                  </span>
                  <h2 className="mt-3 font-display text-3xl sm:text-4xl">{cs.title}</h2>
                  <p className="mt-3 max-w-2xl text-muted-foreground">{cs.tagline}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {cs.features.slice(0, 3).map((f) => (
                      <span
                        key={f.name}
                        className="rounded-full border border-border/70 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {f.name}
                      </span>
                    ))}
                  </div>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-border/70 text-muted-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
