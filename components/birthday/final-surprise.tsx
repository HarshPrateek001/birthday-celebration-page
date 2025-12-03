"use client"

import { useState } from "react"
import { SparkleEffect } from "./sparkle-effect"
import { Play, ArrowRight } from "lucide-react"

interface FinalSurpriseProps {
  onContinue: () => void
}

export function FinalSurprise({ onContinue }: FinalSurpriseProps) {
  const [showVideo, setShowVideo] = useState(false)
  const [isExiting, setIsExiting] = useState(false)

  const handleContinue = () => {
    setIsExiting(true)
    setTimeout(onContinue, 700)
  }

  // Local video (public/myvideo.mp4)
  const videoUrl = "/my-video.mp4"   // <-- Yahin apna exact file name daalna

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

      <div className="relative z-20 max-w-lg mx-4 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Surprise Chamber</h2>
        <p className="text-muted-foreground text-lg mb-8">A special message, just for you</p>

        <div className="glass-card rounded-3xl p-8">
          {!showVideo ? (
            <>
              {/* Fake QR Code Box */}
              <div className="mb-6">
                <div className="w-48 h-48 mx-auto bg-card rounded-2xl flex items-center justify-center border-4 border-primary/20 relative overflow-hidden">

                  {/* Scan Frame Animation */}
                  <div
                    className="absolute inset-0 border-4 border-primary rounded-lg"
                    style={{ animation: "pulse 2s ease-in-out infinite" }}
                  />

                  {/* QR Decoration Blocks */}
                  <div className="grid grid-cols-5 gap-1 p-4">
                    {[...Array(25)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-6 h-6 rounded-sm ${
                          Math.random() > 0.3 ? "bg-foreground" : "bg-transparent"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-4">Point your camera at the QR code</p>
              </div>

              {/* Divider */}
              <div className="relative py-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-card px-4 text-muted-foreground text-sm">or</span>
                </div>
              </div>

              {/* PLAY VIDEO BUTTON */}
              <button
                onClick={() => setShowVideo(true)}
                className="group w-full px-6 py-4 bg-secondary text-secondary-foreground rounded-2xl font-medium text-lg 
                hover:bg-secondary/80 transition-colors flex items-center justify-center gap-3"
              >
                <Play className="w-5 h-5" />
                Tap to play video
              </button>
            </>
          ) : (
            <>
              {/* LOCAL VIDEO PLAYER */}
              <div className="aspect-video rounded-2xl overflow-hidden bg-foreground/10 mb-6 shadow-xl">
                <video
                  src={videoUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Continue Button */}
              <button
                onClick={handleContinue}
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-lg 
                hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                Continue
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
