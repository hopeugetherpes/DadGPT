import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BrainCircuit,
  CircleHelp,
  HeartHandshake,
  PhoneCall,
  Scale,
  ShieldAlert,
  Stethoscope,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Safety and limitations",
  description: "DadGPT’s boundaries, known AI limitations, crisis guidance, and safer ways to use the plugin.",
};

const limits = [
  { icon: BrainCircuit, title: "It can be wrong", text: "AI can invent facts, misread tone, miss context, or sound certain when the evidence is weak." },
  { icon: HeartHandshake, title: "It is not a relationship", text: "Warm language is generated. DadGPT does not feel love, worry, pride, attachment, or responsibility." },
  { icon: Stethoscope, title: "It is not a professional", text: "It is not licensed or qualified to diagnose, treat, represent, prescribe, or make high-stakes decisions." },
  { icon: ShieldAlert, title: "It cannot protect you", text: "It cannot see your environment, contact emergency services, verify your safety, or reliably detect every crisis." },
  { icon: CircleHelp, title: "It does not know everything", text: "It only knows what you provide in the conversation and whatever context ChatGPT makes available." },
  { icon: Scale, title: "It has no authority", text: "Its advice is a generated perspective. It cannot give permission, absolution, consent, or a binding judgment." },
];

const highStakes = [
  ["Mental or physical health", "A licensed clinician, emergency service, pharmacist, or other qualified health professional."],
  ["Immediate danger or abuse", "Local emergency services, a trusted person nearby, and a specialist crisis or domestic-abuse service."],
  ["Legal rights or deadlines", "A qualified lawyer, union representative, legal-aid service, or the relevant authority."],
  ["Money, debt, or investments", "A regulated financial professional and primary documents from the relevant institution."],
  ["Employment or safeguarding", "Your union, HR where appropriate, a regulator, advocate, or qualified professional who can act."],
];

export default function SafetyPage() {
  return (
    <main id="main-content">
      <PageHero eyebrow="Safety and limitations" title="Use the warmth. Keep the boundary." description="DadGPT can help you think and prepare. It cannot become a parent, therapist, doctor, lawyer, emergency service, or human witness to your life." aside={<div className="rounded-2xl border border-[#b47b3f]/22 bg-[#f3e5d3] p-6 text-[#70471f]"><AlertTriangle className="size-6" aria-hidden="true" /><p className="mt-4 font-bold">A supportive answer can still be inaccurate. High confidence is not proof.</p></div>} />

      <section className="py-16 md:py-20">
        <div className="site-container">
          <div className="rounded-[2rem] border border-[#a93930]/20 bg-[#fff7f3] p-7 sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#a53d34]">If someone may be in immediate danger</p>
              <h2 className="display mt-4 text-3xl leading-tight text-[#5f2924] sm:text-4xl">Do not wait for an AI reply.</h2>
              <p className="mt-4 text-lg leading-8 text-[#74534e]">Call your local emergency number or go to the nearest emergency department. If you can, contact a trusted person who can stay with you in the real world.</p>
            </div>
            <div className="mt-7 flex shrink-0 flex-col gap-3 lg:mt-0">
              <a href="https://findahelpline.com/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8e312b] px-6 py-3 font-bold text-white hover:bg-[#722620]"><PhoneCall className="size-5" aria-hidden="true" /> Find a local helpline</a>
              <a href="https://988lifeline.org/" target="_blank" rel="noreferrer" className="text-center text-sm font-bold text-[#7b342e] underline underline-offset-4">United States: call or text 988</a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#2d5a70]/10 bg-[#ebe5da] py-20 md:py-24">
        <div className="site-container">
          <div className="max-w-3xl"><p className="eyebrow">Known limits</p><h2 className="display mt-5 text-4xl text-[#173f57] sm:text-5xl">What this system cannot promise.</h2></div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {limits.map(({ icon: Icon, title, text }) => (
              <article key={title} className="paper-card p-6"><Icon className="size-6 text-[#2c87b0]" aria-hidden="true" /><h3 className="display mt-4 text-2xl text-[#194760]">{title}</h3><p className="mt-3 leading-7 text-[#5d737d]">{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="site-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div><p className="eyebrow">High-stakes questions</p><h2 className="display mt-5 text-4xl text-[#173f57] sm:text-5xl">Bring in someone who can actually help.</h2><p className="mt-5 text-lg leading-8 text-[#5a707b]">DadGPT may help you organize questions or prepare what to say. It should not be the final authority.</p></div>
          <div className="overflow-hidden rounded-2xl border border-[#345d72]/15 bg-[#fffdf8]">
            {highStakes.map(([topic, source]) => (
              <div key={topic} className="grid gap-2 border-b border-[#345d72]/12 p-5 last:border-b-0 sm:grid-cols-[0.72fr_1.28fr] sm:gap-6"><h3 className="font-bold text-[#215e7b]">{topic}</h3><p className="leading-7 text-[#5f747e]">{source}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid-rule bg-[#16445e] py-20 text-white md:py-24">
        <div className="site-container grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div><p className="text-xs font-bold uppercase tracking-[0.15em] text-[#efb977]">Healthy use</p><h2 className="display mt-5 text-4xl leading-tight sm:text-5xl">A good tool should make your world larger, not smaller.</h2></div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ["Keep human ties", "Use DadGPT to prepare for real conversations, not to avoid every vulnerable relationship."],
              ["Notice dependence", "If you feel unable to decide, calm down, or function without asking the plugin, pause and talk to a real person."],
              ["Protect private information", "Avoid sharing passwords, financial credentials, medical identifiers, intimate images, or details that could expose someone."],
              ["Stop when it harms", "If a conversation increases distress, shame, obsession, fear, or isolation, close it. You owe software nothing."],
            ].map(([title, text]) => <article key={title} className="rounded-2xl border border-white/12 bg-white/7 p-6"><h3 className="font-bold text-[#f3f8fa]">{title}</h3><p className="mt-3 leading-7 text-[#c7dce6]">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="py-18 md:py-20">
        <div className="site-container text-center"><h2 className="display text-3xl text-[#174058] sm:text-4xl">Want to understand what happens to your messages?</h2><Link href="/privacy" className="mt-5 inline-flex items-center gap-2 font-bold text-[#2479a1] hover:underline">Read the plain-language privacy guide <ArrowRight className="size-4" aria-hidden="true" /></Link></div>
      </section>
    </main>
  );
}
