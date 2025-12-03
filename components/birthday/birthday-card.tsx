"use client"

import { useState } from "react"
import { SparkleEffect } from "./sparkle-effect"
import { Heart, ArrowRight } from "lucide-react"

interface BirthdayCardProps {
  onContinue: () => void
}

export function BirthdayCard({ onContinue }: BirthdayCardProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [showMessage, setShowMessage] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  const handleOpenCard = () => {
    setIsOpen(true)
    setTimeout(() => setShowMessage(true), 800)
  }

  const handleContinue = () => {
    setIsExiting(true)
    setTimeout(onContinue, 700)
  }

  return (
    <div
      className={`min-h-screen relative flex items-center justify-center overflow-hidden transition-opacity duration-700 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background: "linear-gradient(180deg, #fdf2f8 0%, #fce7f3 100%)",
      }}
    >
      <SparkleEffect />

      <div className="relative z-20 max-w-lg mx-4 perspective-1000">
        {!isOpen ? (
          // Closed card
          <div
            onClick={handleOpenCard}
            className="glass-card rounded-3xl p-12 cursor-pointer hover:scale-105 transition-transform duration-300 text-center"
            style={{ boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.25)" }}
          >
            <div className="w-24 h-24 mx-auto mb-6 bg-primary/20 rounded-full flex items-center justify-center">
              <Heart className="w-12 h-12 text-primary fill-primary animate-pulse" />
            </div>
            <h2 className="font-serif text-2xl text-foreground mb-4">A Special Card For You</h2>
            <p className="text-muted-foreground">Tap to open</p>
          </div>
        ) : (
          // Opened card with 3D effect
          <div className="relative">
            {/* Card back (left side) */}
            <div
              className="glass-card rounded-3xl p-8 transform origin-right transition-all duration-1000"
              style={{
                transform: isOpen ? "rotateY(-160deg)" : "rotateY(0)",
                backfaceVisibility: "hidden",
                position: "absolute",
                inset: 0,
                zIndex: showMessage ? 0 : 10,
              }}
            >
              <div className="text-center">
                <Heart className="w-16 h-16 mx-auto text-primary fill-primary" />
              </div>
            </div>

            {/* Card front (message) */}
            <div
              className={`glass-card rounded-3xl p-8 transition-all duration-500 ${
                showMessage ? "opacity-100" : "opacity-0"
              }`}
              style={{ boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.3)" }}
            >
              <div className="text-center space-y-6">
                {/* Decorative hearts */}
                <div className="flex justify-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Heart
                      key={i}
                      className="w-4 h-4 text-primary fill-primary animate-float"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>

                <h2 className="font-serif text-3xl text-foreground mb-4">
  Happy 23rd Birthday, Bubu Jaan ❤️
</h2>

<div className="space-y-4 text-foreground leading-relaxed">

  <p>To the most precious part of my life,</p>

  <p>
    Even from miles away, tumhari yaad mere din ko chalati hai.
    Tumhari hasi, tumhari awaaz, aur tumhara naam —
    sab mere liye ek sukoon jaisa hai.
    Aaj tumhara birthday hai… aur kaash main wahin hota,
    tumhare saath, tumhari aankhon ki woh khushi dekhne ke liye.
  </p>

  <p>
    Hum dono ke beech jo bhi up & downs aaye,
    un sabke baad bhi tum meri zindagi ki woh jagah ho
    jise koi replace nahi kar sakta.
    Tum sirf meri love nahi ho —
    tum meri strength ho, mera comfort ho,
    aur mere har kal ka sabse khoobsurat hissa ho.
  </p>

  <p>
    Distance hoke bhi tumhari kami har moment mehsoos hoti hai,
    par pyaar kabhi kam nahi hota —
    bas aur gehra hota jaata hai.
    Aur mera tumhare liye pyaar…
    woh waise hi hai — pure, honest aur dil se.
  </p>

  <p className="font-medium text-primary">
    Aaj ke din bas ek hi wish hai —
    khuda tumhe woh sab de jiske tum sapne dekhti ho,
    aur mujhe itni taqat de ki main hamesha tumhari zindagi mein
    garv ban kar khada rahun.
  </p>

  <p>
    Happy Birthday, My Moon, My Bubu Jaan ❤️.  
    I love you — more than distance, more than doubt, more than anything.
  </p>

</div>

<div className="pt-4">
  <p className="font-serif text-xl text-primary italic">
    Forever yours.
  </p>
</div>


                <div className="flex justify-center gap-2 pt-4">
                  {[...Array(5)].map((_, i) => (
                    <Heart
                      key={i}
                      className="w-4 h-4 text-primary fill-primary animate-float"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {showMessage && (
          <div className="mt-8 flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button
              onClick={handleContinue}
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              Time For Cake!
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
