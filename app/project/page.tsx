import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Download,
  FileArchive,
  FileCode2,
  Code2,
  Heart,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CHAT_URL, GITHUB_URL, WEBSITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "The project",
  description: "The origin, values, architecture, licensing, and roadmap of the open DadGPT project.",
};

const values = [
  ["Strength with gentleness", "Being steady without becoming cold, dominant, or dismissive."],
  ["Wisdom with humility", "Offering a view while naming uncertainty and leaving room to be corrected."],
  ["Care with boundaries", "Using warmth without pretending software can become a reciprocal human bond."],
  ["Support with agency", "Helping someone make their own decisions rather than creating obedience or dependence."],
  ["Honesty without shame", "Naming consequences and responsibility without humiliation."],
  ["Inclusion without stereotypes", "Respecting sexual orientation, gender identity, culture, disability, and different ways of being a man."],
];

const architecture = [
  ["SKILL.md", "The core role, interaction method, tone, boundaries, and definition of a useful response."],
  ["Safety references", "Specific guidance for crisis language, professional referrals, dependency risks, and high-stakes topics."],
  ["Interaction patterns", "Reusable structures for listening, advice, tough love, repair, planning, and encouragement."],
  ["Interface metadata", "The public name, description, icons, color, and starter prompts shown by ChatGPT."],
  ["Local assets", "The visual identity packaged with the plugin. No image is fetched from a publisher server."],
];

export default function ProjectPage() {
  return (
    <main id="main-content">
      <PageHero eyebrow="The DadGPT project" title="Built in the open, around one careful promise." description="Offer the kind of calm, honest guidance many men missed — without pretending an AI is a father, a professional, or a substitute for the difficult work of building a life." />

      <section className="py-20 md:py-24">
        <div className="site-container grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div><p className="eyebrow">Why build it</p><h2 className="display mt-5 text-4xl leading-tight text-[#173f57] sm:text-5xl">For the questions that stay unasked.</h2></div>
          <div className="prose-copy max-w-3xl text-lg leading-8 text-[#586d77]">
            <p>Many people learn adulthood through a dependable parent who listens, demonstrates repair, sets boundaries, and tells the truth without withdrawing love. Others learn by trial, secrecy, or survival.</p>
            <p>DadGPT began as a Custom GPT: a way to make one conversational posture reliable enough to return to. With Custom GPTs now deprecated, this plugin is its direct replacement — preserving the same purpose in a versioned, inspectable skills-only package that can be shared, maintained, and improved openly.</p>
            <p>The project does not claim to heal father absence. Its ambition is smaller and more honest: make supportive reflection easier to access, especially at the moment someone is stuck between feeling and action.</p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#305b70]/10 bg-[#eae4d9] py-20 md:py-24">
        <div className="site-container">
          <div className="max-w-3xl"><p className="eyebrow">Core values</p><h2 className="display mt-5 text-4xl text-[#173f57] sm:text-5xl">The standard every answer should aim for.</h2></div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-[#315f75]/12 bg-[#315f75]/12 md:grid-cols-2 lg:grid-cols-3">
            {values.map(([title, text]) => <article key={title} className="bg-[#fffdf8] p-7"><h3 className="display text-2xl text-[#194a63]">{title}</h3><p className="mt-3 leading-7 text-[#5f747e]">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="site-container grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div><p className="eyebrow">What DadGPT actually is</p><h2 className="display mt-5 text-4xl text-[#173f57] sm:text-5xl">A transparent behavior layer.</h2><p className="mt-5 text-lg leading-8 text-[#5a707b]">It is not a proprietary model, fine-tune, secret dataset, or publisher-hosted chatbot.</p></div>
          <div className="overflow-hidden rounded-2xl border border-[#315f75]/14 bg-[#fffdf8]">
            {architecture.map(([file, purpose]) => <div key={file} className="grid gap-2 border-b border-[#315f75]/12 p-5 last:border-b-0 sm:grid-cols-[10rem_1fr] sm:gap-6"><code className="font-mono text-sm font-bold text-[#9a622d]">{file}</code><p className="leading-7 text-[#5f747e]">{purpose}</p></div>)}
          </div>
        </div>
      </section>

      <section className="grid-rule bg-[#16445e] py-20 text-white md:py-24">
        <div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="text-xs font-bold uppercase tracking-[0.15em] text-[#efb974]">Open by design</p><h2 className="display mt-5 text-4xl leading-tight sm:text-5xl">Read it. Fork it. Make it kinder.</h2><p className="mt-5 text-lg leading-8 text-[#c9dee8]">The project is released under CC0 1.0. You can inspect, reuse, adapt, translate, or redistribute the project material without asking permission.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/13 bg-white/7 p-6 hover:bg-white/11"><Code2 className="size-7 text-[#efb974]" aria-hidden="true" /><h3 className="display mt-5 text-2xl">Source repository</h3><p className="mt-3 leading-7 text-[#c6dce6]">Website source, project documentation, and the inspectable plugin package.</p><span className="mt-6 inline-flex items-center gap-2 font-bold text-[#efb974]">View on GitHub <ArrowUpRight className="size-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" /></span></a>
            <a href={`${WEBSITE_URL}/downloads/DadGPT.tar.gz`} download className="group rounded-2xl border border-white/13 bg-white/7 p-6 hover:bg-white/11"><FileArchive className="size-7 text-[#efb974]" aria-hidden="true" /><h3 className="display mt-5 text-2xl">Plugin source TAR.GZ</h3><p className="mt-3 leading-7 text-[#c6dce6]">The complete current skills-only plugin bundle.</p><span className="mt-6 inline-flex items-center gap-2 font-bold text-[#efb974]">Download source <Download className="size-4" aria-hidden="true" /></span></a>
            <a href={`${WEBSITE_URL}/downloads/DadGPT_custom_instructions.json`} download className="group rounded-2xl border border-white/13 bg-white/7 p-6 hover:bg-white/11"><FileCode2 className="size-7 text-[#efb974]" aria-hidden="true" /><h3 className="display mt-5 text-2xl">Legacy instructions</h3><p className="mt-3 leading-7 text-[#c6dce6]">The historical custom-instruction file that informed the plugin migration.</p><span className="mt-6 inline-flex items-center gap-2 font-bold text-[#efb974]">Download JSON <Download className="size-4" aria-hidden="true" /></span></a>
            <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noreferrer" className="group rounded-2xl border border-white/13 bg-white/7 p-6 hover:bg-white/11"><Scale className="size-7 text-[#efb974]" aria-hidden="true" /><h3 className="display mt-5 text-2xl">CC0 1.0</h3><p className="mt-3 leading-7 text-[#c6dce6]">A public-domain dedication chosen to keep reuse simple and permissionless.</p><span className="mt-6 inline-flex items-center gap-2 font-bold text-[#efb974]">Read the deed <ArrowUpRight className="size-4" aria-hidden="true" /></span></a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-3">
            <article className="paper-card p-7"><Heart className="size-7 text-[#2c87b0]" aria-hidden="true" /><h2 className="display mt-5 text-3xl text-[#15435d]">No separate price</h2><p className="mt-4 leading-7 text-[#5b717b]">DadGPT has no subscription, advertising, premium tier, or checkout. A ChatGPT account, product availability, plan limits, or usage credits may still apply.</p></article>
            <article className="paper-card p-7"><ShieldCheck className="size-7 text-[#2c87b0]" aria-hidden="true" /><h2 className="display mt-5 text-3xl text-[#15435d]">No hidden backend</h2><p className="mt-4 leading-7 text-[#5b717b]">The current release has no remote MCP server and no publisher-controlled chat processing. If that architecture ever changes, the documentation should change with it.</p></article>
            <article className="paper-card p-7"><FileCode2 className="size-7 text-[#2c87b0]" aria-hidden="true" /><h2 className="display mt-5 text-3xl text-[#15435d]">Versioned behavior</h2><p className="mt-4 leading-7 text-[#5b717b]">Instructions and safety references live in files that can be reviewed and improved. Model behavior can still vary because ChatGPT itself evolves.</p></article>
          </div>
        </div>
      </section>

      <section className="site-container pb-20 md:pb-24">
        <div className="rounded-[2rem] border border-[#376379]/13 bg-[#fffdf8] p-7 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10"><div className="max-w-3xl"><p className="eyebrow">Project direction</p><h2 className="display mt-4 text-3xl text-[#174058] sm:text-4xl">Improve clarity, safety, language quality, and independence.</h2><p className="mt-4 leading-7 text-[#5b717b]">The roadmap is intentionally modest: maintain the plugin, document changes, review difficult interaction patterns, and make it easier for others to audit or adapt the work.</p></div><div className="mt-7 flex shrink-0 flex-col gap-3 lg:mt-0"><a href={CHAT_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#72c6ee] px-6 py-3 font-bold text-[#102f40]">Use DadGPT <ArrowUpRight className="size-4" aria-hidden="true" /></a><Link href={`${WEBSITE_URL}/faq`} className="inline-flex items-center justify-center gap-2 font-bold text-[#2479a1] hover:underline">Read the FAQ <ArrowRight className="size-4" aria-hidden="true" /></Link></div></div>
      </section>
    </main>
  );
}
