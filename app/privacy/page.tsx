import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Database, EyeOff, ExternalLink, Server, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { WEBSITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "A plain-language explanation of DadGPT’s skills-only data flow and the privacy boundaries that apply.",
};

export default function PrivacyPage() {
  return (
    <main id="main-content">
      <PageHero eyebrow="Privacy, without vague promises" title="DadGPT’s publisher does not receive your chats." description="The current plugin is skills-only. It has no DadGPT-operated server, analytics endpoint, account system, or API connection in the conversation path. OpenAI still processes your conversation as part of ChatGPT." aside={<div className="paper-card p-6"><EyeOff className="size-7 text-[#2c87b0]" aria-hidden="true" /><p className="mt-4 font-bold text-[#1d5570]">No publisher chat dashboard</p><p className="mt-2 text-sm leading-6 text-[#657a84]">There is no technical endpoint in this release through which DadGPT’s publisher receives ordinary chat messages.</p></div>} />

      <section className="py-20 md:py-24">
        <div className="site-container grid gap-12 lg:grid-cols-[0.68fr_1.32fr]">
          <div><p className="eyebrow">The data path</p><h2 className="display mt-5 text-4xl text-[#173f57] sm:text-5xl">Who handles what.</h2><p className="mt-5 text-lg leading-8 text-[#5b717b]">“The publisher cannot see it” is not the same as “no company processes it.” These are separate privacy boundaries.</p></div>
          <ol className="space-y-4">
            {[
              ["1", "You write inside ChatGPT", "Your message, attachments, account context, and any enabled ChatGPT features are handled in the ChatGPT environment."],
              ["2", "ChatGPT loads the DadGPT skill", "The plugin contributes instructions and reference material that shape how the model should respond."],
              ["3", "OpenAI generates the response", "OpenAI’s systems process the exchange according to your plan, settings, applicable policies, and available product controls."],
              ["4", "Nothing is sent to a DadGPT server", "The current release has no remote MCP server or publisher API. The publisher therefore receives no copy through DadGPT."],
            ].map(([number, title, text]) => (
              <li key={number} className="paper-card grid gap-4 p-6 sm:grid-cols-[3rem_1fr]"><span className="grid size-10 place-items-center rounded-full bg-[#72c6ee] font-mono text-sm font-bold text-[#102f40]">{number}</span><div><h3 className="font-bold text-[#1e5773]">{title}</h3><p className="mt-2 leading-7 text-[#5f747e]">{text}</p></div></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-[#325f76]/10 bg-[#eae4d9] py-20 md:py-24">
        <div className="site-container grid gap-5 lg:grid-cols-2">
          <article className="paper-card p-7 sm:p-9">
            <ShieldCheck className="size-7 text-[#2c87b0]" aria-hidden="true" />
            <h2 className="display mt-5 text-3xl text-[#15435d]">What the DadGPT project does not add</h2>
            <ul className="mt-6 space-y-4 text-[#5b717b]">
              {["No DadGPT account or sign-in", "No advertising or behavioral analytics", "No publisher database of conversations", "No remote MCP server in version 0.2.1", "No API key embedded in the plugin", "No contact form or project-added tracking script on this website"].map((item) => <li key={item} className="flex gap-3"><Check className="mt-1 size-4 shrink-0 text-[#2c87b0]" aria-hidden="true" /><span>{item}</span></li>)}
            </ul>
          </article>
          <article className="paper-card p-7 sm:p-9">
            <Server className="size-7 text-[#9b642f]" aria-hidden="true" />
            <h2 className="display mt-5 text-3xl text-[#15435d]">What still belongs to ChatGPT</h2>
            <ul className="mt-6 space-y-4 text-[#5b717b]">
              {["Processing prompts and generating replies", "Account, plan, usage, and memory settings", "Conversation history and retention controls", "Safety systems and product telemetry", "Any use of data described by OpenAI’s current policies"].map((item) => <li key={item} className="flex gap-3"><Database className="mt-1 size-4 shrink-0 text-[#9b642f]" aria-hidden="true" /><span>{item}</span></li>)}
            </ul>
          </article>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="site-container grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div><p className="eyebrow">Protect yourself</p><h2 className="display mt-5 text-4xl text-[#173f57] sm:text-5xl">Share enough context, not every identifier.</h2></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Remove identifying details", "Use roles or initials when a real name, employer, address, or case number is not needed."],
              ["Never share credentials", "Do not paste passwords, recovery codes, private keys, bank details, or authentication tokens."],
              ["Review ChatGPT controls", "Check memory, history, training, and temporary-chat options in your own ChatGPT settings."],
              ["Assume policies can change", "Revisit OpenAI’s current privacy information instead of relying on an old screenshot or promise."],
            ].map(([title, text]) => <article key={title} className="rounded-2xl border border-[#376379]/14 bg-[#fffdf8] p-6"><h3 className="font-bold text-[#205c79]">{title}</h3><p className="mt-3 leading-7 text-[#5e747e]">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="site-container pb-20 md:pb-24">
        <p className="mb-8 rounded-2xl border border-[#376379]/13 bg-[#fffdf8] p-5 text-sm leading-7 text-[#5e747e]">
          This project does not add analytics or advertising trackers to the website. The hosting provider may still process ordinary technical request data needed to deliver and secure the site under its own policies.
        </p>
        <div className="grid-rule rounded-[2rem] bg-[#174861] p-7 text-white sm:p-10">
          <h2 className="display text-3xl sm:text-4xl">Read the policies that actually govern the service.</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[#c8dde7]">DadGPT cannot override OpenAI’s terms, privacy policy, or account controls. Those official documents are the source of truth for ChatGPT’s handling of your data.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="https://openai.com/policies/privacy-policy/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#f1bd7b] px-5 py-3 font-bold text-[#183b4d]">OpenAI Privacy Policy <ExternalLink className="size-4" aria-hidden="true" /></a>
            <a href="https://openai.com/policies/terms-of-use/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 font-bold hover:bg-white/10">OpenAI Terms of Use <ExternalLink className="size-4" aria-hidden="true" /></a>
          </div>
        </div>
        <p className="mt-8 text-center"><Link href={`${WEBSITE_URL}/safety`} className="inline-flex items-center gap-2 font-bold text-[#2479a1] hover:underline">Review the safety boundaries <ArrowRight className="size-4" aria-hidden="true" /></Link></p>
      </section>
    </main>
  );
}
