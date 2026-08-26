import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  BookOpen,
  Briefcase,
  Compass,
  Database,
  FileDown,
  Github,
  GraduationCap,
  Lightbulb,
  Linkedin,
  Mail,
  MapPin,
  Music,
  Phone,
  Rocket,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { Counter, Reveal, SectionLabel } from "@/components/site/motion-primitives";
import { caseStudies } from "@/data/case-studies";

const PROFILE_IMAGE = "/devashree-profile.jpg";
const PROFILE_IMAGE_FALLBACK =
  "https://apmdevashreeportfolio.lovable.app/__l5e/assets-v1/d0ee1eff-187a-4852-a66b-8bee877f2376/devashree-profile.jpg";

const TITLE = "Devashree Agnihotri | Aspiring Product Manager Portfolio";
const DESCRIPTION =
  "Business Development Associate turned Product Management Aspirant. Generated ₹2.3L revenue within 15 days, built product case studies, passionate about customer-centric product development.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Devashree Agnihotri",
          jobTitle: "Business Development Associate, Aspiring Associate Product Manager",
          email: "mailto:agnihotridevashree01@gmail.com",
          telephone: "+91-9322362663",
          address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
          worksFor: { "@type": "Organization", name: "Intellipaat" },
          sameAs: [
            "https://www.linkedin.com/in/devashree14/",
            "https://github.com/DevashreeA",
          ],
          knowsAbout: [
            "Product Management",
            "Customer Discovery",
            "Product Strategy",
            "Business Development",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const stats = [
  {
    value: 2.3,
    prefix: "₹",
    suffix: "L+",
    decimals: 1,
    label: "Revenue Generated",
    sub: "Within 15 Days",
  },
  {
    value: 1.5,
    prefix: "₹",
    suffix: "L",
    decimals: 1,
    label: "Revenue Generated",
    sub: "During First Week",
  },
  { value: 3, suffix: "", label: "Product Case Studies", sub: "End-to-end deep dives" },
  { value: 14, suffix: "+", label: "Years of Bharatanatyam", sub: "Visharad certified" },
];

const journey = [
  {
    icon: GraduationCap,
    title: "Computer Science Engineering",
    body: "Built the technical foundation — systems, logic and the confidence to sit in a room with engineers.",
  },
  {
    icon: Sparkles,
    title: "Technical Projects",
    body: "Turned coursework into shipped things, and learned how much of building is deciding what not to build.",
  },
  {
    icon: Briefcase,
    title: "Business Development",
    body: "Joined Intellipaat as a Business Development Associate. Revenue targets made outcomes concrete.",
  },
  {
    icon: Users,
    title: "Customer Discovery",
    body: "Hundreds of conversations. Learned to hear the problem behind the objection, not just the objection.",
  },
  {
    icon: Lightbulb,
    title: "Product Thinking",
    body: "Started writing case studies, tearing down products and defending trade-offs in writing.",
  },
  {
    icon: Target,
    title: "Associate Product Manager",
    body: "Where I'm headed next — owning problems end to end alongside design, engineering and data.",
  },
  {
    icon: Rocket,
    title: "Future Entrepreneur",
    body: "The long game — building a company around a product that creates real, measurable impact.",
  },
];

const achievements = [
  {
    value: "₹2.3L",
    title: "Revenue generated in 15 days",
    body: "Built and closed a consistent pipeline entirely through customer conversations and structured follow-through.",
  },
  {
    value: "₹1.5L",
    title: "First week revenue",
    body: "Delivered in week one at Intellipaat — before any playbook, script or comfort zone existed.",
  },
  {
    value: "Winner",
    title: "National Level Business Idea Competition",
    body: "Pitched and won a national-level business idea contest, judged on problem clarity, market fit and viability.",
  },
  {
    value: "Winner",
    title: "Debate & Pick and Speak",
    body: "Multiple wins in competitive debate and impromptu speaking — the foundation of stakeholder communication.",
  },
  {
    value: "Visharad",
    title: "Bharatanatyam Visharad",
    body: "A degree-level classical dance certification earned across 14+ years of disciplined practice.",
  },
  {
    value: "3",
    title: "Product case study portfolio",
    body: "Deep, end-to-end studies on WhatsApp, Google Maps and Instagram with KPIs and trade-offs defended.",
  },
];

const beyondWork = [
  {
    icon: Music,
    title: "Bharatanatyam",
    body: "Fourteen years taught me that mastery is repetition with feedback. Nothing lands the first time — you refine until it does.",
  },
  {
    icon: Music,
    title: "Flute",
    body: "Learning a second art form from scratch as an adult keeps me honest about how uncomfortable being a beginner really is.",
  },
  {
    icon: BookOpen,
    title: "Reading",
    body: "Product books, biographies and behavioural psychology most product problems are human problems in disguise.",
  },
  {
    icon: Compass,
    title: "Continuous learning",
    body: "SQL, analytics and wireframing, practised deliberately so the gaps stay visible instead of comfortable.",
  },
  {
    icon: Rocket,
    title: "Entrepreneurship",
    body: "Studying how companies find their first hundred customers the part of building that sales taught me to respect.",
  },
];

const skillGroups = [
  {
    label: "Business & Product",
    icon: Target,
    skills: [
      "Product Thinking",
      "Requirement Gathering",
      "Market Research",
      "Stakeholder Management",
      "Customer Discovery",
      "Negotiation",
      "Communication",
    ],
  },
  {
    label: "Data",
    icon: BarChart3,
    skills: ["Excel", "SQL", "Power BI", "Jira", "Confluence", "Python Basics"],
  },
  {
    label: "Project & Tools",
    icon: Database,
    skills: ["Agile", "GitHub", "VS Code", "CRM", "Render", "Vercel"],
  },
];

const openTo = [
  "Associate Product Manager",
  "Product Analyst",
  "Growth",
  "Product Strategy",
  "Business Analysis",
];

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "agnihotridevashree01@gmail.com",
    href: "mailto:agnihotridevashree01@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "+91 93223 62663", href: "tel:+919322362663" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "/in/devashree14",
    href: "https://www.linkedin.com/in/devashree14/",
  },
  { icon: Github, label: "GitHub", value: "@DevashreeA", href: "https://github.com/DevashreeA" },
  { icon: MapPin, label: "Location", value: "Bengaluru, India", href: "" },
  { icon: FileDown, label: "Resume", value: "Download PDF", href: "/resume.pdf" },
];

function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero-aura relative overflow-hidden px-6 pb-24 pt-36 sm:pt-44">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs tracking-wide text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Open to Associate Product Manager roles
              </span>
              <h1 className="mt-8 font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Hi, I'm <span className="text-gradient">Devashree Agnihotri</span>
              </h1>
              <div className="mt-7 grid gap-1.5 text-lg text-muted-foreground sm:text-xl">
                <p className="text-foreground">Product Thinker</p>
                <p>Aspiring Product Manager</p>
                <p>Future Entrepreneur</p>
              </div>
              <p className="mt-9 max-w-2xl border-l-2 border-primary/50 pl-6 font-display text-2xl leading-snug sm:text-3xl">
                “Turning customer insights into product decisions.”
              </p>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Product-focused problem solver who turns customer needs into clear product opportunities, user experiences, and measurable outcomes. I enjoy breaking down real products, identifying friction, and thinking through solutions from user problem to product decision.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/case-studies"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  View Product Portfolio <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                >
                  <FileDown className="h-4 w-4" /> Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/devashree14/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" /> LinkedIn
                </a>
                <Link
                  to="/"
                  hash="contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                >
                  <Mail className="h-4 w-4" /> Contact
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto w-full max-w-[320px] lg:max-w-none"
            >
              <div className="group relative aspect-square">
                <div className="absolute -inset-6 rounded-full bg-primary/25 blur-3xl transition-opacity duration-700 group-hover:opacity-90 opacity-60" />
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/60 via-primary/10 to-transparent" />
                <img
                  src={PROFILE_IMAGE}
                  alt="Devashree Agnihotri, Business Development Associate and aspiring Associate Product Manager"
                  width={640}
                  height={640}
                  loading="eager"
                  onError={(event) => {
                    const img = event.currentTarget;
                    if (img.dataset.fallbackApplied === "true") return;
                    img.dataset.fallbackApplied = "true";
                    img.src = PROFILE_IMAGE_FALLBACK;
                  }}
                  className="relative h-full w-full rounded-full object-cover object-top ring-1 ring-border/70 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label + s.sub} delay={0.1 + i * 0.08}>
                <div className="h-full rounded-3xl glass p-7 transition-transform duration-500 hover:-translate-y-1">
                  <p className="font-display text-4xl text-primary sm:text-5xl">
                    <Counter
                      value={s.value}
                      prefix={s.prefix ?? ""}
                      suffix={s.suffix}
                      decimals={s.decimals ?? 0}
                    />
                  </p>
                  <p className="mt-3 text-sm font-medium">{s.label}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {s.sub}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="border-t border-border/60 px-6 py-28">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <Reveal>
            <SectionLabel>About</SectionLabel>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              What I'm Building Toward.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="grid gap-6 text-lg leading-relaxed text-muted-foreground">
            <p>
  I'm a <span className="text-foreground">Computer Science Engineering graduate</span>{" "}
  interested in how products are built, improved, and made useful for the people who use them.
</p>

<p>
  My customer-facing experience has helped me develop strong{" "}
  <span className="text-foreground">customer discovery, communication, and problem-solving skills</span>.
  Speaking with different customers made me more curious about the problems behind their needs and
  how products can address those problems more effectively.
</p>

<p>
  That curiosity led me toward <span className="text-foreground">Product Management</span>.
  I enjoy understanding a problem before jumping to a solution, breaking down user journeys,
  identifying friction points, and thinking about what could be improved and why.
</p>

<p>
  I'm currently building my product skills through{" "}
  <span className="text-foreground">product case studies, product teardowns, user research, metrics, SQL, and data analysis</span>,
  while also working with tools such as{" "}
  <span className="text-foreground">Jira, Confluence, and Power BI</span>.
  I'm looking for an opportunity to learn from an experienced product team and contribute to
  solving real customer and business problems.
</p>
          </Reveal>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="border-t border-border/60 px-6 py-28">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <SectionLabel>My Journey</SectionLabel>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              From writing code to owning problems.
            </h2>
          </Reveal>

          <div className="relative mt-16 pl-10">
            <motion.div
              className="absolute left-[15px] top-2 w-px bg-gradient-to-b from-primary via-primary/40 to-transparent"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            />
            <div className="grid gap-10">
              {journey.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.06}>
                  <div className="relative">
                    <span className="absolute -left-10 top-1 grid h-8 w-8 place-items-center rounded-full border border-primary/40 bg-background text-primary">
                      <step.icon className="h-4 w-4" />
                    </span>
                    <p className="text-xs uppercase tracking-[0.24em] text-primary">
                      Step {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-3xl">{step.title}</h3>
                    <p className="mt-2 max-w-xl text-muted-foreground">{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="border-t border-border/60 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>Achievements</SectionLabel>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              Proof, not adjectives.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.06}>
                <div className="h-full rounded-3xl border border-border/60 bg-card/50 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lux">
                  {a.value === "Winner" ? (
                    <Award className="h-5 w-5 text-primary" />
                  ) : (
                    <Star className="h-5 w-5 text-primary" />
                  )}
                  <p className="mt-6 font-display text-4xl text-primary">{a.value}</p>
                  <h3 className="mt-3 text-lg font-medium">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BEYOND WORK */}
      <section className="border-t border-border/60 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>Beyond Work</SectionLabel>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              What shaped the way I think.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {beyondWork.map((b, i) => (
              <Reveal key={b.title} delay={i * 0.06}>
                <div className="h-full rounded-3xl glass p-8 transition-transform duration-500 hover:-translate-y-1.5">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/12 text-primary">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="border-t border-border/60 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>Skills</SectionLabel>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              Built in the field, sharpened on purpose.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {skillGroups.map((g, i) => (
              <Reveal key={g.label} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-border/60 bg-card/50 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lux">
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                      <g.icon className="h-5 w-5" />
                    </span>
                    <h3 className="font-display text-2xl">{g.label}</h3>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {g.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border/70 px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="border-t border-border/60 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>Case Studies</SectionLabel>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              Three problems I couldn't stop thinking about.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.slug} delay={i * 0.08}>
                <Link
                  to="/case-studies/$slug"
                  params={{ slug: cs.slug }}
                  className={`group flex h-full flex-col rounded-3xl border border-border/60 bg-gradient-to-br ${cs.accent} p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lux`}
                >
                  <span className="text-xs uppercase tracking-[0.24em] text-primary">
                    0{i + 1} · {cs.product}
                  </span>
                  <h3 className="mt-4 font-display text-3xl leading-snug">{cs.title}</h3>
                  <p className="mt-3 flex-1 text-muted-foreground">{cs.tagline}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm text-primary">
                    Read case study
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="hero-aura border-t border-border/60 px-6 py-32">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.28em] text-primary">
              Product Philosophy
            </span>
            <p className="mt-10 font-display text-3xl leading-[1.25] sm:text-5xl">
              “I believe products succeed when they solve real customer problems. Empathy identifies
              those problems, data validates them, and continuous iteration transforms ideas into
              impactful products.”
            </p>
            <div className="mx-auto mt-12 h-px w-48 hairline" />
          </Reveal>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-border/60 px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
              Let's Build Great Products Together
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              If you're building something customers actually need, I'd love to talk.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-10">
            <p className="text-xs uppercase tracking-[0.24em] text-primary">Open to</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {openTo.map((role) => (
                <span
                  key={role}
                  className="rounded-full border border-border/70 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                >
                  {role}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contacts.map((c, i) => {
              const inner = (
                <>
                  <c.icon className="h-5 w-5 text-primary" />
                  <p className="mt-6 text-sm text-muted-foreground">{c.label}</p>
                  <p className="mt-1 break-words font-medium">{c.value}</p>
                </>
              );
              return (
                <Reveal key={c.label} delay={i * 0.06}>
                  {c.href ? (
                    <a
                      href={c.href}
                      {...(c.href.startsWith("http")
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                      {...(c.href === "/resume.pdf" ? { download: true } : {})}
                      className="flex h-full flex-col rounded-3xl glass p-7 transition-transform duration-500 hover:-translate-y-1.5"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex h-full flex-col rounded-3xl glass p-7">{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
