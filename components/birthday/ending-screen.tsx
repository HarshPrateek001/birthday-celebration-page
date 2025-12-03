"use client"

import { useState, useEffect } from "react"
import { SparkleEffect } from "./sparkle-effect"
import { HeartParticles } from "./heart-particles"
import { FloatingBalloons } from "./floating-balloons"
import { Heart, Download, FileText } from "lucide-react"

export function EndingScreen() {
  const [isVisible, setIsVisible] = useState(false)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300)
  }, [])

  return (
    <div
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)",
      }}
    >
      <FloatingBalloons />
      <HeartParticles />
      <SparkleEffect />

      <div
        className={`relative z-20 max-w-lg mx-4 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="glass-card rounded-3xl p-8 md:p-12">
          {/* Decorative hearts */}
          <div className="flex justify-center gap-3 mb-6">
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="w-6 h-6 text-primary fill-primary animate-float"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>

          <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight text-balance">
            You&apos;re the brightest part of my life.
          </h1>

          <p className="text-lg text-muted-foreground mb-4">Thank you for being you.</p>

          <p className="text-2xl font-serif text-primary mb-8">Happy 23rd Birthday, my love.</p>

          {/* Action buttons */}
          <div className="space-y-4">

            {/* Download Birthday Wallpaper */}
            <a
              href="/birthday-wallpaper.jpg"
              download="Happy-Birthday-Wallpaper.png"
              className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-2xl font-medium text-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
            >
              <Download className="w-5 h-5" />
              Download Birthday Wallpaper
            </a>

            {/* Read My Love Letter */}
            <button
              onClick={() => setShowPopup(true)}
              className="w-full px-6 py-4 bg-secondary text-secondary-foreground rounded-2xl font-medium text-lg hover:bg-secondary/80 transition-colors flex items-center justify-center gap-3"
            >
              <FileText className="w-5 h-5" />
              Read My Love Letter
            </button>
          </div>

          {/* Final heart animation */}
          <div className="mt-8 flex justify-center">
            <div className="relative">
              <Heart
                className="w-16 h-16 text-primary fill-primary animate-pulse"
                style={{ filter: "drop-shadow(0 0 20px rgba(236, 72, 153, 0.5))" }}
              />
              <div className="absolute inset-0 animate-ping">
                <Heart className="w-16 h-16 text-primary/30 fill-primary/30" />
              </div>
            </div>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">Made with all my love, just for you</p>
        </div>
      </div>

      {/* POPUP - Funny Love Letter Intro */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-[999]">
          <div
            className="bg-white rounded-3xl p-8 w-[85%] max-w-md text-center shadow-2xl animate-scaleIn"
            style={{
              background: "rgba(255, 240, 245, 0.95)",
              boxShadow: "0 10px 50px rgba(236,72,153,0.25)"
            }}
          >
            <h2 className="text-2xl font-semibold text-pink-700 mb-4">
              Arey bubu jaan… 💖
            </h2>

            <p className="text-pink-600 leading-relaxed text-lg">
              Kitne badmaash ho tum…  
              itna pyaar bhara letter padhna chahte ho?  
              Mela Podu, mera rasmalai, rasgulaa 😌💗
            </p>

            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={() => setShowPopup(false)}
                className="px-6 py-3 rounded-xl bg-gray-300 text-gray-800 font-medium hover:bg-gray-400 transition"
              >
                Cancel
              </button>

              <button
                
                className="px-6 py-3 rounded-xl bg-pink-500 text-white font-medium hover:bg-pink-600 transition shadow-lg"
              >
                Choo Abb Sooo Ja 💌
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Popup animation */}
      <style jsx>{`
        @keyframes scaleIn {
          0% { transform: scale(0.7); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-scaleIn {
          animation: scaleIn 0.25s ease-out forwards;
        }
      `}</style>

    </div>
  )
}
