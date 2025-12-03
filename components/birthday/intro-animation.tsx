"use client"

import { useEffect, useState, useRef } from "react"
import { HeartParticles } from "./heart-particles"
import { SparkleEffect } from "./sparkle-effect"
import { ArrowRight } from "lucide-react"

interface IntroAnimationProps {
  onContinue: () => void
}

export function IntroAnimation({ onContinue }: IntroAnimationProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentLine, setCurrentLine] = useState(0)
  const [showButton, setShowButton] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const lines = [
"Even though I can’t sit's beside you today…",
"I still wanted to make you feel my presence.",
"So I created a little world for you,",
"filled with our memories, love, and magical surprises."

  ]

  useEffect(() => {
    if (currentLine >= lines.length) {
      setTimeout(() => setShowButton(true), 500)
      return
    }

    const text = lines[currentLine]
    let charIndex = 0

    const typeInterval = setInterval(() => {
      if (charIndex <= text.length) {
        setDisplayedText(text.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typeInterval)
        setTimeout(() => {
          setCurrentLine((prev) => prev + 1)
          setDisplayedText("")
        }, 800)
      }
    }, 50)

    return () => clearInterval(typeInterval)
  }, [currentLine])

  const handleContinue = () => {
    setIsExiting(true)
    setTimeout(onContinue, 700)
  }

  return (
    <div
      ref={containerRef}
      className={`min-h-screen relative flex items-center justify-center overflow-hidden transition-opacity duration-700 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background: "linear-gradient(180deg, #fdf2f8 0%, #fce7f3 100%)",
      }}
    >
      <HeartParticles />
      <SparkleEffect />

      <div className="relative z-20 max-w-2xl mx-4 text-center">
        {/* Completed lines */}
        <div className="space-y-4 mb-6">
          {lines.slice(0, currentLine).map((line, index) => (
            <p
              key={index}
              className="font-serif text-2xl md:text-3xl text-foreground/80 leading-relaxed animate-in fade-in duration-500"
            >
              {line}
            </p>
          ))}
        </div>

        {/* Currently typing line */}
        {currentLine < lines.length && (
          <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed min-h-[2.5rem]">
            {displayedText}
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
          </p>
        )}

        {/* Continue button */}
        <div
          className={`mt-12 transition-all duration-700 ${
            showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <button
            onClick={handleContinue}
            className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            Take me in
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  )
}
