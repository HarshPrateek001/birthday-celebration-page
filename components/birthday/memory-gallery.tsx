"use client"

import type React from "react"
import { useState, useEffect, useCallback } from "react"
import { SparkleEffect } from "./sparkle-effect"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface MemoryGalleryProps {
  onContinue: () => void
}

interface Memory {
  id: number
  src: string
  caption: string
  subtitle?: string
}

const memories: Memory[] = [
  { id: 1, src: "/fromwe.jpg", caption: "The Beginning", subtitle: "Where our story started..." },
  { id: 2, src: "/bubu smile.jpg", caption: "Her smile? Dangerous weapon.", subtitle: "Still gets me every time" },
  { id: 3, src: "/First meet.jpg", caption: "The day my heart did a backflip.", subtitle: "I knew right then..." },
  { id: 4, src: "/Our smile.jpg", caption: "The day we laughed like idiots", subtitle: "For 30 minutes straight" },
  { id: 5, src: "/4.jpg", caption: "My safe place", subtitle: "Home is wherever you are" },
  { id: 6, src: "/5.jpg", caption: "Counting stars with you", subtitle: "Best nights of my life" },
  { id: 7, src: "/3.jpg", caption: "Every dance with you", subtitle: "Feels like floating" },
  { id: 8, src: "/6.jpg", caption: "Forever My Favorite Person", subtitle: "Yesterday, today, always" },
  { id: 9, src: "/1.jpg", caption: "The Life I cant Imagine", subtitle: "Yesterday, today, always" },
]

export function MemoryGallery({ onContinue }: MemoryGalleryProps) {
  const [isBookOpen, setIsBookOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)
  const [flipDirection, setFlipDirection] = useState<"next" | "prev" | null>(null)
  const [isExiting, setIsExiting] = useState(false)
  const [showHearts, setShowHearts] = useState(false)
  const [captionVisible, setCaptionVisible] = useState(false)
  const [isLastPage, setIsLastPage] = useState(false)

  const totalPages = memories.length

  useEffect(() => {
    if (isBookOpen && !isFlipping) {
      setCaptionVisible(false)
      const timer = setTimeout(() => setCaptionVisible(true), 300)
      return () => clearTimeout(timer)
    }
  }, [currentPage, isBookOpen, isFlipping])

  useEffect(() => {
    setIsLastPage(currentPage === totalPages - 1)
  }, [currentPage, totalPages])

  const openBook = () => {
    setIsBookOpen(true)
    setTimeout(() => setShowHearts(true), 700)
  }

  const flipPage = useCallback(
    (direction: "next" | "prev") => {
      if (isFlipping) return
      if (direction === "next" && currentPage >= totalPages - 1) return
      if (direction === "prev" && currentPage <= 0) return

      setIsFlipping(true)
      setFlipDirection(direction)
      setShowHearts(true)

      setTimeout(() => {
        setCurrentPage((prev) => (direction === "next" ? prev + 1 : prev - 1))
        setIsFlipping(false)
        setFlipDirection(null)
        setTimeout(() => setShowHearts(false), 900)
      }, 620)
    },
    [isFlipping, currentPage, totalPages],
  )

  const handleContinue = () => {
    setIsExiting(true)
    setTimeout(onContinue, 700)
  }

  const [touchStart, setTouchStart] = useState<number | null>(null)
  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.touches[0].clientX)
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd

    if (Math.abs(diff) > 50) {
      diff > 0 ? flipPage("next") : flipPage("prev")
    }
    setTouchStart(null)
  }

  const currentMemory = memories[currentPage]

  return (
    <div
      className={`min-h-screen relative flex flex-col items-center justify-center overflow-hidden transition-opacity duration-700 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background: "linear-gradient(180deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)",
      }}
    >
      <SparkleEffect />

      {showHearts && isBookOpen && (
        <div className="fixed inset-0 pointer-events-none z-30">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute text-pink-400 animate-float-heart"
              style={{
                left: `${20 + Math.random() * 60}%`,
                bottom: "30%",
                animationDelay: `${i * 0.1}s`,
                fontSize: `${12 + Math.random() * 16}px`,
              }}
            >
              ❤
            </div>
          ))}
        </div>
      )}

      <div className="relative z-20 w-full max-w-[900px] px-4 py-8">
        {!isBookOpen && (
          <div className="flex flex-col items-center justify-center animate-fade-in">
            <div
              onClick={openBook}
              className="relative cursor-pointer transform hover:scale-105 transition-all duration-500 group"
              style={{ perspective: "1000px" }}
            >
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-8 bg-black/20 rounded-full blur-xl" />

              <div
                className="relative w-[88vw] max-w-[350px] h-[70vh] max-h-[550px] rounded-r-lg rounded-l-sm overflow-hidden group-hover:rotate-y-[-5deg] transition-transform duration-500"
                style={{
                  background: "linear-gradient(135deg, #fecdd3 0%, #fda4af 50%, #fb7185 100%)",
                  boxShadow: "8px 8px 20px rgba(0,0,0,0.3), inset -3px 0 10px rgba(0,0,0,0.1)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="absolute left-0 top-0 bottom-0 w-6"
                  style={{
                    background: "linear-gradient(90deg, #f43f5e 0%, #fb7185 100%)",
                    boxShadow: "inset -2px 0 5px rgba(0,0,0,0.2)",
                  }}
                />

                <div className="absolute inset-4 left-8 border-2 border-white/30 rounded-lg" />

                <div className="absolute top-8 left-1/2 -translate-x-1/2 text-white/80 text-5xl animate-pulse-soft">
                  ❤
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
                  <h2
                    className="text-white text-2xl md:text-3xl mb-2 drop-shadow-lg"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Our Memory Book
                  </h2>
                  <p className="text-white/80 text-sm">A collection of us</p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-foreground/70 text-lg animate-pulse-soft">Tap to open your Memory Book</p>
          </div>
        )}

        {isBookOpen && (
          <div
            className="animate-book-open"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="relative mx-auto"
              style={{
                perspective: "2000px",
                maxWidth: "820px",
              }}
            >
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-10 bg-black/25 rounded-full blur-2xl" />

              {/* OPEN BOOK */}
              <div className="relative flex" style={{ transformStyle: "preserve-3d" }}>
                
                {/* LEFT PAGE */}
                <div
                  className="w-1/2 aspect-[3/4] rounded-l-lg overflow-hidden relative page"
                  style={{
                    background: "linear-gradient(90deg, #fef3e2 0%, #fefce8 100%)",
                    boxShadow: "inset 5px 0 15px rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="relative h-full p-4 md:p-6 flex flex-col">
                    <div className="text-center text-pink-400/60 text-xs mb-2">
                      Page {currentPage + 1}
                    </div>

                    <div className="flex-1 border border-pink-200/50 rounded-lg p-3 flex flex-col items-center justify-center">
                      <div
                        className="bg-white p-2 pb-8 shadow-lg transform -rotate-2 max-w-[90%] w-full aspect-square"
                        style={{ boxShadow: "3px 3px 10px rgba(0,0,0,0.15)" }}
                      >
                        <div className="relative w-full h-full overflow-hidden rounded">
                          <Image
                            src={currentMemory.src}
                            alt={currentMemory.caption}
                            fill
                            className="object-contain"
                            sizes="80vw"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SPINE */}
                <div
                  className="w-4 relative z-10"
                  style={{
                    background: "linear-gradient(90deg, #d4a574 0%, #c9956c 50%, #d4a574 100%)",
                  }}
                />

                {/* RIGHT PAGE */}
                <div
                  className={`w-1/2 aspect-[3/4] rounded-r-lg overflow-hidden relative page ${
                    isFlipping && flipDirection === "next" ? "animate-page-flip-next" : ""
                  } ${isFlipping && flipDirection === "prev" ? "animate-page-flip-prev" : ""}`}
                  style={{
                    background: "linear-gradient(270deg, #fef3e2 0%, #fefce8 100%)",
                    transformOrigin: "left center",
                  }}
                >
                  <div className="relative h-full p-4 md:p-6 flex flex-col items-center justify-center text-center">
                    <div
                      className={`transition-all duration-700 ${
                        captionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                    >
                      <h3
                        className="text-xl md:text-2xl text-pink-700 mb-3"
                        style={{ fontFamily: "'Caveat', cursive" }}
                      >
                        "{currentMemory.caption}"
                      </h3>

                      {currentMemory.subtitle && (
                        <p
                          className="text-pink-500/80 text-base md:text-lg italic"
                          style={{ fontFamily: "'Caveat', cursive" }}
                        >
                          {currentMemory.subtitle}
                        </p>
                      )}
                    </div>

                    <div className="mt-6 text-pink-300 text-3xl">∿∿∿</div>

                    <div className="absolute bottom-8 right-4 w-16 h-16 flex items-center justify-center transform rotate-6"
                      style={{
                        background: "linear-gradient(135deg, #fef08a 0%, #fde047 100%)",
                      }}
                    >
                      <span className="text-2xl">💕</span>
                    </div>

                    <div className="text-center text-pink-400/60 text-xs absolute bottom-2">
                      {currentPage + 1} of {totalPages}
                    </div>
                  </div>
                </div>

              </div>

              {/* ARROWS */}
              <button
                onClick={() => flipPage("prev")}
                disabled={currentPage === 0 || isFlipping}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-md hover:scale-110 disabled:opacity-30"
              >
                <ChevronLeft className="w-5 h-5 text-pink-600" />
              </button>

              <button
                onClick={() => flipPage("next")}
                disabled={currentPage === totalPages - 1 || isFlipping}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-md hover:scale-110 disabled:opacity-30"
              >
                <ChevronRight className="w-5 h-5 text-pink-600" />
              </button>

            </div>

            <div className="flex justify-center gap-2 mt-6">
              {memories.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentPage ? "bg-pink-500 w-4" : index < currentPage ? "bg-pink-300" : "bg-pink-200"
                  }`}
                />
              ))}
            </div>

            {isLastPage && (
              <div className="mt-8 text-center animate-fade-in">
                <p
                  className="text-pink-700 text-lg md:text-xl mb-6 px-4"
                  style={{ fontFamily: "'Caveat', cursive" }}
                >
                  "Thank you for creating these beautiful memories with me.
                  <br />
                  More pages will be added… with every moment we share."
                </p>

                <button
                  onClick={handleContinue}
                  className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full font-semibold text-lg shadow-lg hover:scale-105 transition-all flex items-center gap-3 mx-auto"
                >
                  Let's Play Some Games
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1" />
                </button>
              </div>
            )}

          </div>
        )}
      </div>

      {/* GLOBAL STYLES */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Playfair+Display:wght@500;700&display=swap');

        @keyframes float-heart {
          0% { transform: translateY(0) scale(1); opacity: 1; }
          100% { transform: translateY(-150px) scale(0.6); opacity: 0; }
        }

        .animate-float-heart { animation: float-heart 2s ease-out forwards; }

        @keyframes book-open {
          0% { transform: scale(0.85) rotateY(-30deg); opacity: 0; }
          100% { transform: scale(1) rotateY(0deg); opacity: 1; }
        }
        .animate-book-open { animation: book-open 0.8s ease-out forwards; }

        @keyframes page-flip-next {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(-92deg); }
          100% { transform: rotateY(0deg); }
        }
        @keyframes page-flip-prev {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(92deg); }
          100% { transform: rotateY(0deg); }
        }

        .animate-page-flip-next { animation: page-flip-next 0.62s ease forwards; transform-origin: left center; }
        .animate-page-flip-prev { animation: page-flip-prev 0.62s ease forwards; transform-origin: left center; }

        .animate-fade-in { animation: fadeIn 0.6s ease-out both; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-pulse-soft { animation: pulseSoft 2s ease-in-out infinite; }
        @keyframes pulseSoft {
          0% { opacity: 0.85; }
          50% { opacity: 1; }
          100% { opacity: 0.85; }
        }

        @media (max-width: 640px) {
          .page { transform-origin: center; }
        }
      `}</style>
    </div>
  )
}
