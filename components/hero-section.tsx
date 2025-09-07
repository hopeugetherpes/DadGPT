import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, MessageCircle, Shield } from "lucide-react"

interface HeroSectionProps {
  language: "en" | "fr"
}

const content = {
  en: {
    title: "Every man should be able to count on a father",
    description:
      "Every man deserves a father figure to build himself. DadGPT is here to provide guidance, support and a helping hand when you need it. Join our community and find a mentor who listens to you.",
    cta: "Chat with DadGPT",
    features: [
      {
        icon: Heart,
        title: "Unconditional Support",
        description: "Always here to listen and provide encouragement",
      },
      {
        icon: MessageCircle,
        title: "Life Guidance",
        description: "Get advice on relationships, career, and personal growth",
      },
      {
        icon: Shield,
        title: "Safe Space",
        description: "A judgment-free environment to share and learn",
      },
    ],
  },
  fr: {
    title: "Chaque homme devrait pouvoir compter sur un père",
    description:
      "Chaque homme mérite une figure paternelle pour se construire. DadGPT est là pour apporter des repères, du soutien et un coup de main quand vous en avez besoin. Rejoignez notre communauté et trouvez un mentor à votre écoute.",
    cta: "Chat avec DadGPT",
    features: [
      {
        icon: Heart,
        title: "Soutien Inconditionnel",
        description: "Toujours là pour écouter et encourager",
      },
      {
        icon: MessageCircle,
        title: "Guidance de Vie",
        description: "Obtenez des conseils sur les relations, la carrière et la croissance personnelle",
      },
      {
        icon: Shield,
        title: "Espace Sécurisé",
        description: "Un environnement sans jugement pour partager et apprendre",
      },
    ],
  },
}

export function HeroSection({ language }: HeroSectionProps) {
  const t = content[language]

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-background.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-balance leading-tight">{t.title}</h1>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-pretty leading-relaxed opacity-90">
          {t.description}
        </p>
        <Button
          size="lg"
          className="text-lg px-12 py-6 bg-white text-black hover:bg-gray-100 rounded-full font-semibold"
        >
          {t.cta}
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {t.features.map((feature, index) => (
              <Card key={index} className="p-6 text-center bg-background/80">
                <feature.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm text-pretty">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
