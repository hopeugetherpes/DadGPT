import Image from "next/image";
import { ArrowUpRight, Code2 } from "lucide-react";
import { CHAT_URL, GITHUB_URL, navItems } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="site-footer-main">
          <div className="max-w-xl">
            <div className="site-footer-brand">
              <Image src="/dadgpt-avatar.png" alt="" width={38} height={38} className="site-brand-avatar" />
              <p className="display text-2xl">DadGPT</p>
            </div>
            <p className="site-footer-copy">
              A steady, caring voice for people who had to figure too much out alone — while keeping your judgment,
              independence, and real-world relationships at the center.
            </p>
            <a
              href={CHAT_URL}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-bold text-[#1b607e] underline decoration-[#1b607e]/35 underline-offset-4 hover:decoration-[#1b607e]"
            >
              Start a conversation <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          </div>

          <div>
            <p className="site-footer-heading">Explore</p>
            <nav className="site-footer-links" aria-label="Footer navigation">
              {navItems.filter((item) => item.href !== "/privacy").map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="site-footer-heading">Project</p>
            <div className="site-footer-links">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <Code2 className="size-4" aria-hidden="true" /> Source repository
              </a>
              <a href="/downloads/DadGPT.tar.gz" download>
                Download plugin source
              </a>
              <a href="/downloads/DadGPT_custom_instructions.json" download>
                Download legacy instructions
              </a>
              <a href="/documents/Privacy-Policy.pdf" target="_blank" rel="noreferrer">Privacy</a>
              <a href="/documents/Terms-and-Conditions.pdf" target="_blank" rel="noreferrer">Terms</a>
            </div>
          </div>
        </div>

        <div className="site-footer-meta">
          <p>DadGPT is not a therapist, medical service, crisis line, or substitute for human care.</p>
          <p>Project content released under CC0 1.0 · Version 0.2.1</p>
        </div>
      </div>
    </footer>
  );
}
