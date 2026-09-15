import type { Metadata } from "next";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { CHAT_URL, GITHUB_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Straight answers about DadGPT, its purpose, privacy, pricing, limitations, and open-source release.",
};

const faqs = [
  ["What is DadGPT?", "DadGPT is a skills-only plugin for ChatGPT. It provides instructions and safety references that shape ChatGPT into a warm, direct, supportive father-figure voice. It is not a separate model, person, or independent service."],
  ["Who is it for?", "It was designed primarily for men who grew up without a dependable father figure or who want a grounded masculine perspective. Anyone who finds that style useful may use it. The project aims to be respectful of LGBTQ+ people, different cultures, disabilities, and different experiences of family and masculinity."],
  ["Is DadGPT a real father or mentor?", "No. It can use warm, fatherly language, but that language is generated. DadGPT has no feelings, relationship, memory of caring, legal responsibility, or life experience. It should support — never replace — real relationships."],
  ["Was it trained or fine-tuned on special material?", "No separate model was trained or fine-tuned for DadGPT. The public plugin supplies written instructions and reference files to the ChatGPT model available in the user’s product. The result may change as ChatGPT models and product behavior evolve."],
  ["Is it free?", "The DadGPT project charges no separate fee and has no ads, premium tier, or checkout. You still need access to ChatGPT, and OpenAI’s plan availability, message limits, and usage-credit rules may apply."],
  ["Can the publisher read my conversations?", "Not through the current DadGPT plugin. Version 0.2.1 has no publisher-operated server, remote MCP endpoint, or embedded publisher API key. OpenAI still processes conversations as part of ChatGPT, so your account settings and OpenAI’s current policies remain relevant."],
  ["Does DadGPT remember me?", "That depends on the ChatGPT features and settings available to your account, not on a DadGPT-owned database. Do not assume that every detail will be remembered, forgotten, or isolated from other ChatGPT context. Review your ChatGPT memory and data controls."],
  ["Which languages does it support?", "DadGPT is instructed to answer in the language you use and to preserve the same supportive posture. ChatGPT can work in many languages, but nuance, cultural fit, and accuracy can vary. You can always ask for simpler wording or correct a mistranslation."],
  ["Can it replace therapy?", "No. It cannot assess, diagnose, treat, monitor risk, or provide a duty of care. It may help you put feelings into words, prepare questions, or organize a next step, but professional and emergency support remain irreplaceable."],
  ["Can I trust its advice?", "Treat every answer as one perspective. Check factual claims, add missing context, and involve qualified people for health, legal, financial, safety, or other high-stakes decisions. A confident tone is not evidence."],
  ["What should I do in a crisis?", "Do not wait for an AI reply. Contact your local emergency services, a crisis line, or a trusted person who can be physically present. DadGPT cannot see your situation or intervene."],
  ["Is the project open source?", "Yes. The project material and published plugin bundle are released under CC0 1.0 so they can be inspected, copied, adapted, translated, and redistributed. The website links to the source package and repository."],
  ["Can I report a problem or contribute?", "Use the project repository to review the files, open an issue, or propose a change. Helpful reports include the exact wording, the problem it created, the language used, and what a safer or more useful response would have done."],
];

export default function FAQPage() {
  return (
    <main id="main-content">
      <PageHero eyebrow="Frequently asked questions" title="Clear answers before you start." description="DadGPT uses an emotionally warm style, so its technical and human boundaries deserve unusually plain language." />
      <section className="py-16 md:py-22">
        <div className="site-container grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start"><p className="text-lg leading-8 text-[#5c727c]">Open any question below. If something important is missing, the project repository is the best place to suggest an addition.</p><a href={GITHUB_URL} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 font-bold text-[#2479a1] hover:underline">Visit the repository <ArrowUpRight className="size-4" aria-hidden="true" /></a></aside>
          <div className="space-y-3">
            {faqs.map(([question, answer], index) => (
              <details key={question} className="group rounded-2xl border border-[#345f74]/14 bg-[#fffdf8] open:shadow-lg">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 font-bold text-[#1d5570] focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-inset focus-visible:ring-[#63bce8]/35 sm:px-6">
                  <span className="flex gap-4"><span className="font-mono text-sm text-[#b17438]">{String(index + 1).padStart(2, "0")}</span><span>{question}</span></span>
                  <ChevronDown className="chevron size-5 shrink-0 text-[#627781] transition-transform group-open:rotate-180" aria-hidden="true" />
                </summary>
                <div className="border-t border-[#345f74]/10 px-5 py-5 leading-8 text-[#5d737d] sm:px-6"><p>{answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="site-container pb-20 md:pb-24"><div className="grid-rule rounded-[2rem] bg-[#174861] p-8 text-center text-white sm:p-12"><h2 className="display text-3xl sm:text-4xl">Still wondering how it feels in practice?</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-[#c7dce6]">Start with a low-stakes question. Keep your details general, challenge anything that sounds wrong, and stop whenever the conversation is not helping.</p><a href={CHAT_URL} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#efb974] px-6 py-3 font-bold text-[#163646]">Open DadGPT <ArrowUpRight className="size-4" aria-hidden="true" /></a></div></section>
    </main>
  );
}
