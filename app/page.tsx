"use client"

import { Button } from "@/components/ui/button"
import { AlertTriangle, Github } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [activeQuestion, setActiveQuestion] = useState("What is DadGPT?")

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch((err) => {
              console.log("Autoplay failed:", err)
            })
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [])

  const faqData = [
    {
      question: "What is DadGPT?",
      answer: (
        <>
          <p className="mb-4">DadGPT is a conversational assistant based on GPT-4o and designed as a father figure:</p>
          <p className="mb-4">
            DadGPT provides emotional support, mentorship, advice, and guidance to help overcome the challenges men
            face.
          </p>
          <p className="mb-4">
            You can talk to him, ask questions, seek opinions or advice—without judgment, without pressure.
          </p>
          <p className="mb-4">
            You can discuss anything: relationships, career, self-confidence, emotions, life choices…
          </p>
          <p className="mb-4">
            He offers a stable presence, practical advice, and direct answers to questions that are not always easy to
            ask.
          </p>
        </>
      ),
    },
    {
      question: "Is DadGPT really free?",
      answer: (
        <p>
          Yes, DadGPT is completely free to use. There are no hidden costs or premium features. Our mission is to
          provide accessible support to all men who need it.
        </p>
      ),
    },
    {
      question: "Is DadGPT confidential?",
      answer: (
        <p>
          Your conversations with DadGPT are private and confidential. We take your privacy seriously and do not share
          your personal information or conversation history with third parties.
        </p>
      ),
    },
    {
      question: "Who can use DadGPT?",
      answer: (
        <p>
          DadGPT is designed for any man seeking guidance, support, or a listening ear. Whether you grew up without a
          father figure or simply need advice on life's challenges, DadGPT is here for you.
        </p>
      ),
    },
    {
      question: "How was DadGPT trained?",
      answer: (
        <p>
          DadGPT is built on advanced AI technology (GPT-4o) and has been specifically fine-tuned to provide supportive,
          non-judgmental guidance with a focus on mentorship and emotional intelligence typical of a positive father
          figure.
        </p>
      ),
    },
    {
      question: "In what languages can I talk to DadGPT?",
      answer: (
        <p>
          DadGPT supports multiple languages including English, French, Spanish, German, and many others. You can
          communicate with DadGPT in the language you're most comfortable with.
        </p>
      ),
    },
    {
      question: "Does DadGPT replace a therapy?",
      answer: (
        <p>
          No, DadGPT is not a replacement for professional therapy or mental health treatment. While it can provide
          support and guidance, it's designed to complement, not replace, professional help when needed.
        </p>
      ),
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/hero-background.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-balance">
            Every man deserves a father figure he can rely on
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto text-balance">
            Every man deserves a father figure to help him grow. DadGPT is here to offer guidance, support, and a
            helping hand whenever you need it. Join our community and find a mentor who listens
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 font-medium px-8 py-6 text-lg rounded-full"
            asChild
          >
            <a href="https://chat.dadgpt.eu/" target="_blank" rel="noopener noreferrer">
              Chat with DadGPT
            </a>
          </Button>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex justify-center mb-12">
            <div className="w-64 h-64 rounded-full overflow-hidden">
              <video
                ref={videoRef}
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DadGPT%20English-UkjqMDOIg53d6HE3CMg6OBie5I8Kna.mp4"
                loop
                muted={false}
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-4xl font-bold mb-6 text-black">A father figure for those who grew up without one 👨🏻</h2>

          {/* Description Paragraphs */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p className="font-semibold text-black">
              DadGPT is an AI built for men who grew up without a reliable father figure.
            </p>

            <p>
              It offers a steady presence, practical advice, and straight answers to questions you don't always feel
              comfortable asking.
            </p>

            <p>
              It's an assistant designed to be like a father figure: someone to talk to, ask questions, get advice or
              guidance from — no judgment, no pressure.
            </p>

            <p>
              You can talk about anything: relationships, career, confidence, emotions, life choices…
              <br />
              It's here to guide, listen, encourage, or just help you see things more clearly.
            </p>

            <p>
              No lectures, no tired clichés: just a stable, mature presence who's got your back, a mentor who actually
              listens.
            </p>

            <p>
              Available whenever you need it, helping you move forward, better understand yourself and others, and make
              decisions with more clarity.
            </p>

            <p>
              For those who had to figure it out on their own, this is a way to finally have someone in your corner,
              step by step, at your own pace.
            </p>

            <p>
              Give it a try. Talk. Ask something. You've got nothing to lose, it's <strong>free</strong> — and maybe a
              solid reference point to gain.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-10">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-2 border-black text-black hover:bg-black hover:text-white font-medium bg-transparent"
              asChild
            >
              <a href="https://chat.dadgpt.eu/" target="_blank" rel="noopener noreferrer">
                Ready?
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 text-gray-900">Frequently Asked Questions</h2>

          <div className="grid grid-cols-1 lg:grid-cols-[560px_1fr] gap-0 max-w-[1400px] mx-auto">
            {/* Left Sidebar - Questions */}
            <div className="bg-[#2c3e50] rounded-l-2xl p-8 space-y-0">
              {faqData.map((faq, index) => (
                <button
                  key={index}
                  onClick={() => setActiveQuestion(faq.question)}
                  className={`w-full text-left py-5 px-6 rounded-lg transition-colors ${
                    activeQuestion === faq.question ? "bg-[#4a6278] text-white" : "text-white hover:bg-[#3d5266]"
                  }`}
                >
                  <span className="text-base font-medium">{faq.question}</span>
                </button>
              ))}
            </div>

            {/* Right Content Area */}
            <div className="bg-white rounded-r-2xl p-12 border border-l-0 border-gray-200">
              <h3 className="text-3xl font-bold mb-6 text-gray-900">{activeQuestion}</h3>
              <div className="text-gray-700 text-base leading-relaxed space-y-4">
                {faqData.find((faq) => faq.question === activeQuestion)?.answer}
              </div>

              {/* Chat Button */}
              <div className="mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-10 py-6 border-2 border-gray-300 text-gray-700 hover:bg-gray-100 font-medium bg-white"
                  asChild
                >
                  <a href="https://chat.dadgpt.eu/" target="_blank" rel="noopener noreferrer">
                    Chat
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#2a2a2a] text-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          {/* Warning */}
          <div className="flex items-start gap-3 mb-6">
            <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <p className="text-base leading-relaxed">
              DadGPT is not a therapist and is not intended to replace therapy.
            </p>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed mb-8">
            Artificial intelligence (AI) is an experimental and constantly evolving technology. If certain conversations
            seem inappropriate,{" "}
            <a
              href="https://github.com/hopeugetherpes/DadGPT/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white"
            >
              report them here
            </a>
            .
          </p>

          {/* Copyright */}
          <div className="text-center text-sm text-gray-400 pt-8 border-t border-gray-600">
            <p>
              <a
                href="https://creativecommons.org/public-domain/cc0/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                CC0
              </a>
              {" - Public Domain (No Copyright Required)"}
            </p>
            <div className="flex flex-col items-center gap-2 mt-2">
              <a
                href="https://github.com/hopeugetherpes/DadGPT"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                Open Source
              </a>
              <a
                href="https://github.com/hopeugetherpes/DadGPT"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
