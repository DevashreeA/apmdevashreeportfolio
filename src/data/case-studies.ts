export type CaseStudy = {
  slug: string;
  title: string;
  product: string;
  tagline: string;
  accent: string;
  duration: string;
  role: string;
  executiveSummary: string;
  problem: string;
  targetUsers: string[];
  personas: { name: string; detail: string; goal: string; pain: string }[];
  currentJourney: string[];
  improvedJourney: string[];
  rootCause: string[];
  solution: string;
  features: { name: string; detail: string }[];
  businessBenefits: string[];
  userBenefits: string[];
  kpis: { metric: string; target: string }[];
  tradeoffs: string[];
  futureScope: string[];
  learnings: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "whatsapp-ai-smart-composer",
    title: "WhatsApp AI Smart Composer",
    product: "WhatsApp",
    tagline: "Reducing context switching using integrated AI.",
    accent: "from-emerald-500/20 to-teal-500/10",
    duration: "3 weeks · Self-initiated",
    role: "Product thinking, research, spec",
    executiveSummary:
      "WhatsApp users increasingly draft, translate and summarise messages by leaving the app for an AI assistant, copying text back and forth. Smart Composer brings a lightweight, privacy-conscious composition layer directly into the chat input so that writing well, replying fast and catching up on long groups happens without ever leaving the conversation.",
    problem:
      "Serious conversations on WhatsApp — customer negotiations, tenant disputes, work coordination in 500-member groups — demand careful writing and constant catching up. Today users switch to a separate AI app, paste context, copy a result and return. Each switch costs 30–90 seconds, breaks flow and leaks sensitive conversation context into third-party tools.",
    targetUsers: [
      "Small business owners running sales and support on WhatsApp Business",
      "Non-native English writers composing professional replies",
      "Members of high-volume community and work groups",
      "Cross-language families and teams",
    ],
    personas: [
      {
        name: "Rekha, 34 — Boutique owner",
        detail: "Handles 60+ customer chats a day on WhatsApp Business.",
        goal: "Reply quickly and professionally without sounding curt.",
        pain: "Retypes the same answers; switches to a translator for non-Hindi buyers.",
      },
      {
        name: "Arjun, 26 — Engineer in a 400-member work group",
        detail: "Returns from meetings to 300 unread messages.",
        goal: "Know what actually needs his response in under a minute.",
        pain: "Scrolls endlessly, misses decisions buried in the thread.",
      },
    ],
    currentJourney: [
      "User needs to write a careful reply or catch up on a long thread",
      "Leaves WhatsApp and opens a separate AI assistant",
      "Copies chat context, pastes it, prompts for a draft or summary",
      "Copies the output back, returns to WhatsApp, edits tone manually",
      "Sends — 60–90 seconds later, with context and confidence lost",
    ],
    improvedJourney: [
      "User taps the sparkle icon inside the chat input",
      "Chooses an intent: Rewrite, Translate, Shorten, Reply suggestions, or Catch me up",
      "Sees an inline preview generated from the visible thread only",
      "Edits the draft in place with tone chips (Formal, Warm, Direct)",
      "Sends in under 15 seconds without leaving the conversation",
    ],
    rootCause: [
      "AI capability lives outside the surface where the writing actually happens",
      "No structured way to compress long group threads into decisions and asks",
      "Tone and language correction is a manual, high-effort task for non-native writers",
    ],
    solution:
      "An in-composer AI layer with five tightly scoped intents, on-device processing for short rewrites and an explicit consent boundary for anything that reads thread history. The feature is opt-in per chat, never runs on messages the user hasn't opened, and always shows the source messages a summary was built from.",
    features: [
      { name: "Smart Rewrite", detail: "Tone chips rewrite a draft as formal, warm or direct while preserving intent." },
      { name: "Inline Translate", detail: "Two-way translation that keeps the original text one tap away." },
      { name: "Catch Me Up", detail: "Summarises unread group messages into decisions, asks and mentions of you." },
      { name: "Reply Suggestions", detail: "Three context-aware replies for business accounts, editable before send." },
      { name: "Privacy Ledger", detail: "A per-chat view of what AI read, when, and how to turn it off." },
    ],
    businessBenefits: [
      "Deepens WhatsApp Business stickiness against Instagram DMs and email",
      "Creates a natural premium tier for high-volume business accounts",
      "Increases session length and message volume per active user",
      "Positions WhatsApp as an AI destination without a separate assistant app",
    ],
    userBenefits: [
      "Saves 60–90 seconds per considered message",
      "Confidence writing in a second language",
      "No more scroll-back through 300 unread group messages",
      "Sensitive context stays inside the app the conversation lives in",
    ],
    kpis: [
      { metric: "Composer AI adoption (WAU)", target: "18% of business accounts in 6 months" },
      { metric: "Median time to send a considered reply", target: "−40%" },
      { metric: "Catch Me Up usage in groups >100 members", target: "25% of active members weekly" },
      { metric: "Opt-out rate after first use", target: "<8%" },
      { metric: "Business account 30-day retention", target: "+5 pts" },
    ],
    tradeoffs: [
      "Trust before reach: shipping opt-in per chat lowers adoption but protects WhatsApp's privacy promise",
      "On-device models limit summary quality on low-end Android; fall back to short-window summaries instead of degraded output",
      "Reply suggestions risk homogenised, robotic conversations — capped to business accounts at launch",
      "Every new composer affordance competes for the most contested pixel in the app",
    ],
    futureScope: [
      "Catalogue-aware replies that pull live price and stock for business accounts",
      "Voice-note summaries for long forwarded audio",
      "Shared group digest pinned at the top of high-volume communities",
    ],
    learnings: [
      "Feature value is often about removing a switch, not adding a capability",
      "In a privacy-first product, the consent model is part of the feature, not a compliance afterthought",
      "Scoping AI to five named intents beats a blank prompt box for everyday users",
    ],
  },
  {
    slug: "google-maps-conversational-navigation",
    title: "Google Maps Conversational Navigation",
    product: "Google Maps",
    tagline: "Making navigation safer using AI conversations.",
    accent: "from-sky-500/20 to-indigo-500/10",
    duration: "3 weeks · Self-initiated",
    role: "Product thinking, research, spec",
    executiveSummary:
      "Mid-drive, every re-route, detour or parking question forces a driver to touch the screen. Conversational Navigation turns those interactions into a short, hands-free dialogue that understands the live route context — so drivers ask 'is there a cleaner route, I'm running late' instead of pinching, typing and tapping at 60 km/h.",
    problem:
      "Google Maps is voice-guided but not voice-operated. Changing a stop, checking traffic ahead or finding parking near the destination all require touch interactions that pull a driver's eyes off the road for 3–6 seconds each. Existing voice commands are rigid single-shot phrases that fail on natural, contextual requests.",
    targetUsers: [
      "Daily commuters in dense Indian and US metros",
      "Ride-hailing and delivery drivers doing multi-stop routes",
      "Long-distance road-trippers making en-route decisions",
      "Older and low-confidence drivers uncomfortable with touch UI while moving",
    ],
    personas: [
      {
        name: "Nikhil, 31 — Daily commuter",
        detail: "70 minutes of Bengaluru traffic each way.",
        goal: "Add a coffee stop and beat the jam without stopping the car.",
        pain: "Has to pull over or fumble one-handed to change anything.",
      },
      {
        name: "Salma, 44 — Delivery partner",
        detail: "Runs 25 drops a day on a two-wheeler.",
        goal: "Re-order stops and confirm building gates hands-free.",
        pain: "Every screen touch costs time and is genuinely unsafe.",
      },
    ],
    currentJourney: [
      "Driver realises they need fuel before the highway stretch",
      "Taps the screen, opens search, types or dictates a rigid query",
      "Scans a list of results in tiny type while moving",
      "Taps one, checks the added detour time, confirms",
      "Eyes off road ~15 seconds across 4 interactions",
    ],
    improvedJourney: [
      "Driver says 'Hey Google, I need fuel before the highway'",
      "Maps answers with route-aware context: two stations, +3 and +7 minutes",
      "Driver replies 'the cheaper one' — follow-up understood without repeating context",
      "Maps confirms aloud, adds the stop and re-routes",
      "Zero touches, eyes on road throughout",
    ],
    rootCause: [
      "Voice input is treated as a command shortcut, not a conversation with memory",
      "Route state, ETA pressure and traffic ahead aren't available to the voice layer",
      "The safest interaction mode is the least capable one",
    ],
    solution:
      "A multi-turn voice layer wired directly into live route state. It holds context across turns, answers with two options maximum (never a list), always states the ETA delta, and confirms before mutating the route. Every response is designed to be understood without looking at the screen.",
    features: [
      { name: "Context-carrying dialogue", detail: "Follow-ups like 'the cheaper one' resolve against the previous answer." },
      { name: "Route-aware answers", detail: "Every suggestion is expressed as a detour delta, not an address." },
      { name: "Two-option rule", detail: "Never reads more than two choices aloud; more available on request." },
      { name: "Ahead-of-me briefing", detail: "'What's traffic like ahead?' returns a 20-km outlook in one sentence." },
      { name: "Confirm-before-commit", detail: "Route mutations always require a spoken yes." },
    ],
    businessBenefits: [
      "Strengthens Maps' moat in the connected-car and Android Auto ecosystem",
      "Creates high-intent, hands-free local commerce moments (fuel, food, parking)",
      "Rich intent data for local ads with clear safety framing",
      "Differentiates against Apple Maps and Waze on assistant depth",
    ],
    userBenefits: [
      "Meaningfully fewer eyes-off-road seconds per trip",
      "Natural language instead of memorised command phrases",
      "Faster en-route decisions with the delay cost stated up front",
      "Accessible to drivers who avoid touch interfaces entirely",
    ],
    kpis: [
      { metric: "Voice-initiated route changes per navigation session", target: "0.8 → 2.1" },
      { metric: "Touch interactions while vehicle in motion", target: "−35%" },
      { metric: "Multi-turn intent success rate", target: ">85%" },
      { metric: "En-route stop conversion", target: "+12%" },
      { metric: "Session abandonment after voice failure", target: "<5%" },
    ],
    tradeoffs: [
      "Latency budget is brutal — a 2-second pause at speed feels broken; cache route-local results aggressively",
      "Noisy vehicles and accented speech will fail; needs a graceful one-tap fallback rather than repeated retries",
      "Two-option answers reduce choice but are the only safe read-aloud pattern",
      "Monetising suggestions must never bias a safety feature — sponsored stops stay excluded from voice",
    ],
    futureScope: [
      "Proactive nudges: 'you'll hit rain in 20 km, slower route is only +4 minutes'",
      "Multi-stop re-sequencing by voice for delivery partners",
      "Passenger mode with richer, screen-supported answers",
    ],
    learnings: [
      "Constraints define the design: safety turned 'show more results' into an anti-pattern",
      "Conversation quality is mostly about memory across turns, not vocabulary",
      "The right unit of an answer is the cost to the user — minutes, not places",
    ],
  },
  {
    slug: "instagram-intentional-reels",
    title: "Instagram Intentional Reels",
    product: "Instagram",
    tagline: "Reducing mindless scrolling through user-controlled content discovery.",
    accent: "from-rose-500/20 to-amber-500/10",
    duration: "3 weeks · Self-initiated",
    role: "Product thinking, research, spec",
    executiveSummary:
      "Reels is optimised for time spent, but a growing set of users report finishing sessions feeling worse and returning less often. Intentional Reels gives users direct, visible control over what the feed serves and when a session ends — trading a slice of short-term watch time for long-term trust and retention.",
    problem:
      "Users open Reels for five minutes and lose forty. The controls that exist — 'not interested', mute, time reminders — are buried, blunt and invisible in their effect. The result is regret-driven churn: users delete the app or disable Reels entirely rather than reach for controls they don't believe work.",
    targetUsers: [
      "Students and young professionals who self-report scroll regret",
      "Users in exam or work sprints who want temporary control, not deletion",
      "Interest-driven users (fitness, cooking, design) whose feed drifts off-topic",
      "Parents managing teen accounts",
    ],
    personas: [
      {
        name: "Ananya, 21 — Final-year student",
        detail: "Opens Reels between study blocks.",
        goal: "A 10-minute break that actually ends after 10 minutes.",
        pain: "Deletes the app during exams and reinstalls after.",
      },
      {
        name: "Rohit, 29 — Amateur runner",
        detail: "Follows fitness creators.",
        goal: "A feed that stays on training content.",
        pain: "One curiosity tap drags the feed into unrelated content for days.",
      },
    ],
    currentJourney: [
      "User opens Reels for a short break",
      "Feed autoplays an endless, opaque stream",
      "Controls are hidden behind a long-press most users never discover",
      "No natural stopping point; the session ends in fatigue",
      "User feels regret, associates the app with lost time",
    ],
    improvedJourney: [
      "User opens Reels and picks a session intent: Quick Break, Explore, or Learn",
      "A visible Feed Mix control shows what the feed is weighted toward",
      "Session progress appears as a subtle ring, not an alarm",
      "At the end, a Session Card summarises what was watched and offers a clean exit",
      "User leaves on their own terms and returns more often",
    ],
    rootCause: [
      "Feed control exists but is invisible and gives no legible feedback",
      "No concept of a session with a beginning and an end",
      "Ranking optimises for the next video, not the user's stated intent for this visit",
    ],
    solution:
      "Three linked mechanics: session intents that re-weight ranking for that visit only, a transparent Feed Mix panel showing and adjusting top interest weights, and an end-of-session card that closes the loop. Nothing is forced — every control is a suggestion the user configures, and the default experience is unchanged.",
    features: [
      { name: "Session Intent", detail: "Quick Break, Explore or Learn re-weights ranking for this session only." },
      { name: "Feed Mix panel", detail: "Shows top interest weights as adjustable sliders with a live preview." },
      { name: "Soft session ring", detail: "Ambient progress indicator instead of a modal interruption." },
      { name: "Session Card", detail: "A calm summary and a one-tap clean exit at the end of a session." },
      { name: "Topic Snooze", detail: "Mute a topic for 7 days without permanently training the algorithm." },
    ],
    businessBenefits: [
      "Higher weekly retention and lower app-deletion churn among high-regret cohorts",
      "Stated-intent signals meaningfully improve ranking precision",
      "Pre-empts regulatory pressure on attention design",
      "Session intents create clean, brand-safe ad contexts",
    ],
    userBenefits: [
      "Sessions that end on purpose rather than in fatigue",
      "A feed that stays close to declared interests",
      "Recoverable mistakes — one curious tap no longer reshapes the feed",
      "Visible cause and effect instead of an opaque algorithm",
    ],
    kpis: [
      { metric: "Weekly active retention (high-regret cohort)", target: "+6 pts" },
      { metric: "Feed Mix adoption", target: "20% of Reels WAU in 2 quarters" },
      { metric: "Self-reported session satisfaction", target: "3.4 → 4.2 / 5" },
      { metric: "Reels disable / app-delete rate", target: "−15%" },
      { metric: "Total daily watch time", target: "Accept up to −4% short-term" },
    ],
    tradeoffs: [
      "Explicitly trades short-term watch time for retention — needs executive alignment on the metric hierarchy",
      "Stated intent often diverges from revealed preference; ranking must blend, not obey",
      "Adding controls risks cluttering a deliberately full-bleed surface",
      "Creators reliant on cross-topic discovery may see reach shift",
    ],
    futureScope: [
      "Intent presets that learn from time of day and context",
      "Shared family controls for teen accounts",
      "Creator-side view of which intents their content serves best",
    ],
    learnings: [
      "The hardest product decisions are metric trade-offs, not feature choices",
      "Control without visible feedback is not control — users must see the effect",
      "Designing for how a session ends matters as much as how it starts",
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
