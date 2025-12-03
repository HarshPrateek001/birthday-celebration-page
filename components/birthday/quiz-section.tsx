"use client"

import { useState } from "react"
import { SparkleEffect } from "./sparkle-effect"
import { Heart, ArrowRight, CheckCircle2 } from "lucide-react"

interface QuizSectionProps {
  onComplete: () => void
}

interface Question {
  question: string
  options: string[]
  correctIndex: number
  response: string
}

const questions: Question[] = [
  {
    question: "First thing that made me fall for you?",
    options: ["Your smile", "Your eyes", "Your laugh", "Everything"],
    correctIndex: 3,
    response: "Correct! It was literally everything about you.",
  },
  {
    question: "Our favorite thing to do together?",
    options: ["Watch movies", "Long talks", "Adventures", "Just being together"],
    correctIndex: 1,
    response: "Yes! Nothing beats just being with you.",
  },
  {
    question: "What do I love most about you?",
    options: ["Your kindness", "Your strength", "Your heart", "All of the above"],
    correctIndex: 3,
    response: "Obviously all of the above! How could I choose?",
  },
  {
  question: "What do I miss the most?",
  options: ["Your smile","The time I spent with you", "Your voice", "Your messages"],
  correctIndex: 1,
  response: "Of course… I miss every moment I spent with you the most.",
   },
   {
  question: "What do I love the most when you cook for me?",
  options: ["Fancy dishes", "Spicy food", "Street-style snacks", "Simple food (Rice, Dal, and Bhaja)"],
  correctIndex: 3,
  response: "Your simple home-cooked food… Rice, Dal, and Bhaja… it always hits differently.",
   },


]

export function QuizSection({ onComplete }: QuizSectionProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResponse, setShowResponse] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; x: number; y: number }[]>([])
  const [error, setError] = useState<string | null>(null)

  const handleSelect = (index: number) => {
    // Prevent double selection
    if (selectedAnswer !== null) return

    const q = questions[currentQuestion]

    // WRONG OPTION CLICKED
    if (index !== q.correctIndex) {
      setError("Galat jawab hai ❤️")

      const wrongBtn = document.getElementById(`option-${index}`)
      wrongBtn?.classList.add("wrong-flash")

      setTimeout(() => {
        wrongBtn?.classList.remove("wrong-flash")
      }, 600)

      return
    }

    // CORRECT ANSWER
    setSelectedAnswer(index)
    setShowResponse(true)
    setError(null)

    const newHearts = Array.from({ length: 5 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: Math.random() * 20 + 80,
    }))
    setFloatingHearts(newHearts)

    setTimeout(() => {
      setFloatingHearts([])
    }, 2000)
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
      setSelectedAnswer(null)
      setShowResponse(false)
      setError(null)
    } else {
      setIsExiting(true)
      setTimeout(onComplete, 700)
    }
  }

  const question = questions[currentQuestion]

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

      {/* Floating hearts */}
      {floatingHearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute pointer-events-none z-30"
          style={{
            left: `${heart.x}%`,
            bottom: `${heart.y}%`,
            animation: "heart-float 2s ease-out forwards",
          }}
        >
          <Heart className="w-6 h-6 text-primary fill-primary" />
        </div>
      ))}

      <div className="relative z-20 max-w-xl mx-4 w-full">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <div className="flex gap-1">
              {questions.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    i <= currentQuestion ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="glass-card rounded-3xl p-8 shadow-xl">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground text-center mb-8">
            {question.question}
          </h2>

          <div className="grid gap-4">
            {question.options.map((option, index) => (
              <button
                id={`option-${index}`}
                key={index}
                onClick={() => handleSelect(index)}
                disabled={selectedAnswer !== null}
                className={`p-4 rounded-2xl text-left font-medium text-lg transition-all duration-300 border-2 ${
                  selectedAnswer === null
                    ? "bg-card hover:bg-secondary hover:border-primary hover:scale-[1.02] border-border"
                    : selectedAnswer === index
                    ? index === question.correctIndex
                      ? "bg-primary/20 border-primary"
                      : "bg-accent/30 border-accent"
                    : "bg-muted/50 border-transparent opacity-50"
                }`}
              >
                <div className="flex items-center gap-3">
                  {selectedAnswer === index && index === question.correctIndex && (
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  )}
                  <span className="text-card-foreground">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* ERROR MESSAGE */}
          {error && (
            <p className="text-center text-red-500 font-semibold mt-4 animate-pulse">
              {error}
            </p>
          )}

          {/* Response */}
          <div
            className={`mt-6 transition-all duration-500 ${
              showResponse ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-center text-primary font-medium text-lg">{question.response}</p>
          </div>
        </div>

        {/* Next button */}
        <div
          className={`mt-8 flex justify-center transition-all duration-500 ${
            showResponse ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <button
            onClick={handleNext}
            className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            {currentQuestion < questions.length - 1 ? "Next Question" : "Continue"}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  )
}
