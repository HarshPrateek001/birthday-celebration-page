"use client"

import { useState } from "react"
import { SparkleEffect } from "./sparkle-effect"
import { PuzzleGame } from "./games/puzzle-game"
import { LoveMeter } from "./games/love-meter"
import { MemoryGuess } from "./games/memory-guess"
import { ArrowRight, Puzzle, Heart, ImageIcon } from "lucide-react"

interface MiniGamesProps {
  onComplete: () => void
}

type GameType = "select" | "puzzle" | "love-meter" | "memory-guess" | "complete"

export function MiniGames({ onComplete }: MiniGamesProps) {
  const [currentGame, setCurrentGame] = useState<GameType>("select")
  const [completedGames, setCompletedGames] = useState<Set<string>>(new Set())
  const [isExiting, setIsExiting] = useState(false)

  const handleGameComplete = (game: string) => {
    setCompletedGames((prev) => new Set([...prev, game]))
    setCurrentGame("select")
  }

  const handleContinue = () => {
    setIsExiting(true)
    setTimeout(onComplete, 700)
  }

  const allGamesCompleted = completedGames.size >= 3

  return (
    <div
      className={`min-h-screen relative flex items-center justify-center overflow-hidden transition-opacity duration-700 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background: "linear-gradient(135deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)",
      }}
    >
      <SparkleEffect />

      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 py-8">
        {currentGame === "select" && (
          <div className="text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Mini Games</h2>
            <p className="text-muted-foreground text-lg mb-8">
              {allGamesCompleted
                ? "You completed all games! Ready for your birthday card?"
                : "Complete all games to unlock your special surprise!"}
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Puzzle Game */}
              <button
                onClick={() => setCurrentGame("puzzle")}
                disabled={completedGames.has("puzzle")}
                className={`glass-card rounded-3xl p-6 text-center transition-all duration-300 ${
                  completedGames.has("puzzle") ? "opacity-50 cursor-not-allowed" : "hover:scale-105 hover:shadow-xl"
                }`}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <Puzzle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Puzzle Reveal</h3>
                <p className="text-sm text-muted-foreground">
                  {completedGames.has("puzzle") ? "Completed!" : "Piece together the photo"}
                </p>
              </button>

              {/* Love Meter */}
              <button
                onClick={() => setCurrentGame("love-meter")}
                disabled={completedGames.has("love-meter")}
                className={`glass-card rounded-3xl p-6 text-center transition-all duration-300 ${
                  completedGames.has("love-meter") ? "opacity-50 cursor-not-allowed" : "hover:scale-105 hover:shadow-xl"
                }`}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Love Meter</h3>
                <p className="text-sm text-muted-foreground">
                  {completedGames.has("love-meter") ? "Completed!" : "How much do I love you?"}
                </p>
              </button>

              {/* Memory Guess */}
              <button
                onClick={() => setCurrentGame("memory-guess")}
                disabled={completedGames.has("memory-guess")}
                className={`glass-card rounded-3xl p-6 text-center transition-all duration-300 ${
                  completedGames.has("memory-guess")
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:scale-105 hover:shadow-xl"
                }`}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <ImageIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Guess the Memory</h3>
                <p className="text-sm text-muted-foreground">
                  {completedGames.has("memory-guess") ? "Completed!" : "Reveal hidden memories"}
                </p>
              </button>
            </div>

            {allGamesCompleted && (
              <button
                onClick={handleContinue}
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                Open Birthday Card
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        )}

        {currentGame === "puzzle" && (
          <PuzzleGame onComplete={() => handleGameComplete("puzzle")} onBack={() => setCurrentGame("select")} />
        )}

        {currentGame === "love-meter" && (
          <LoveMeter onComplete={() => handleGameComplete("love-meter")} onBack={() => setCurrentGame("select")} />
        )}

        {currentGame === "memory-guess" && (
          <MemoryGuess onComplete={() => handleGameComplete("memory-guess")} onBack={() => setCurrentGame("select")} />
        )}
      </div>
    </div>
  )
}
