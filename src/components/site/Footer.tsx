import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <div className="h-px w-40 hairline" />
        <p className="font-display text-2xl">Devashree Agnihotri</p>
        <p className="text-sm text-muted-foreground">Bengaluru, India</p>
        <div className="flex items-center gap-3">
          <a
            href="mailto:devashreea14@gmail.com"
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/devashree14/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/DevashreeA"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          <Link to="/case-studies" className="hover:text-foreground">
            Product Thinking
          </Link>
          <Link to="/journal" className="hover:text-foreground">
            Product Journal
          </Link>
          <Link to="/" hash="contact" className="hover:text-foreground">
            Contact
          </Link>
          <a href="/resume.pdf" download className="hover:text-foreground">
            Download Resume (PDF)
          </a>
        </div>
        <p className="text-xs text-muted-foreground">
          Designed and Built by Devashree Agnihotri
        </p>
      </div>
    </footer>
  );
}
