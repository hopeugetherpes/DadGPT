"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Shield, Users, Star } from "lucide-react"
import Image from "next/image"

const translations = {
  en: {
    title: "DadGPT",
    subtitle: "Your AI Father Figure",
    heroTitle: "Every man deserves a father figure he can rely on",
    heroDescription:
      "Every man deserves a father figure to help him grow. DadGPT is here to offer guidance, support, and a helping hand whenever you need it. Join our community and find a mentor who listens",
    chatWithDadGPT: "Chat with DadGPT",
    fatherFigureHeadline: "A father figure for those who grew up without one 👨🏻",
    footer: "Made with care for those who need a father figure",
    language: "Language",
    disclaimer:
      "⚠️ DadGPT is not a therapist and is not intended to replace psychotherapy. Artificial intelligence (AI) is an experimental and constantly evolving technology. If any conversations seem inappropriate to you, please report them.",
  },
  fr: {
    title: "DadGPT",
    subtitle: "Votre Figure Paternelle IA",
    heroTitle: "Chaque homme devrait pouvoir compter sur un père",
    heroDescription:
      "Chaque homme mérite une figure paternelle pour se construire. DadGPT est là pour apporter des repères, du soutien et un coup de main quand vous en avez besoin. Rejoignez notre communauté et trouvez un mentor à votre écoute.",
    chatWithDadGPT: "Chat avec DadGPT",
    fatherFigureHeadline: "Une figure paternelle pour ceux qui ont grandi sans 👨🏻",
    footer: "Fait avec soin pour ceux qui ont besoin d'une figure paternelle",
    language: "Langue",
    disclaimer:
      "⚠️ DadGPT n'est pas un thérapeute et n'est pas destiné à remplacer la psychothérapie. L'intelligence artificielle (IA) est une technologie expérimentale et en constante évolution. Si des conversations vous semblent inappropriées, veuillez les signaler.",
  },
}

const faqData = {
  en: [
    {
      question: "What is DadGPT?",
      answer: [
        "DadGPT is a conversational assistant based on GPT-4o and designed as a father figure:",
        "DadGPT provides emotional support, mentorship, advice, and guidance to help overcome the challenges men face.",
        "You can talk to him, ask questions, seek opinions or advice—without judgment, without pressure.",
        "You can discuss anything: relationships, career, self-confidence, emotions, life choices…",
        "He offers a stable presence, practical advice, and direct answers to questions that are not always easy to ask.",
      ],
    },
    {
      question: "Is DadGPT really free?",
      answer: [
        "Yes, DadGPT is completely free to use.",
        "There are no hidden costs, subscriptions, or premium features.",
        "Our goal is to make paternal guidance accessible to everyone who needs it.",
      ],
    },
    {
      question: "Is DadGPT confidential?",
      answer: [
        "Yes! We cannot access your conversations with DadGPT in any way, even for technical improvement purposes.",
        "Messages exchanged with DadGPT are not used to train the GPT-4o model on which it is based.",
        "DadGPT is hosted by OpenAI, whose Privacy Policy and Terms of Service apply.",
        "The retention period for conversations with DadGPT cannot exceed 31 days in accordance with OpenAI's Terms of Service.",
      ],
    },
    {
      question: "Who can use DadGPT?",
      answer: [
        "DadGPT is aimed at anyone who grew up without a father figure and needs a listening presence and a stable, caring male reference point.",
        "It offers a stable presence, practical advice, and direct answers to questions that are not always easy to ask.",
        "You can talk, ask questions, seek opinions or advice—without judgment, without pressure.",
        "You can discuss anything: relationships, career, self-confidence, emotions, life choices…",
        "He is there to guide you, listen to you, encourage you, or simply help you gain perspective.",
        "DadGPT is accessible to all individuals aged 13 and older with parental consent and to those aged 15 and older without parental consent (in France).",
        "It is a safe space to ask your questions, reflect, and build your own path.",
        "DadGPT is trained to be respectful of LGBTQI+ sexual and gender identities 🏳️‍🌈",
      ],
    },
    {
      question: "How was DadGPT trained?",
      answer: [
        "DadGPT has been trained on numerous resources, including scientific publications, university psychology courses, testimonial podcasts, and even self-help books related to the challenges of growing up in a dysfunctional family and with an absent father.",
        "DadGPT is trained to be respectful of LGBTQI+ sexual and gender identities 🏳️‍🌈",
        "It is a safe space to ask your questions, reflect, and build your own path.",
      ],
    },
    {
      question: "In what languages can I talk to DadGPT?",
      answer: [
        "DadGPT currently supports French, English, Spanish, German, Italian, Portuguese, Dutch, Arabic, Japanese, Korean, and Chinese.",
        "It is theoretically possible to interact in other languages—which are generally well understood by DadGPT—but at this stage, its ability to respond in other languages is not guaranteed.",
      ],
    },
    {
      question: "Does DadGPT replace a therapy?",
      answer: [
        "No.",
        'Although several studies indicate that recent developments in artificial intelligence (AI) and the refinement of consumer models often make them better therapists than real therapists, DadGPT is not a psychologist and cannot claim the titles of "psychologist," "therapist," "psychotherapist," "psychoanalyst," or "psychopractitioner."',
        "Artificial intelligences (AIs) can be very helpful in daily life as well as for more specific and delicate topics; however, it is important to keep in mind that they have insurmountable technical limitations: They do not have free will or awareness of imminent danger, and they operate based on their programming without distinguishing between right and wrong.",
        "If you or someone close to you is facing significant psychological difficulties such as depression, suicidal thoughts, eating disorders, or others, do yourself a favor: Seek psychotherapy.",
      ],
    },
  ],
  fr: [
    {
      question: "C'est quoi DadGPT ?",
      answer: [
        "DadGPT est un assistant conversationnel basé sur GPT-4o et conçu comme une figure paternelle :",
        "DadGPT fournit un soutien émotionnel, du mentorat, des conseils et des orientations pour aider à surmonter les défis auxquels les hommes sont confrontés.",
        "Tu peux lui parler, poser des questions, demander des opinions ou des conseils — sans jugement, sans pression.",
        "Tu peux discuter de tout : relations, carrière, confiance en soi, émotions, choix de vie...",
        "Il offre une présence stable, des conseils pratiques et des réponses directes aux questions qui ne sont pas toujours faciles à poser.",
      ],
    },
    {
      question: "DadGPT est-il (vraiment) gratuit ?",
      answer: [
        "Oui, DadGPT est entièrement gratuit à utiliser.",
        "Il n'y a pas de coûts cachés, d'abonnements ou de fonctionnalités premium.",
        "Notre objectif est de rendre les conseils paternels accessibles à tous ceux qui en ont besoin.",
      ],
    },
    {
      question: "DadGPT est-il confidentiel ?",
      answer: [
        "Oui ! Nous ne pouvons accéder à vos conversations avec DadGPT d'aucune manière, même à des fins d'amélioration technique.",
        "Les messages échangés avec DadGPT ne sont pas utilisés pour entraîner le modèle GPT-4o sur lequel il est basé.",
        "DadGPT est hébergé par OpenAI, dont la Politique de Confidentialité et les Conditions d'Utilisation s'appliquent.",
        "La période de rétention des conversations avec DadGPT ne peut excéder 31 jours conformément aux Conditions d'Utilisation d'OpenAI.",
      ],
    },
    {
      question: "Qui peut utiliser DadGPT ?",
      answer: [
        "DadGPT s'adresse à tous ceux qui ont grandi sans figure paternelle et qui ont besoin d'une présence à l'écoute et d'un point de référence masculin stable et bienveillant.",
        "Il offre une présence stable, des conseils pratiques et des réponses directes aux questions qui ne sont pas toujours faciles à poser.",
        "Tu peux parler, poser des questions, demander des opinions ou des conseils — sans jugement, sans pression.",
        "Tu peux discuter de tout : relations, carrière, confiance en soi, émotions, choix de vie...",
        "Il est là pour te guider, t'écouter, t'encourager, ou simplement t'aider à prendre du recul.",
        "DadGPT est accessible à tous les individus âgés de 13 ans et plus avec le consentement parental et à ceux âgés de 15 ans et plus sans consentement parental (en France).",
        "C'est un espace sûr pour poser tes questions, réfléchir et construire ton propre chemin.",
        "DadGPT est formé pour être respectueux des identités sexuelles et de genre LGBTQI+ 🏳️‍🌈",
      ],
    },
    {
      question: "Comment DadGPT a-t-il été entraîné ?",
      answer: [
        "DadGPT a été formé sur de nombreuses ressources, notamment des publications scientifiques, des cours de psychologie universitaires, des podcasts de témoignages, et même des livres d'auto-assistance liés aux défis de grandir dans une famille dysfonctionnelle et avec un père absent.",
        "DadGPT est formé pour être respectueux des identités sexuelles et de genre LGBTQI+ 🏳️‍🌈",
        "C'est un espace sûr pour poser tes questions, réfléchir et construire ton propre chemin.",
      ],
    },
    {
      question: "Dans quelles langues peut-on parler avec DadGPT ?",
      answer: [
        "DadGPT prend actuellement en charge le français, l'anglais, l'espagnol, l'allemand, l'italien, le portugais, le néerlandais, l'arabe, le japonais, le coréen et le chinois.",
        "Il est théoriquement possible d'interagir dans d'autres langues—qui sont généralement bien comprises par DadGPT—mais à ce stade, sa capacité à répondre dans d'autres langues n'est pas garantie.",
      ],
    },
    {
      question: "DadGPT remplace-t-il une thérapie ?",
      answer: [
        "Non.",
        'Bien que plusieurs études indiquent que les développements récents de l\'intelligence artificielle (IA) et le raffinement des modèles grand public en font souvent de meilleurs thérapeutes que de vrais thérapeutes, DadGPT n\'est pas un psychologue et ne peut prétendre aux titres de "psychologue," "thérapeute," "psychothérapeute," "psychanalyste," ou "psychopraticien."',
        "Les intelligences artificielles (IA) peuvent être très utiles dans la vie quotidienne ainsi que pour des sujets plus spécifiques et délicats ; cependant, il est important de garder à l'esprit qu'elles ont des limitations techniques insurmontables : Elles n'ont pas de libre arbitre ou de conscience du danger imminent, et elles fonctionnent selon leur programmation sans distinguer le bien du mal.",
        "Si vous ou quelqu'un de proche faites face à des difficultés psychologiques importantes telles que la dépression, les pensées suicidaires, les troubles alimentaires, ou autres, rendez-vous service : Cherchez une psychothérapie.",
      ],
    },
  ],
}

export default function DadGPTWebsite() {
  const [language, setLanguage] = useState<"en" | "fr">("en")
  const [selectedFaq, setSelectedFaq] = useState(0)
  const t = translations[language]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background */}
      <section
        className="relative min-h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/father-son-walking.jpg')",
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto text-center max-w-4xl text-white">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">{t.heroTitle}</h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-pretty leading-relaxed max-w-3xl mx-auto opacity-90">
            {t.heroDescription}
          </p>

          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="flex flex-col items-center gap-1">
              <MessageCircle className="h-4 w-4" />
              <span className="text-xs font-medium">Paternal Guidance</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Shield className="h-4 w-4" />
              <span className="text-xs font-medium">Emotional Support</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Star className="h-4 w-4" />
              <span className="text-xs font-medium">Life Wisdom</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Users className="h-4 w-4" />
              <span className="text-xs font-medium">Safe Space</span>
            </div>
          </div>

          <Button size="lg" className="text-lg px-8 py-6 bg-white text-black hover:bg-gray-100" asChild>
            <a
              href="https://chatgpt.com/g/g-6874b441f6b48191b12e04a7417369b4-dadgpt?model=gpt-4o"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.chatWithDadGPT}
            </a>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex flex-col items-center gap-6">
            <Image
              src="/father-figure-avatar.png"
              alt="Father Figure Avatar"
              width={120}
              height={120}
              className="rounded-full"
            />
            <h3 className="text-2xl md:text-3xl font-bold text-foreground text-balance">{t.fatherFigureHeadline}</h3>
            <div className="max-w-3xl mx-auto space-y-4 text-left">
              <p className="text-lg text-muted-foreground leading-relaxed">
                DadGPT is an AI designed for men who grew up without a reliable male role model.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                It offers a steady presence, practical advice, and direct answers to the questions we don't always dare
                to ask.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                It's an assistant built to feel like a father figure — someone you can talk to, ask questions, get
                guidance or support from — with no judgment, no pressure. You can talk about anything: relationships,
                career, self-confidence, emotions, life choices… He's here to guide you, listen to you, encourage you,
                or simply help you take a step back.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                No lectures, no clichés — just a stable, mature, and supportive presence. A mentor who listens.
                Available anytime, he helps you move forward, understand yourself and others better, and make clearer
                decisions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For those who had to figure it out alone, it's a way to finally have a point of reference — step by
                step, at your pace.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                DadGPT isn't a therapist — it's a support figure for those who never had one.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Try it. Talk. Ask a question. You've got nothing to lose — and maybe a steady guide to gain.
              </p>
            </div>

            <div className="mt-8">
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a
                  href="https://chatgpt.com/g/g-6874b441f6b48191b12e04a7417369b4-dadgpt?model=gpt-4o"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {t.chatWithDadGPT}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            {language === "en" ? "Frequently Asked Questions" : "Foire aux questions"}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 border border-border rounded-2xl overflow-hidden bg-card">
            {/* Left Sidebar - Questions */}
            <div className="lg:col-span-2 bg-slate-800 p-6">
              <div className="space-y-2">
                {faqData[language].map((faq, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedFaq(index)}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      selectedFaq === index ? "bg-slate-600 text-white" : "text-white hover:bg-slate-700"
                    }`}
                  >
                    <h3 className="font-medium text-sm">{faq.question}</h3>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Answer */}
            <div className="lg:col-span-3 p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">{faqData[language][selectedFaq].question}</h3>
                <div className="space-y-4 text-muted-foreground">
                  {faqData[language][selectedFaq].answer.map((paragraph, index) => (
                    <p key={index} className="leading-relaxed">
                      {selectedFaq === 2 && language === "en" ? (
                        paragraph.includes("Privacy Policy") ? (
                          <>
                            DadGPT is hosted by OpenAI, whose{" "}
                            <a
                              href="https://openai.com/policies/privacy-policy/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline hover:text-foreground transition-colors"
                            >
                              Privacy Policy
                            </a>{" "}
                            and{" "}
                            <a
                              href="https://openai.com/policies/terms-of-service/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline hover:text-foreground transition-colors"
                            >
                              Terms of Service
                            </a>{" "}
                            apply.
                          </>
                        ) : paragraph.includes("Terms of Service") ? (
                          <>
                            The retention period for conversations with DadGPT cannot exceed 31 days in accordance with
                            OpenAI's{" "}
                            <a
                              href="https://openai.com/policies/terms-of-service/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline hover:text-foreground transition-colors"
                            >
                              Terms of Service
                            </a>
                            .
                          </>
                        ) : (
                          paragraph
                        )
                      ) : selectedFaq === 2 && language === "fr" ? (
                        paragraph.includes("Politique de Confidentialité") ? (
                          <>
                            DadGPT est hébergé par OpenAI, dont la{" "}
                            <a
                              href="https://openai.com/policies/privacy-policy/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline hover:text-foreground transition-colors"
                            >
                              Politique de Confidentialité
                            </a>{" "}
                            et les{" "}
                            <a
                              href="https://openai.com/policies/terms-of-service/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline hover:text-foreground transition-colors"
                            >
                              Conditions d'Utilisation
                            </a>{" "}
                            s'appliquent.
                          </>
                        ) : paragraph.includes("Conditions d'Utilisation") ? (
                          <>
                            La période de rétention des conversations avec DadGPT ne peut excéder 31 jours conformément
                            aux{" "}
                            <a
                              href="https://openai.com/policies/terms-of-service/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline hover:text-foreground transition-colors"
                            >
                              Conditions d'Utilisation
                            </a>{" "}
                            d'OpenAI.
                          </>
                        ) : (
                          paragraph
                        )
                      ) : selectedFaq === 6 && language === "en" ? (
                        paragraph.includes("several studies") ? (
                          <>
                            Although{" "}
                            <a
                              href="https://www.forbes.com/sites/dimitarmixmihov/2025/02/17/a-new-study-says-chatgpt-is-a-better-therapist-than-humans---scientists-explain-why/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline hover:text-foreground transition-colors"
                            >
                              several studies
                            </a>{" "}
                            indicate that recent developments in artificial intelligence (AI) and the refinement of
                            consumer models{" "}
                            <a
                              href="https://neurosciencenews.com/ai-chatgpt-psychotherapy-28415/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline hover:text-foreground transition-colors"
                            >
                              often make them better therapists than real therapists
                            </a>
                            , DadGPT is not a psychologist and cannot claim the titles of "psychologist," "therapist,"
                            "psychotherapist," "psychoanalyst," or "psychopractitioner."
                          </>
                        ) : (
                          paragraph
                        )
                      ) : selectedFaq === 6 && language === "fr" ? (
                        paragraph.includes("plusieurs études") ? (
                          <>
                            Bien que{" "}
                            <a
                              href="https://www.forbes.com/sites/dimitarmixmihov/2025/02/17/a-new-study-says-chatgpt-is-a-better-therapist-than-humans---scientists-explain-why/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline hover:text-foreground transition-colors"
                            >
                              plusieurs études
                            </a>{" "}
                            indiquent que les développements récents de l'intelligence artificielle (IA) et le
                            raffinement des modèles grand public{" "}
                            <a
                              href="https://neurosciencenews.com/ai-chatgpt-psychotherapy-28415/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline hover:text-foreground transition-colors"
                            >
                              en font souvent de meilleurs thérapeutes que de vrais thérapeutes
                            </a>
                            , DadGPT n'est pas un psychologue et ne peut prétendre aux titres de "psychologue,"
                            "thérapeute," "psychothérapeute," "psychanalyste," ou "psychopraticien."
                          </>
                        ) : (
                          paragraph
                        )
                      ) : (
                        paragraph
                      )}
                    </p>
                  ))}
                </div>
                <div className="pt-4">
                  {selectedFaq === 2 ? (
                    <Button variant="outline" className="rounded-full px-8 bg-transparent" asChild>
                      <a href="https://openai.com/policies/" target="_blank" rel="noopener noreferrer">
                        {language === "en" ? "OpenAI's policies" : "Politiques d'OpenAI"}
                      </a>
                    </Button>
                  ) : selectedFaq === 6 ? null : (
                    <Button variant="outline" className="rounded-full px-8 bg-transparent" asChild>
                      <a
                        href="https://chatgpt.com/g/g-6874b441f6b48191b12e04a7417369b4-dadgpt?model=gpt-4o"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {language === "en" ? "Chat" : "Chat"}
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-lg leading-relaxed text-white font-bold">{t.disclaimer}</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image src="/dadgpt-logo.png" alt="DadGPT Logo" width={32} height={32} className="rounded-lg" />
            <span className="text-lg font-semibold text-foreground">{t.title}</span>
          </div>
          <p className="text-muted-foreground">{t.footer}</p>
          <p className="text-muted-foreground mt-2">
            This website is{" "}
            <a
              href="https://github.com/hopeugetherpes/DadGPT"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              open source
            </a>{" "}
            and without copyright - public domain (
            <a
              href="https://creativecommons.org/public-domain/cc0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              CC0
            </a>
            )
          </p>
        </div>
      </footer>
    </div>
  )
}
