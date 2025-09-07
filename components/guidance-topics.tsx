import { Briefcase, Users, GraduationCap, Home, DollarSign, Lightbulb } from "lucide-react"

interface GuidanceTopicsProps {
  language: "en" | "fr"
}

const content = {
  en: {
    title: "Areas of Guidance",
    subtitle: "Get support in the areas that matter most to you",
    topics: [
      {
        icon: Briefcase,
        title: "Career & Work",
        description: "Navigate job decisions, workplace challenges, and professional growth",
      },
      {
        icon: Users,
        title: "Relationships",
        description: "Build healthy relationships, resolve conflicts, and communicate better",
      },
      {
        icon: GraduationCap,
        title: "Education & Learning",
        description: "Make educational choices, develop study habits, and pursue knowledge",
      },
      {
        icon: Home,
        title: "Life Skills",
        description: "Master practical skills like budgeting, cooking, and home maintenance",
      },
      {
        icon: DollarSign,
        title: "Financial Wisdom",
        description: "Learn about saving, investing, and making smart financial decisions",
      },
      {
        icon: Lightbulb,
        title: "Personal Growth",
        description: "Build confidence, set goals, and become the person you want to be",
      },
    ],
    cta: "Get Guidance",
  },
  fr: {
    title: "Domaines de Guidance",
    subtitle: "Obtenez du soutien dans les domaines qui vous importent le plus",
    topics: [
      {
        icon: Briefcase,
        title: "Carrière & Travail",
        description: "Naviguez les décisions professionnelles, défis au travail et croissance professionnelle",
      },
      {
        icon: Users,
        title: "Relations",
        description: "Construisez des relations saines, résolvez les conflits et communiquez mieux",
      },
      {
        icon: GraduationCap,
        title: "Éducation & Apprentissage",
        description: "Faites des choix éducatifs, développez des habitudes d'étude et poursuivez la connaissance",
      },
      {
        icon: Home,
        title: "Compétences de Vie",
        description: "Maîtrisez les compétences pratiques comme le budget, la cuisine et l'entretien ménager",
      },
      {
        icon: DollarSign,
        title: "Sagesse Financière",
        description: "Apprenez l'épargne, l'investissement et les décisions financières intelligentes",
      },
      {
        icon: Lightbulb,
        title: "Croissance Personnelle",
        description: "Développez la confiance, fixez des objectifs et devenez qui vous voulez être",
      },
    ],
    cta: "Obtenir du Guidance",
  },
}
