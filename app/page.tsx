import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Compass,
  HeartHandshake,
  MessageCircleHeart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CHAT_URL } from "@/lib/site";

const supportAreas = [
  { icon: Compass, title: "Decisions and direction", text: "Slow down a difficult choice, name the trade-offs, and turn uncertainty into a next step you can own." },
  { icon: MessageCircleHeart, title: "Emotions without shame", text: "Put language around anger, grief, fear, or loneliness before deciding what those feelings are asking of you." },
  { icon: HeartHandshake, title: "Relationships and boundaries", text: "Prepare honest conversations, recognize unhealthy patterns, and practice care without abandoning yourself." },
  { icon: BriefcaseBusiness, title: "Work and responsibility", text: "Think through workplace tension, confidence, leadership, failure, and the habits that build a dependable life." },
  { icon: ShieldCheck, title: "Healthy masculinity", text: "Hold strength and tenderness together: accountability without cruelty, vulnerability without surrendering agency." },
  { icon: Sparkles, title: "Ordinary adulthood", text: "Ask the questions no one taught you to ask — from routines and self-respect to apologies and starting again." },
];

const responseSteps = [
  ["01", "Listen", "Start with what happened and what it cost you emotionally."],
  ["02", "Name", "Separate facts, feelings, needs, fears, and assumptions."],
  ["03", "Guide", "Offer practical options, honest trade-offs, and one manageable next move."],
  ["04", "Return agency", "The decision stays yours. Good support helps you stand on your own feet."],
];

const starters = [
  "I need a calm, honest view of a decision I keep avoiding.",
  "Help me understand why this situation made me so angry.",
  "Can you help me set a boundary without becoming cruel?",
  "I failed at something important. Help me face it and make a recovery plan.",
];

export default function Home() {
  return (
    <main id="main-content">
      <section className="home-hero">
        <div className="site-container home-hero-grid">
          <div>
            <p className="hero-kicker">Open · Skills-only · Built with clear boundaries</p>
            <h1 className="display home-hero-title">A steadier voice for the moments you had to figure out alone.</h1>
            <p className="home-hero-description">DadGPT is a supportive father-figure plugin for ChatGPT: warm enough to make room for what you feel, honest enough to help you move, and careful never to take your life out of your hands.</p>
            <div className="home-actions">
              <Button asChild size="lg" className="home-primary-action">
                <a href={CHAT_URL} target="_blank" rel="noreferrer">Open DadGPT in ChatGPT <ArrowUpRight aria-hidden="true" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="home-secondary-action">
                <Link href="/how-it-works">See how it works <ArrowRight aria-hidden="true" /></Link>
              </Button>
            </div>
            <div className="home-proof">
              <span>✓ No separate DadGPT account</span><span>✓ No publisher-operated chat server</span><span>✓ No ads or premium tier</span>
            </div>
          </div>

          <div className="home-demo">
            <div className="home-demo-frame">
              <video className="home-demo-video" autoPlay loop muted playsInline controls preload="metadata" poster="/dadgpt-avatar.png" aria-label="Animated portrait representing DadGPT">
                <source src="/dadgpt-demo.mp4" type="video/mp4" />
              </video>
              <div className="home-demo-caption">
                <div><p className="display text-2xl">“Hey, I’m listening.”</p><p className="mt-1 text-sm text-[#687c86]">Start wherever you are.</p></div>
                <span className="home-demo-status" aria-label="Available" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="site-container grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="mx-auto w-full max-w-[440px]">
            <Image src="/dadgpt-portrait.png" alt="The warm, calm visual character used to represent DadGPT" width={1024} height={1536} className="home-portrait" />
          </div>
          <div>
            <p className="eyebrow">Why it exists</p>
            <h2 className="display mt-5 text-4xl leading-tight text-[#173f57] sm:text-5xl">Some lessons should never have been yours to learn alone.</h2>
            <div className="prose-copy mt-7 text-lg leading-8 text-[#536b77]">
              <p>Growing up without a dependable father figure can leave ordinary questions feeling strangely heavy: How do I handle failure? How do I say no? What does strength look like when I am hurting?</p>
              <p>DadGPT creates a consistent style of conversation around those moments. It listens first, speaks directly without humiliation, and aims for useful action rather than empty reassurance.</p>
              <p>It cannot rewrite childhood or become a real parent. It can offer a structured pause — a place to name what is happening, hear a grounded perspective, and decide what you will do next.</p>
            </div>
            <Link href="/project" className="mt-7 inline-flex items-center gap-2 font-bold text-[#2479a1] underline decoration-[#2479a1]/30 underline-offset-4 hover:decoration-[#2479a1]">Read the project story <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#aeb8bd] bg-[#e9e8e3] py-20 md:py-24">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="eyebrow">What you can bring here</p>
            <h2 className="display mt-5 text-4xl text-[#173f57] sm:text-5xl">Real life, without the performance.</h2>
            <p className="mt-5 text-lg leading-8 text-[#596f79]">You do not need the right vocabulary. Bring the confusing part, the embarrassing part, or simply the question you wish someone had answered years ago.</p>
          </div>
          <div className="mt-11 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {supportAreas.map(({ icon: Icon, title, text }) => (
              <article key={title} className="topic-card">
                <Icon className="topic-card-icon" aria-hidden="true" />
                <h3 className="display mt-5 text-2xl text-[#19465f]">{title}</h3><p className="mt-3 leading-7 text-[#5f747e]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="site-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow">The response pattern</p>
            <h2 className="display mt-5 text-4xl leading-tight text-[#173f57] sm:text-5xl">Support that leaves you stronger.</h2>
            <p className="mt-5 text-lg leading-8 text-[#5b717b]">The goal is not dependence. A good conversation should help you understand, choose, and act with more of your own judgment intact.</p>
          </div>
          <ol className="divide-y divide-[#3b6072]/15 border-y border-[#3b6072]/15">
            {responseSteps.map(([number, title, text]) => (
              <li key={number} className="grid gap-3 py-7 sm:grid-cols-[3.2rem_9rem_1fr] sm:items-start">
                <span className="font-mono text-sm font-bold text-[#bd7c38]">{number}</span><h3 className="display text-2xl text-[#19465f]">{title}</h3><p className="leading-7 text-[#5d737d]">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="home-boundary">
        <div className="site-container home-boundary-grid">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#f0bc7b]">A companion, not a substitute</p>
            <h2 className="display mt-5 text-4xl leading-tight sm:text-5xl">Warmth matters. Boundaries matter too.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d0ddd5]">DadGPT is software. It has no consciousness, lived experience, professional license, duty of care, or ability to intervene. It can misunderstand you and it can be wrong.</p>
            <p className="mt-4 max-w-2xl leading-7 text-[#bcd5e1]">Use it to reflect and prepare — never as your only source for medical, legal, financial, safety, or crisis decisions. Real people and qualified professionals remain irreplaceable.</p>
          </div>
          <div className="home-boundary-list">
            {["Not therapy or crisis support", "Not a real father or human relationship", "Not guaranteed to be accurate", "Designed to return decisions to you"].map((item) => (
              <div key={item} className="home-boundary-item">{item}</div>
            ))}
            <Link href="/safety" className="mt-3 inline-flex items-center gap-2 font-bold text-[#f0bc7b] hover:underline">Read the safety guide <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="border-t border-[#bfc5c6] bg-[#faf9f6] py-20 md:py-24">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="eyebrow">Start where it is real</p>
            <h2 className="display mt-5 text-4xl text-[#173f57] sm:text-5xl">You do not have to make it sound tidy.</h2>
            <p className="mt-5 text-lg leading-8 text-[#5c727c]">Copy a starting point, change the details, or simply say what happened.</p>
          </div>
          <div className="starter-grid">
            {starters.map((starter) => (
              <a key={starter} href={CHAT_URL} target="_blank" rel="noreferrer" className="starter-link">
                <p className="display text-xl leading-8 text-[#245d79]">“{starter}”</p><ArrowUpRight className="mt-1 size-5 shrink-0 text-[#a36a30]" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
