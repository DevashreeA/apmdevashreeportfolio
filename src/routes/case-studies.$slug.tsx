import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Layout, Workflow } from "lucide-react";
import { caseStudies, getCaseStudy, type CaseStudy } from "@/data/case-studies";
import { Reveal, SectionLabel } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Case study unavailable" }, { name: "robots", content: "noindex" }],
      };
    }
    const { study } = loaderData;
    const title = `${study.title} — Case Study by Devashree Agnihotri`;
    return {
      meta: [
        { title },
        { name: "description", content: study.tagline },
        { property: "og:title", content: title },
        { property: "og:description", content: study.tagline },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/case-studies/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/case-studies/${params.slug}` }],
    };
  },
  component: CaseStudyPage,
});

function Block({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="border-t border-border/60 py-12">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="mt-4 font-display text-3xl sm:text-4xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </Reveal>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3">
      {items.map((t) => (
        <li key={t} className="flex gap-3 text-muted-foreground">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

function Journey({ steps, tone }: { steps: string[]; tone: "muted" | "primary" }) {
  return (
    <ol className="grid gap-3">
      {steps.map((s, i) => (
        <li
          key={s}
          className={`flex gap-4 rounded-2xl border p-4 ${
            tone === "primary" ? "border-primary/30 bg-primary/5" : "border-border/60 bg-card/40"
          }`}
        >
          <span
            className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xs font-medium ${
              tone === "primary"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            }`}
          >
            {i + 1}
          </span>
          <span className={tone === "primary" ? "text-foreground" : "text-muted-foreground"}>
            {s}
          </span>
        </li>
      ))}
    </ol>
  );
}

function Placeholder({ icon, title, note }: { icon: React.ReactNode; title: string; note: string }) {
  return (
    <div className="grid min-h-56 place-items-center rounded-3xl border border-dashed border-border p-10 text-center">
      <div>
        <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary">
          {icon}
        </div>
        <p className="mt-4 font-display text-2xl">{title}</p>
        <p className="mt-1 text-sm text-muted-foreground">{note}</p>
      </div>
    </div>
  );
}

function CaseStudyPage() {
  const { study } = Route.useLoaderData() as { study: CaseStudy };
  const index = caseStudies.findIndex((c) => c.slug === study.slug);
  const prev = caseStudies[index - 1];
  const next = caseStudies[index + 1];

  return (
    <main className="pb-24">
      <section className={`hero-aura bg-gradient-to-br ${study.accent} px-6 pb-20 pt-36`}>
        <div className="mx-auto max-w-4xl">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> All case studies
          </Link>
          <p className="mt-8 text-xs uppercase tracking-[0.28em] text-primary">{study.product}</p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-6xl">{study.title}</h1>
          <p className="mt-5 text-xl text-muted-foreground">{study.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span className="rounded-full glass px-4 py-1.5">{study.duration}</span>
            <span className="rounded-full glass px-4 py-1.5">{study.role}</span>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6">
        <Block label="Executive Summary" title="The short version">
          <p className="text-lg leading-relaxed text-muted-foreground">{study.executiveSummary}</p>
        </Block>

        <Block label="Problem" title="Problem statement">
          <p className="text-lg leading-relaxed text-muted-foreground">{study.problem}</p>
        </Block>

        <Block label="Users" title="Target users">
          <Bullets items={study.targetUsers} />
        </Block>

        <Block label="Personas" title="Who I designed for">
          <div className="grid gap-5 sm:grid-cols-2">
            {study.personas.map((p) => (
              <div key={p.name} className="rounded-3xl border border-border/60 bg-card/50 p-6">
                <p className="font-display text-2xl">{p.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.detail}</p>
                <p className="mt-4 text-sm">
                  <span className="text-primary">Goal · </span>
                  <span className="text-muted-foreground">{p.goal}</span>
                </p>
                <p className="mt-2 text-sm">
                  <span className="text-primary">Pain · </span>
                  <span className="text-muted-foreground">{p.pain}</span>
                </p>
              </div>
            ))}
          </div>
        </Block>

        <Block label="Journey" title="Current user journey">
          <Journey steps={study.currentJourney} tone="muted" />
        </Block>

        <Block label="Journey" title="Improved user journey">
          <Journey steps={study.improvedJourney} tone="primary" />
        </Block>

        <Block label="Artefacts" title="Workflow & wireframes">
          <div className="grid gap-5 sm:grid-cols-2">
            <Placeholder
              icon={<Workflow className="h-5 w-5" />}
              title="Workflow diagram"
              note="Decision flow — to be embedded"
            />
            <Placeholder
              icon={<Layout className="h-5 w-5" />}
              title="Wireframes"
              note="Low-fidelity screens — to be embedded"
            />
          </div>
        </Block>

        <Block label="Analysis" title="Root cause">
          <Bullets items={study.rootCause} />
        </Block>

        <Block label="Solution" title="The proposal">
          <p className="text-lg leading-relaxed text-muted-foreground">{study.solution}</p>
        </Block>

        <Block label="Scope" title="Feature breakdown">
          <div className="grid gap-4">
            {study.features.map((f, i) => (
              <div
                key={f.name}
                className="grid gap-2 rounded-2xl border border-border/60 bg-card/40 p-5 sm:grid-cols-[minmax(0,14rem)_minmax(0,1fr)]"
              >
                <p className="font-medium">
                  <span className="mr-2 text-primary">F{i + 1}</span>
                  {f.name}
                </p>
                <p className="text-muted-foreground">{f.detail}</p>
              </div>
            ))}
          </div>
        </Block>

        <Block label="Impact" title="Benefits">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-border/60 bg-card/50 p-6">
              <p className="font-display text-2xl">Business</p>
              <div className="mt-4">
                <Bullets items={study.businessBenefits} />
              </div>
            </div>
            <div className="rounded-3xl border border-border/60 bg-card/50 p-6">
              <p className="font-display text-2xl">User</p>
              <div className="mt-4">
                <Bullets items={study.userBenefits} />
              </div>
            </div>
          </div>
        </Block>

        <Block label="Measurement" title="Success metrics">
          <div className="overflow-hidden rounded-3xl border border-border/60">
            {study.kpis.map((k) => (
              <div
                key={k.metric}
                className="grid gap-1 border-b border-border/60 p-5 last:border-0 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center"
              >
                <span className="text-muted-foreground">{k.metric}</span>
                <span className="font-display text-xl text-primary">{k.target}</span>
              </div>
            ))}
          </div>
        </Block>

        <Block label="Honesty" title="Trade-offs">
          <Bullets items={study.tradeoffs} />
        </Block>

        <Block label="Next" title="Future scope">
          <Bullets items={study.futureScope} />
        </Block>

        <Block label="Reflection" title="Key learnings">
          <Bullets items={study.learnings} />
        </Block>

        <nav className="grid gap-4 border-t border-border/60 pt-10 sm:grid-cols-2">
          {prev ? (
            <Link
              to="/case-studies/$slug"
              params={{ slug: prev.slug }}
              className="group rounded-3xl border border-border/60 p-6 transition-colors hover:border-primary/40"
            >
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <ArrowLeft className="h-4 w-4" /> Previous
              </span>
              <p className="mt-2 font-display text-2xl group-hover:text-primary">{prev.title}</p>
            </Link>
          ) : (
            <span />
          )}
          {next && (
            <Link
              to="/case-studies/$slug"
              params={{ slug: next.slug }}
              className="group rounded-3xl border border-border/60 p-6 text-right transition-colors hover:border-primary/40 sm:col-start-2"
            >
              <span className="flex items-center justify-end gap-2 text-sm text-muted-foreground">
                Next <ArrowRight className="h-4 w-4" />
              </span>
              <p className="mt-2 font-display text-2xl group-hover:text-primary">{next.title}</p>
            </Link>
          )}
        </nav>
      </div>
    </main>
  );
}
