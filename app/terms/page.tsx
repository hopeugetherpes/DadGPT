import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Terms of use",
  description: "Plain-language terms for the independent DadGPT project and website.",
};

const sections = [
  ["1. What these terms cover", "These terms cover the independent DadGPT project website, documentation, downloadable project files, and the DadGPT plugin material published by Anatole. ChatGPT itself is operated by OpenAI and is governed by OpenAI’s own terms, policies, product rules, and account conditions."],
  ["2. Informational and supportive use", "DadGPT is provided for general reflection, education, emotional support, and practical organization. It does not provide professional medical, psychological, legal, financial, safeguarding, or emergency services."],
  ["3. No human relationship or duty of care", "DadGPT is software. Warm or fatherly wording does not create a parental, therapeutic, fiduciary, confidential, professional, or other human relationship. The project publisher cannot monitor your wellbeing, guarantee follow-up, or intervene in an emergency."],
  ["4. Your responsibility", "You remain responsible for what information you share, how you evaluate responses, and every decision or action you take. Verify important facts and seek qualified help whenever the consequences could be significant."],
  ["5. Emergencies", "Do not use DadGPT as an emergency service. If you or someone else may be in immediate danger, contact local emergency services or a suitable crisis service and seek help from a person who can be present."],
  ["6. Accuracy and availability", "AI output may be incomplete, biased, outdated, inappropriate, or wrong. The project and website are provided without guarantees of accuracy, fitness for a particular purpose, uninterrupted availability, or compatibility with every ChatGPT plan, model, language, or region."],
  ["7. OpenAI services", "Using the public plugin requires ChatGPT access. OpenAI may change model behavior, availability, limits, pricing, data controls, or plugin support. The DadGPT project does not control those services and cannot override OpenAI’s policies."],
  ["8. Privacy", "The current skills-only DadGPT release has no publisher-operated conversation server. OpenAI still processes use of ChatGPT. Read the project privacy page and OpenAI’s current privacy documentation before sharing sensitive information."],
  ["9. License", "Unless a specific file states otherwise, original DadGPT project material is dedicated to the public domain under CC0 1.0. Third-party names, platforms, policies, and trademarks remain the property of their respective owners."],
  ["10. Changes", "The project, plugin, documentation, and these terms may change as the technology and safety understanding evolve. The version published on this website is the current project statement."],
];

export default function TermsPage() {
  return (
    <main id="main-content">
      <PageHero eyebrow="Terms of use" title="Clear terms for an experimental support tool." description="Use DadGPT as a reflective aid, keep responsibility for your decisions, and involve real people whenever judgment, care, authority, or intervention is required." aside={<div className="paper-card p-6"><p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8e5d2f]">Last updated</p><p className="mt-2 font-bold text-[#1d5570]">14 September 2026</p></div>} />
      <section className="py-16 md:py-22">
        <div className="site-container grid gap-12 lg:grid-cols-[0.5fr_1.5fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start"><p className="text-lg leading-8 text-[#5b717b]">These terms are intentionally written in plain language. They do not replace OpenAI’s terms for ChatGPT.</p><a href="https://openai.com/policies/terms-of-use/" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-bold text-[#2479a1] hover:underline">OpenAI Terms of Use <ExternalLink className="size-4" aria-hidden="true" /></a></aside>
          <div className="space-y-4">
            {sections.map(([title, text]) => <section key={title} className="paper-card p-6 sm:p-8"><h2 className="display text-2xl text-[#194a63]">{title}</h2><p className="mt-4 leading-8 text-[#5d737d]">{text}</p></section>)}
          </div>
        </div>
      </section>
    </main>
  );
}
