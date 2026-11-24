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
  FileDown,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Music,
  Phone,
  Rocket,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Counter, Reveal, SectionLabel } from "@/components/site/motion-primitives";
import { caseStudies } from "@/data/case-studies";
import profileAsset from "@/assets/devashree-profile.webp.asset.json";

const PROFILE_IMAGE = profileAsset.url;

const TITLE = "Devashree Agnihotri | Business Operations & HR Operations Portfolio";
const DESCRIPTION =
  "B.Tech Computer Science graduate with experience in business development and community operations, focused on HR operations, payroll, talent acquisition, and business operations.";

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
          jobTitle: "Business Development Executive / Trainee",
          email: "mailto:devashreea14@gmail.com",
          telephone: "+91-9322362663",
          address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
          worksFor: { "@type": "Organization", name: "Intellipaat" },
          sameAs: [
            "https://www.linkedin.com/in/devashree14/",
            "https://github.com/DevashreeA",
          ],
          knowsAbout: [
            "HR Operations",
            "Payroll Operations",
            "Talent Acquisition",
            "Business Operations",
            "Business Development",
            "Product Operations",
            "Product Management",
          ],
        }),
      },
    ],
  }),
  component: Home,
});

const stats = [
  { value: 8, suffix: ".0", label: "B.Tech CGPA", sub: "Computer Science & Engineering" },
  { value: 2, suffix: "", label: "Featured Projects", sub: "Data and task management" },
  { value: 3, suffix: "", label: "Certifications", sub: "Forage programs" },
  { value: 14, suffix: "+", label: "Years of Bharatanatyam", sub: "Visharad certified" },
];

const experience = [
  {
    company: "Intellipaat",
    role: "Business Development Executive / Trainee",
    period: "June 2026 – November 2026",
    bullets: [
      "Used Zoho CRM to maintain customer records and track interactions.",
      "Managed follow-ups and maintained organized records.",
      "Handled customer queries and supported daily business activities.",
      "Coordinated communication and stakeholder interactions.",
      "Developed organizational and relationship management skills.",
    ],
  },
  {
    company: "Info Hub Community",
    role: "Business Management and Community Operations",
    period: null,
    bullets: [
      "Supported business management and community coordination.",
      "Coordinated communication and member engagement.",
      "Assisted with organizing community activities.",
      "Developed people management and organizational skills.",
    ],
  },
];

const education = [
  {
    school: "Punyashlok Ahilyadevi Holkar Solapur University",
    credential: "B.Tech Computer Science and Engineering",
    detail: "CGPA: 8.0 · 2022–2026",
  },
  {
    school: "A. D. Joshi Junior College",
    credential: "Higher Secondary Certificate",
    detail: "90.3%",
  },
  {
    school: "Indian Model School",
    credential: "CBSE Class 10",
    detail: "76.4%",
  },
];

const achievements = [
  {
    value: "First Prize",
    title: "National-Level Business Idea Competition",
    body: "Recognized for presenting a startup idea at a national-level symposium.",
  },
  {
    value: "First Prize",
    title: "Debate and Pick & Speak",
    body: "Awarded first prize in debate and Pick & Speak competitions.",
  },
  {
    value: "Visharad",
    title: "Bharatanatyam Visharad",
    body: "Visharad certification with more than 14 years of classical dance training.",
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
    body: "I enjoy reading about people, businesses, and how organizations work.",
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
    label: "HR & Payroll Operations",
    icon: Briefcase,
    skills: [
      "Documentation",
      "Record Management",
      "Data Accuracy",
      "Process Coordination",
      "Administrative Support",
    ],
  },
  {
    label: "Business & Operations",
    icon: Users,
    skills: [
      "Zoho CRM",
      "Stakeholder Management",
      "Business Coordination",
      "Process Mapping",
      "Problem-Solving",
    ],
  },
  {
    label: "Data & Technical",
    icon: BarChart3,
    skills: ["Microsoft Excel", "SQL", "Power BI", "Power Query", "Python", "Data Visualization"],
  },
  {
    label: "Product & Business Analysis",
    icon: Target,
    skills: [
      "User Research",
      "Market Research",
      "Feature Prioritization",
      "Product Thinking",
      "Requirements Analysis",
    ],
  },
  {
    label: "Professional",
    icon: Sparkles,
    skills: [
      "Communication",
      "Team Collaboration",
      "Time Management",
      "Organization",
      "Presentation Skills",
      "People Management",
    ],
  },
];

const projects = [
  {
    title: "Sales Forecasting Dashboard",
    description:
      "Developed a machine learning model using historical sales data to forecast future sales trends and visualize insights for business planning.",
    tools: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    links: [],
  },
  {
    title: "Task Scape Vision",
    description: "A task management platform for organizing and tracking tasks.",
    tools: ["React.js", "TypeScript", "Tailwind CSS", "Docker", "Render"],
    links: [
      { label: "Live project", href: "https://task-scape-vision-1.onrender.com/" },
      { label: "GitHub", href: "https://github.com/DevashreeA/task-scape-vision" },
    ],
  },
];

const certifications = [
  "Siemens Project Manager Job Simulation – Forage",
  "Deloitte Data Analytics Job Simulation – Forage",
  "TATA Data Visualisation – Forage",
];

const openTo = [
  "HR Operations",
  "Payroll Associate",
  "HR Executive",
  "Talent Acquisition",
  "Recruitment Coordinator",
  "Operations Executive",
  "Business Operations",
];

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "devashreea14@gmail.com",
    href: "mailto:devashreea14@gmail.com",
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
  {
    icon: FileDown,
    label: "Download Resume (PDF)",
    value: "Current resume",
    href: "/resume.pdf",
  },
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
                Open to Opportunities
              </span>
              <p className="mt-7 text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Devashree Agnihotri
              </p>
              <h1 className="mt-4 font-display text-4xl leading-[1.06] tracking-tight sm:text-5xl lg:text-6xl">
                Business Operations <span className="text-gradient">| HR Operations |</span>{" "}
                People &amp; Process Management
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground sm:text-xl">
                Combining business experience, analytical thinking and people skills to support
                efficient operations and meaningful business outcomes.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                I'm a Computer Science graduate with experience in Business Development at
                Intellipaat and community business management. I enjoy coordinating people,
                managing processes, solving problems and using data to support business decisions.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03]"
                >
                  <FileDown className="h-4 w-4" /> Download Resume (PDF)
                </a>
                <Link
                  to="/"
                  hash="experience"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                >
                  Explore My Experience <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/"
                  hash="contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
                >
                  <Mail className="h-4 w-4" /> Let's Connect
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
                  alt="Devashree Agnihotri smiling in a café portrait"
                  width={640}
                  height={640}
                  loading="eager"
                  className="relative h-full w-full rounded-full object-cover object-[53%_38%] ring-1 ring-border/70 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
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
              About Me
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="grid gap-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I'm a B.Tech Computer Science graduate with professional experience in Business
              Development at Intellipaat, where I developed skills in CRM management, stakeholder
              communication, customer relationship management and follow-ups.
            </p>
            <p>
              My involvement in Info Hub Community strengthened my business management,
              coordination and people-management abilities.
            </p>
            <p>
              I also enjoy working on data-driven projects, business analysis and product
              improvement ideas. My primary interests include HR operations, payroll, talent
              acquisition and business operations, while continuing to explore Product Management
              and Product Operations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="border-t border-border/60 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>Experience</SectionLabel>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              People, process, and business support.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {experience.map((item, i) => (
              <Reveal key={item.company} delay={i * 0.08}>
                <article className="h-full rounded-3xl border border-border/60 bg-card/50 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lux">
                  <div className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                      <Briefcase className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.18em] text-primary">
                        {item.company}
                      </p>
                      <h3 className="mt-2 font-display text-2xl leading-snug">{item.role}</h3>
                      {item.period && (
                        <p className="mt-2 text-sm text-muted-foreground">{item.period}</p>
                      )}
                    </div>
                  </div>
                  <ul className="mt-6 grid gap-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="border-t border-border/60 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>Education</SectionLabel>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              A technical foundation for practical problem-solving.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {education.map((item, i) => (
              <Reveal key={item.school} delay={i * 0.06}>
                <article className="h-full rounded-3xl glass p-7">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <h3 className="mt-5 font-display text-xl leading-snug">{item.credential}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{item.school}</p>
                  <p className="mt-4 text-sm font-medium text-primary">{item.detail}</p>
                </article>
              </Reveal>
            ))}
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
                  <Award className="h-5 w-5 text-primary" />
                  <p className="mt-6 font-display text-4xl text-primary">{a.value}</p>
                  <h3 className="mt-3 text-lg font-medium">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="certifications" className="border-t border-border/60 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>Certifications</SectionLabel>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              Applied learning across project management and analytics.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {certifications.map((certification, i) => (
              <Reveal key={certification} delay={i * 0.06}>
                <div className="flex h-full items-start gap-4 rounded-3xl border border-border/60 bg-card/50 p-6">
                  <Award className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <p className="font-medium leading-relaxed">{certification}</p>
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

      {/* PROJECTS */}
      <section id="projects" className="border-t border-border/60 px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>Projects</SectionLabel>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              Projects built around data and coordination.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 0.08}>
                <article className="flex h-full flex-col rounded-3xl border border-border/60 bg-card/50 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lux">
                  <h3 className="font-display text-3xl">{project.title}</h3>
                  <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="rounded-full border border-border/70 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  {project.links.length > 0 && (
                    <div className="mt-7 flex flex-wrap gap-5 border-t border-border/60 pt-5">
                      {project.links.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-foreground"
                        >
                          {link.label} <ArrowUpRight className="h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECONDARY PRODUCT THINKING */}
      <section id="product-thinking" className="border-t border-border/60 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>Secondary Interest</SectionLabel>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              Product Thinking &amp; Business Analysis
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Three case studies that let me continue exploring user needs, product decisions and
              business trade-offs alongside my primary interest in operations.
            </p>
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

      {/* CONTACT */}
      <section id="contact" className="border-t border-border/60 px-6 py-28">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <SectionLabel>Contact</SectionLabel>
            <h2 className="mt-5 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
              Let's Connect
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              I'm open to opportunities where I can contribute through communication,
              coordination, analytical thinking, people management and business operations.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-10">
            <p className="text-xs uppercase tracking-[0.24em] text-primary">Primary opportunities</p>
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
            <p className="mt-5 text-sm text-muted-foreground">
              Also open to <span className="text-foreground">Product Operations</span> as a
              secondary interest.
            </p>
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
