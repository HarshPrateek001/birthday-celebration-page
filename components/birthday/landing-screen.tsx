"use client"

import { useEffect, useRef, useState } from "react"
import { FloatingBalloons } from "./floating-balloons"
import { SparkleEffect } from "./sparkle-effect"
import { Heart } from "lucide-react"

interface LandingScreenProps {
  onEnter: () => void
}

export function LandingScreen({ onEnter }: LandingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // GSAP-style entrance animation using CSS
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const handleEnter = () => {
    setIsExiting(true)
    setTimeout(onEnter, 800)
  }

  return (
    <div
      ref={containerRef}
      className={`min-h-screen relative flex items-center justify-center overflow-hidden transition-opacity duration-700 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)",
      }}
    >
      <FloatingBalloons />
      <SparkleEffect />

      {/* Shimmer background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 animate-spin"
          style={{
            background: "conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.1) 60deg, transparent 120deg)",
            animationDuration: "20s",
          }}
        />
      </div>

      {/* Glass card */}
      <div
        ref={cardRef}
        className={`relative z-20 glass-card rounded-3xl p-8 md:p-12 max-w-lg mx-4 text-center transform transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-10 opacity-0 scale-95"
        }`}
        style={{
          boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.25)",
        }}
      >
        {/* Decorative hearts */}
        <div className="absolute -top-4 -left-4 text-primary opacity-60 animate-float">
          <Heart className="w-8 h-8 fill-current" />
        </div>
        <div
          className="absolute -top-2 -right-6 text-primary opacity-40 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <Heart className="w-6 h-6 fill-current" />
        </div>
        <div
          className="absolute -bottom-3 -right-4 text-primary opacity-50 animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <Heart className="w-7 h-7 fill-current" />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center animate-pulse-glow">
              <Heart className="w-10 h-10 text-primary fill-primary" />
            </div>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-tight text-balance">
            Welcome to Your Birthday Room
          </h1>

          <p className="text-muted-foreground text-lg leading-relaxed">
            A little world made only for you... tap to enter.
          </p>

          <button
            ref={buttonRef}
            onClick={handleEnter}
            className="mt-6 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse-glow"
          >
            Enter Your Surprise
          </button>
        </div>
      </div>
    </div>
  )
}
