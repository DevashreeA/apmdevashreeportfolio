import { createFileRoute } from "@tanstack/react-router";
import { Reveal, SectionLabel } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/journal")({
  head: () => ({
    meta: [
      { title: "Product Journal — Devashree Agnihotri" },
      {
        name: "description",
        content:
          "Weekly product observations, teardowns and learning reflections from an aspiring Associate Product Manager.",
      },
      { property: "og:title", content: "Product Journal — Devashree Agnihotri" },
      {
        property: "og:description",
        content: "Weekly product observations, teardowns and learning reflections.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/journal" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/journal" }],
  }),
  component: JournalPage,
});

const entries = [
  {
    type: "Observation",
    date: "31 July 2026",
    readTime: "3 min read",
    tags: ["Onboarding", "Activation", "Fintech"],
    title: "Onboarding is a promise, not a tour",
    body: "Three fintech apps I signed up for this week opened with a five-slide carousel. None of them asked what I came to do. The one product that did — a single question, 'what are you here to track?' — was the only one I opened again on day two. Activation is about confirming intent, not explaining features.",
  },
  {
    type: "Teardown",
    date: "24 July 2026",
    readTime: "4 min read",
    tags: ["Zomato", "Reviews", "Data granularity"],
    title: "Why Zomato's dish-level reviews beat restaurant ratings",
    body: "Restaurant ratings compress dozens of decisions into one number that helps nobody choose. Dish-level signals move the review closer to the actual decision unit. A useful reminder: the granularity of your data should match the granularity of the user's decision.",
  },
  {
    type: "Reflection",
    date: "17 July 2026",
    readTime: "5 min read",
    tags: ["Customer Discovery", "Interviews", "Sales"],
    title: "What 300 sales calls taught me about discovery questions",
    body: "In sales I learned that the first objection is almost never the real one. 'It's too expensive' usually means 'I don't believe the outcome yet.' Product discovery interviews have the same shape — the first answer is the polite one. The third why is where the insight lives.",
  },
  {
    type: "Review",
    date: "10 July 2026",
    readTime: "4 min read",
    tags: ["Linear", "Trade-offs", "Design"],
    title: "Linear's issue creation, and the cost of a keyboard-first bet",
    body: "Linear's speed comes from deciding that the primary user never touches a mouse. That's a real trade-off: it excludes casual contributors. But by choosing a narrow user and serving them completely, it built a stronger product than one that half-served everyone.",
  },
  {
    type: "Reflection",
    date: "3 July 2026",
    readTime: "3 min read",
    tags: ["Metrics", "Counter-metrics", "Analytics"],
    title: "Metrics I now distrust",
    body: "Time spent, page views, and 'engagement'. Each one can go up while the user's experience gets worse. I've started writing a counter-metric next to every success metric in my case studies — if I can't name what would break, I don't understand the feature.",
  },
  {
    type: "Observation",
    date: "26 June 2026",
    readTime: "3 min read",
    tags: ["Craft", "Iteration", "Feedback loops"],
    title: "Bharatanatyam and product iteration",
    body: "Fourteen years of practice taught me that precision is built through repetition with feedback, not through inspiration. Product work rhymes: the first version is never the one that lands. What matters is how quickly you can see what's off and adjust.",
  },
];

function JournalPage() {
  return (
    <main className="hero-aura px-6 pb-28 pt-36">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionLabel>Product Journal</SectionLabel>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl">
            Thinking out loud, every week.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Short notes on products I use, decisions I'd argue with, and what I'm learning as I
            build the skill of product judgement.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {entries.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.06}>
              <article className="group flex h-full flex-col rounded-3xl border border-border/60 bg-card/50 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lux">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="rounded-full bg-primary/12 px-3 py-1 uppercase tracking-[0.18em] text-primary">
                    {e.type}
                  </span>
                  <span className="text-muted-foreground">{e.date}</span>
                  <span className="text-muted-foreground/60">·</span>
                  <span className="text-muted-foreground">{e.readTime}</span>
                </div>
                <h2 className="mt-4 font-display text-2xl leading-snug transition-colors group-hover:text-primary">
                  {e.title}
                </h2>
                <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{e.body}</p>
                <div className="mt-6 flex flex-wrap gap-2 border-t border-border/60 pt-5">
                  {e.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/70 px-3 py-1 text-xs text-muted-foreground"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}

