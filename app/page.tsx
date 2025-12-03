"use client"

import { useState } from "react"
import { LandingScreen } from "@/components/birthday/landing-screen"
import { IntroAnimation } from "@/components/birthday/intro-animation"
import { QuizSection } from "@/components/birthday/quiz-section"
import { MemoryGallery } from "@/components/birthday/memory-gallery"
import { MiniGames } from "@/components/birthday/mini-games"
import { BirthdayCard } from "@/components/birthday/birthday-card"
import { CakeCeremony } from "@/components/birthday/cake-ceremony"
import { FinalSurprise } from "@/components/birthday/final-surprise"
import { EndingScreen } from "@/components/birthday/ending-screen"
import { AudioProvider } from "@/components/birthday/audio-provider"

type Section = "landing" | "intro" | "quiz" | "memory" | "games" | "card" | "cake" | "surprise" | "ending"

export default function BirthdayPage() {
  const [currentSection, setCurrentSection] = useState<Section>("landing")

  const navigateTo = (section: Section) => {
    setCurrentSection(section)
  }

  return (
    <AudioProvider>
      <main className="min-h-screen overflow-hidden">
        {currentSection === "landing" && <LandingScreen onEnter={() => navigateTo("intro")} />}
        {currentSection === "intro" && <IntroAnimation onContinue={() => navigateTo("quiz")} />}
        {currentSection === "quiz" && <QuizSection onComplete={() => navigateTo("memory")} />}
        {currentSection === "memory" && <MemoryGallery onContinue={() => navigateTo("games")} />}
        {currentSection === "games" && <MiniGames onComplete={() => navigateTo("card")} />}
        {currentSection === "card" && <BirthdayCard onContinue={() => navigateTo("cake")} />}
        {currentSection === "cake" && <CakeCeremony onComplete={() => navigateTo("surprise")} />}
        {currentSection === "surprise" && <FinalSurprise onContinue={() => navigateTo("ending")} />}
        {currentSection === "ending" && <EndingScreen />}
      </main>
    </AudioProvider>
  )
}
