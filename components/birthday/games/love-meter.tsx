"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowLeft, Heart } from "lucide-react"

interface LoveMeterProps {
  onComplete: () => void
  onBack: () => void
}

export function LoveMeter({ onComplete, onBack }: LoveMeterProps) {
  const [value, setValue] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [hearts, setHearts] = useState<{ id: number; x: number; delay: number }[]>([])
  const [emoji, setEmoji] = useState("😊")
  const containerRef = useRef<HTMLDivElement>(null)

  // Romantic emojis based on % love
  const getEmoji = (v: number) => {
    if (v < 20) return "🥺"
    if (v < 40) return "😊"
    if (v < 60) return "😳"
    if (v < 80) return "🥰"
    if (v < 100) return "❤️‍🔥"
    return "💖"
  }

  const getMessage = () => {
    if (value < 25) return "Keep going, baby..."
    if (value < 50) return "Now it’s getting warm…"
    if (value < 75) return "You’re making my heart race…"
    if (value < 100) return "Almost overflowing…"
    return "My heart is yours completely."
  }

  useEffect(() => {
    setEmoji(getEmoji(value))

    // Heart burst effect every 10%
    if (value % 10 === 0 && value !== 0) {
      const burst = Array.from({ length: 12 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        delay: Math.random() * 0.5,
      }))
      setHearts(burst)
      setTimeout(() => setHearts([]), 2000)
    }

    if (value >= 100 && !isComplete) {
      setIsComplete(true)

      const finalBurst = Array.from({ length: 30 }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * 100,
        delay: Math.random() * 0.5,
      }))
      setHearts(finalBurst)
    }
  }, [value, isComplete])

  return (
    <div ref={containerRef} className="text-center relative min-h-screen flex flex-col items-center pt-16">

      {/* BACK BUTTON */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </button>

      {/* HEART BURSTS */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-40 pointer-events-none z-30"
          style={{
            left: `${heart.x}%`,
            animation: `heartFloat 2.2s ease-out ${heart.delay}s forwards`
          }}
        >
          <Heart className="w-7 h-7 text-pink-500 fill-pink-500" />
        </div>
      ))}

      {/* TITLE */}
      <h2 className="font-serif text-4xl text-primary mb-2">Love Meter</h2>
      <p className="text-muted-foreground mb-8 text-lg">Slide to measure my love for you ❤️</p>

      {/* MAIN CARD */}
      <div className="glass-card rounded-3xl p-8 max-w-md w-full mx-auto">

        {/* PERCENTAGE */}
        <div className="mb-6">
          <div className="text-6xl font-bold text-primary mb-2 animate-softPulse">
            {value}%
          </div>

          <div className="text-4xl mb-2 animate-emojiPop">
            {emoji}
          </div>

          <p className="text-lg text-foreground font-medium italic transition-all duration-300">
            {getMessage()}
          </p>
        </div>

        {/* HEART (liquid filling) */}
<div className="relative w-40 h-40 mx-auto mb-8">

  {/* Base heart outline */}
  <Heart
    className="absolute inset-0 w-full h-full text-primary"
    style={{
      fill: `rgba(236, 72, 153, ${value / 100})`,
      filter: value === 100 ? "drop-shadow(0 0 20px rgba(236,72,153,0.9))" : "none",
      transform: `scale(${1 + value * 0.003})`,
      transition: "0.3s ease"
    }}
  />

  {/* Liquid fill */}
  <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
    <div
      className="w-[70%] bg-pink-400/50 transition-all duration-700"
      style={{
        height: `${value}%`,
        WebkitMask: "url('/heart-mask.svg') center/contain no-repeat",
        mask: "url('/heart-mask.svg') center/contain no-repeat",
      }}
    ></div>
  </div>

</div>


        {/* SLIDER */}
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-full h-3 bg-muted rounded-full appearance-none cursor-pointer accent-primary"
            style={{
              background: `linear-gradient(to right, #ec4899 0%, #ec4899 ${value}%, var(--muted) ${value}%)`
            }}
          />

          <div className="flex justify-between text-sm text-muted-foreground px-1">
            <span>0%</span>
            <span>Infinite 💘</span>
          </div>
        </div>
      </div>

      {/* COMPLETION SCREEN */}
      {isComplete && (
        <div className="mt-10 animate-fadePop">
          <p className="text-primary font-semibold text-xl mb-4">
            My love for you is beyond all numbers ❤️
          </p>

          <button
            onClick={onComplete}
            className="px-10 py-4 bg-primary text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Continue
          </button>
        </div>
      )}

      {/* ANIMATIONS */}
      <style jsx global>{`
        @keyframes heartFloat {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-140px) scale(0.6); opacity: 0; }
        }

        .animate-softPulse {
          animation: softPulse 1.3s infinite ease-in-out;
        }
        @keyframes softPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .animate-emojiPop {
          animation: emojiPop 0.6s ease-out;
        }
        @keyframes emojiPop {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .animate-fadePop {
          animation: fadePop 0.7s ease-out forwards;
        }
        @keyframes fadePop {
          0% { transform: scale(0.9) translateY(10px); opacity: 0; }
          100% { transform: scale(1) translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  )
}
