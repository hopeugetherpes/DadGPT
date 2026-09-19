import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu } from "lucide-react";
import { CHAT_URL, navItems } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container site-header-inner">
        <Link
          href="/"
          className="site-brand"
          aria-label="DadGPT home"
        >
          <Image
            src="/dadgpt-avatar.png"
            alt=""
            width={34}
            height={34}
            priority
            className="site-brand-avatar"
          />
          <span className="leading-none">
            <span className="wordmark block text-xl text-[#173f53]">DadGPT</span>
          </span>
        </Link>

        <nav className="site-nav hidden lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="site-nav-link"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a href={CHAT_URL} target="_blank" rel="noreferrer" className="site-header-cta hidden lg:inline-flex">
          Open DadGPT <ArrowUpRight className="size-4" aria-hidden="true" />
        </a>

        <details className="relative lg:hidden">
          <summary className="site-menu-trigger">
            <Menu className="size-4" aria-hidden="true" /> Menu
            <ChevronDown className="chevron size-4 transition-transform" aria-hidden="true" />
          </summary>
          <div className="site-menu-panel">
            <nav className="grid" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="site-menu-link">
                  {item.label}
                </a>
              ))}
              <a
                href={CHAT_URL}
                target="_blank"
                rel="noreferrer"
                className="site-menu-cta"
              >
                Open DadGPT <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
