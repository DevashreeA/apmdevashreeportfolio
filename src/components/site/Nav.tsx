import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, Moon, Sun, X, FileDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

const sectionLinks = [
  { label: "About", hash: "about" },
  { label: "Journey", hash: "journey" },
  { label: "Achievements", hash: "achievements" },
  { label: "Skills", hash: "skills" },
  { label: "Contact", hash: "contact" },
];

const pageLinks = [
  { label: "Case Studies", to: "/case-studies" },
  { label: "Journal", to: "/journal" },
];


export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-4">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "pointer-events-auto w-full max-w-6xl rounded-2xl px-4 py-2.5 transition-all duration-500",
          scrolled ? "glass shadow-lux" : "glass border-transparent bg-transparent",
        )}
      >
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <Link to="/" className="flex min-w-0 shrink-0 items-center gap-2.5">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-primary font-display text-base text-primary-foreground">
              D
            </span>
            <span className="whitespace-nowrap font-display text-lg tracking-tight">
              Devashree Agnihotri
            </span>
          </Link>

          <div className="flex items-center gap-1">
            <div className="hidden items-center gap-1 lg:flex">
              {sectionLinks.map((l) => (
                <Link
                  key={l.hash}
                  to="/"
                  hash={l.hash}
                  className="whitespace-nowrap rounded-full px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
                >
                  {l.label}
                </Link>
              ))}
              {pageLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  activeProps={{ className: "text-foreground bg-accent/60" }}
                  className="whitespace-nowrap rounded-full px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:text-foreground"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <a
              href="/resume.pdf"
              download
              className="hidden shrink-0 items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-[1.03] sm:inline-flex"
            >
              <FileDown className="h-4 w-4" /> Resume
            </a>

            <button
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border/70 lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden lg:hidden"
            >
              <div className="mt-3 grid gap-1 border-t border-border/60 pt-3">
                {sectionLinks.map((l) => (
                  <Link
                    key={l.hash}
                    to="/"
                    hash={l.hash}
                    className="rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                ))}
                {pageLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                ))}
                <a
                  href="/resume.pdf"
                  download
                  className="rounded-xl px-3 py-2 text-sm text-primary"
                >
                  Resume
                </a>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
