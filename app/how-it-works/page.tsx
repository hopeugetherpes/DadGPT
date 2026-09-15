import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  FileText,
  MessageSquareText,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { CHAT_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How it works",
  description: "How to install, use, and understand the skills-only DadGPT plugin for ChatGPT.",
};

const steps = [
  { number: "1", title: "Open the plugin page", text: "Visit DadGPT’s public listing while signed in to ChatGPT, then install or enable it for your account." },
  { number: "2", title: "Begin with the real situation", text: "Say what happened, what you feel, and what you need: perspective, a plan, accountability, reassurance, or a direct opinion." },
  { number: "3", title: "Shape the conversation", text: "Ask for a gentler tone, firmer feedback, fewer words, a checklist, or questions before advice. You remain in charge of the format." },
  { number: "4", title: "Keep what is useful", text: "Treat the response as a perspective, not a verdict. Check important facts and decide what fits your values and circumstances." },
];

const protocol = [
  ["Acknowledge", "Reflect the situation and emotion without minimizing, shaming, or rushing past them."],
  ["Clarify", "Distinguish what is known from what is assumed and ask for missing context when it matters."],
  ["Advise", "Offer candid, practical options with reasoning, trade-offs, and concrete next steps."],
  ["Strengthen", "Encourage responsibility and independence instead of asking for loyalty or emotional dependence."],
  ["Close", "Leave the user with specific reassurance, a manageable action, and permission to continue the conversation."],
];

export default function HowItWorksPage() {
  return (
    <main id="main-content">
      <PageHero
        eyebrow="How it works"
        title="Simple to use. Deliberately transparent underneath."
        description="DadGPT is a set of carefully written instructions and safety references that ChatGPT can load when you need this particular style of support. There is no separate DadGPT model hiding behind the name."
        aside={
          <div className="paper-card p-6">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8a5a2c]">Current release</p>
            <p className="display mt-2 text-3xl text-[#1b4d66]">v0.2.1</p>
            <p className="mt-2 text-sm leading-6 text-[#647983]">Skills-only · no remote MCP server · no publisher API key</p>
          </div>
        }
      />

      <section className="py-18 md:py-24">
        <div className="site-container">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article key={step.number} className="paper-card relative overflow-hidden p-6">
                <span className="display absolute -right-1 -top-5 text-[7rem] leading-none text-[#72c6ee]/6" aria-hidden="true">{step.number}</span>
                <span className="grid size-9 place-items-center rounded-full bg-[#72c6ee] text-sm font-bold text-[#102f40]">{step.number}</span>
                <h2 className="display mt-8 text-2xl text-[#174861]">{step.title}</h2>
                <p className="mt-3 leading-7 text-[#5d737d]">{step.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-9 flex justify-center">
            <Button asChild size="lg" className="h-12 rounded-full px-6 text-base">
              <a href={CHAT_URL} target="_blank" rel="noreferrer">Open the public plugin <ArrowUpRight aria-hidden="true" /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-y border-[#2b566d]/10 bg-[#e9e3d8] py-20 md:py-24">
        <div className="site-container grid gap-12 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
          <div>
            <p className="eyebrow">Under the hood</p>
            <h2 className="display mt-5 text-4xl leading-tight text-[#173f57] sm:text-5xl">The plugin guides ChatGPT; it does not replace it.</h2>
            <p className="mt-6 text-lg leading-8 text-[#586d77]">
              The current DadGPT package contains a skill file, supporting guidance, safety references, interface metadata, and local visual assets. It contains no external service that receives your conversation.
            </p>
          </div>

          <div className="paper-card p-5 sm:p-8">
            <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-center">
              <div className="rounded-xl bg-[#f2ece1] p-5 text-center">
                <UserRound className="mx-auto size-6 text-[#2b7da3]" aria-hidden="true" />
                <p className="mt-3 font-bold">Your message</p>
                <p className="mt-1 text-sm text-[#677b85]">inside ChatGPT</p>
              </div>
              <ArrowRight className="mx-auto hidden size-5 text-[#9a744f] sm:block" aria-hidden="true" />
              <div className="rounded-xl bg-[#72c6ee] p-5 text-center text-[#102f40]">
                <FileText className="mx-auto size-6 text-[#efbd80]" aria-hidden="true" />
                <p className="mt-3 font-bold">DadGPT skill</p>
                <p className="mt-1 text-sm text-[#25546b]">instructions load</p>
              </div>
              <ArrowRight className="mx-auto hidden size-5 text-[#9a744f] sm:block" aria-hidden="true" />
              <div className="rounded-xl bg-[#f2ece1] p-5 text-center">
                <Bot className="mx-auto size-6 text-[#2b7da3]" aria-hidden="true" />
                <p className="mt-3 font-bold">ChatGPT replies</p>
                <p className="mt-1 text-sm text-[#677b85]">using the guidance</p>
              </div>
            </div>
            <div className="mt-5 flex gap-3 rounded-xl border border-[#4c95b8]/18 bg-[#e9f4f9] p-4 text-sm leading-6 text-[#3d6c82]">
              <ShieldCheck className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
              <p><strong>No DadGPT-controlled server is in this path.</strong> OpenAI still processes the conversation as part of ChatGPT, under your account settings and OpenAI’s policies. <a className="font-bold underline underline-offset-4" href="https://developers.openai.com/plugins/concepts/plugins" target="_blank" rel="noreferrer">Read OpenAI’s plugin architecture guide.</a></p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="site-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow">Conversation design</p>
            <h2 className="display mt-5 text-4xl text-[#173f57] sm:text-5xl">A repeatable shape, not a canned answer.</h2>
            <p className="mt-5 text-lg leading-8 text-[#5a707b]">The skill describes a posture and a process. The actual response changes with your language, context, and request.</p>
          </div>
          <ol className="space-y-3">
            {protocol.map(([title, text], index) => (
              <li key={title} className="grid gap-4 rounded-2xl border border-[#376379]/13 bg-[#fffdf8] p-5 sm:grid-cols-[2.7rem_8rem_1fr] sm:items-start">
                <span className="font-mono text-sm font-bold text-[#b27435]">0{index + 1}</span>
                <h3 className="font-bold text-[#205c79]">{title}</h3>
                <p className="leading-7 text-[#607680]">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="site-container pb-20 md:pb-24">
        <div className="paper-card grid gap-9 p-7 sm:p-10 lg:grid-cols-2">
          <div>
            <MessageSquareText className="size-7 text-[#2c87b0]" aria-hidden="true" />
            <h2 className="display mt-4 text-3xl text-[#174058]">Speak naturally</h2>
            <p className="mt-4 leading-7 text-[#5b717b]">DadGPT is instructed to answer in the language you use. You can mix languages, ask for plain wording, or request a shorter and more structured response. Quality can still vary by language and topic.</p>
          </div>
          <div>
            <CheckCircle2 className="size-7 text-[#2c87b0]" aria-hidden="true" />
            <h2 className="display mt-4 text-3xl text-[#174058]">Use your own judgment</h2>
            <p className="mt-4 leading-7 text-[#5b717b]">If an answer feels wrong, say so. Add context, ask DadGPT to challenge its assumptions, or stop. The system is meant to support reflection, never demand trust or obedience.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
