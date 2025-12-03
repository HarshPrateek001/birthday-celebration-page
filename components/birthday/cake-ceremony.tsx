// ⚡ FULL OPTIMIZED VERSION — NO DESIGN CHANGE ⚡

"use client"

import type React from "react"
import { useState, useRef, useEffect, useCallback, useMemo } from "react"
import { SparkleEffect } from "./sparkle-effect"

interface CakeCeremonyProps {
  onComplete: () => void
}

interface Confetti {
  id: number
  x: number
  y: number
  color: string
  rotation: number
  size: number
  velocityX: number
  velocityY: number
  borderRadius: string
}

interface Crumb {
  id: number
  x: number
  y: number
  size: number
  rotation: number
}

export function CakeCeremony({ onComplete }: CakeCeremonyProps) {
  const [stage, setStage] = useState<"cutting" | "blowing" | "celebration">("cutting")

  // Knife state
  const [knifePosition, setKnifePosition] = useState({ x: 50, y: 20 })
  const [knifeRotation, setKnifeRotation] = useState(-45)
  const [isDragging, setIsDragging] = useState(false)
  const [cutProgress, setCutProgress] = useState(0)

  // Cake state
  const [isCut, setIsCut] = useState(false)
  const [showSliceLine, setShowSliceLine] = useState(false)
  const [cakeShake, setCakeShake] = useState(false)

  // Candle state
  const [candlesLit, setCandlesLit] = useState(true)
  const [flameIntensity, setFlameIntensity] = useState([1, 1, 1])
  const [flameTilt, setFlameTilt] = useState([0, 0, 0])
  const [showSmoke, setShowSmoke] = useState([false, false, false])
  const [candlesBlown, setCandlesBlown] = useState([false, false, false])

  // Effects
  const [confetti, setConfetti] = useState<Confetti[]>([])
  const [crumbs, setCrumbs] = useState<Crumb[]>([])
  const [showMessage, setShowMessage] = useState("")
  const [isExiting, setIsExiting] = useState(false)

  // Mic
  const [micPermission, setMicPermission] = useState<"pending" | "granted" | "denied">("pending")
  const audioContextRef = useRef<AudioContext | null>(null)
  const analyserRef = useRef<AnalyserNode | null>(null)
  const animationFrameRef = useRef<number | null>(null)

  // Refs
  const cakeRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const startXRef = useRef<number>(0)
  const hasCutRef = useRef(false)

  // 🌟 Precomputed BACKGROUND CONFETTI (no lag)
  const backgroundConfetti = useMemo(() => {
    return [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      color: ["#ec4899", "#f472b6", "#fda4af"][i % 3],
      duration: 3 + Math.random() * 4,
      delay: Math.random() * 3,
    }))
  }, [])

  // 🌟 Optimize ACTIVE confetti animation
  useEffect(() => {
    if (confetti.length === 0) return

    const interval = setInterval(() => {
      setConfetti((prev) =>
        prev
          .map((c) => ({
            ...c,
            y: c.y + c.velocityY,
            x: c.x + c.velocityX,
            rotation: c.rotation + 4,
          }))
          .filter((c) => c.y < 150)
      )
    }, 16)

    return () => clearInterval(interval)
  }, [confetti.length])

  // ----------------- Cutting Events -------------------

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    if (stage !== "cutting" || isCut) return

    setIsDragging(true)
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    startXRef.current = e.clientX

    const x = ((e.clientX - rect.left) / rect.width) * 100
    setKnifePosition((prev) => ({ ...prev, x: Math.max(10, Math.min(90, x)) }))
  }, [stage, isCut])

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging || stage !== "cutting" || isCut) return

    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    const x = ((e.clientX - rect.left) / rect.width) * 100
    const clampedX = Math.max(10, Math.min(90, x))

    // Smooth knife tilt
    const deltaX = e.clientX - startXRef.current
    const targetRotation = -45 + deltaX * 0.1
    setKnifeRotation(Math.max(-60, Math.min(-30, targetRotation)))

    // Smooth follow
    setKnifePosition((prev) => ({
      x: prev.x + (clampedX - prev.x) * 0.3,
      y: 45 + Math.sin(clampedX * 0.1) * 5,
    }))

    // Cut progress
    const cakeBounds = cakeRef.current?.getBoundingClientRect()
    if (cakeBounds) {
      const cakeLeft = ((cakeBounds.left - rect.left) / rect.width) * 100
      const cakeRight = ((cakeBounds.right - rect.left) / rect.width) * 100
      const cakeWidth = cakeRight - cakeLeft

      if (clampedX >= cakeLeft && clampedX <= cakeRight) {
        const progress = ((clampedX - cakeLeft) / cakeWidth) * 100
        setCutProgress(progress)

        if (progress > 80 && !hasCutRef.current) {
          hasCutRef.current = true
          triggerCakeCut()
        }
      }
    }
  }, [isDragging, stage, isCut])

  const handlePointerUp = useCallback(() => {
    setIsDragging(false)
    setKnifeRotation(-45)
  }, [])

  // --------------- Cake Cut Animation -----------------

  const triggerCakeCut = () => {
    setShowSliceLine(true)
    setCakeShake(true)

    playSound("cut")

    setTimeout(() => {
      setShowSliceLine(false)
      setCakeShake(false)
      setIsCut(true)

      // Add crumbs
      const newCrumbs = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        x: 45 + Math.random() * 10,
        y: 60 + Math.random() * 10,
        size: 3 + Math.random() * 5,
        rotation: Math.random() * 360,
      }))
      setCrumbs(newCrumbs)

      setTimeout(() => {
        setShowMessage("Perfect Cut!")
        playSound("celebration")

        createConfettiBurst(30)

        setTimeout(() => {
          setShowMessage("")
          setStage("blowing")
          requestMicPermission()
        }, 1300)
      }, 400)
    }, 150)
  }

  // -------------- Confetti Generator -------------------

  const createConfettiBurst = (count: number) => {
    const colors = ["#ec4899", "#f472b6", "#fbcfe8", "#fda4af", "#fecdd3", "#fcd34d", "#a78bfa"]

    const newItems: Confetti[] = Array.from({ length: count }, (_, i) => ({
      id: Date.now() + i,
      x: 40 + Math.random() * 20,
      y: 30 + Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      size: 6 + Math.random() * 8,
      velocityX: (Math.random() - 0.5) * 2,
      velocityY: 1 + Math.random() * 2,
      borderRadius: Math.random() > 0.5 ? "50%" : "3px",
    }))

    setConfetti((prev) => [...prev, ...newItems])
  }

  // ---------------------- Sound FX ---------------------

  const playSound = (type: "cut" | "celebration" | "blow") => {
    try {
      const ctx = new AudioContext()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.connect(gain)
      gain.connect(ctx.destination)

      if (type === "cut") {
        osc.frequency.setValueAtTime(800, ctx.currentTime)
        osc.frequency.exponentialRampToValueAtTime(200, ctx.currentTime + 0.1)
        gain.gain.setValueAtTime(0.3, ctx.currentTime)
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.12)
      }

      if (type === "celebration") {
        osc.frequency.setValueAtTime(523, ctx.currentTime)
        osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1)
        osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2)
      }

      if (type === "blow") {
        osc.type = "sine"
        osc.frequency.setValueAtTime(400, ctx.currentTime)
        osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.3)
      }

      osc.start()
      osc.stop(ctx.currentTime + 0.3)
    } catch {}
  }

  // ------------------- Mic Detection --------------------

  const requestMicPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
      setMicPermission("granted")

      audioContextRef.current = new AudioContext()
      const source = audioContextRef.current.createMediaStreamSource(stream)
      analyserRef.current = audioContextRef.current.createAnalyser()
      analyserRef.current.fftSize = 256
      source.connect(analyserRef.current)

      startBlowDetection()
    } catch {
      setMicPermission("denied")
    }
  }

  const startBlowDetection = () => {
    if (!analyserRef.current) return

    const bufferLength = analyserRef.current.frequencyBinCount
    const dataArray = new Uint8Array(bufferLength)
    let blowCount = 0

    const detect = () => {
      if (!analyserRef.current || stage !== "blowing") return

      analyserRef.current.getByteFrequencyData(dataArray)
      const avg = dataArray.reduce((a, b) => a + b, 0) / bufferLength

      if (avg > 40) {
        blowCount++

        // tilt flames
        setFlameTilt([20 + Math.random() * 20, 25 + Math.random() * 15, 15 + Math.random() * 25])
        setFlameIntensity((prev) => prev.map((i) => Math.max(0, i - 0.15)))

        if (blowCount > 5 && !candlesBlown[0]) blowOutCandle(0)
        if (blowCount > 10 && !candlesBlown[1]) blowOutCandle(1)
        if (blowCount > 15 && !candlesBlown[2]) blowOutCandle(2)
      } else {
        setFlameTilt((prev) => prev.map((t) => t * 0.9))
        setFlameIntensity((prev) =>
          prev.map((i, idx) => (candlesBlown[idx] ? 0 : Math.min(1, i + 0.05)))
        )
      }

      animationFrameRef.current = requestAnimationFrame(detect)
    }

    detect()
  }

  const blowOutCandle = (index: number) => {
    playSound("blow")

    setCandlesBlown((prev) => {
      const n = [...prev]
      n[index] = true
      return n
    })

    setFlameIntensity((prev) => {
      const n = [...prev]
      n[index] = 0
      return n
    })

    setShowSmoke((prev) => {
      const n = [...prev]
      n[index] = true
      return n
    })

    setTimeout(() => {
      setCandlesBlown((c) => {
        if (c.every((x) => x)) triggerCelebration()
        return c
      })
    }, 300)
  }

  const handleManualBlow = () => {
    const i = candlesBlown.findIndex((c) => !c)
    if (i !== -1) blowOutCandle(i)
  }

  // ------------------- Celebration ---------------------

  const triggerCelebration = () => {
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)

    setStage("celebration")
    setCandlesLit(false)
    setShowMessage("Candles Blown!")
    playSound("celebration")

    createConfettiBurst(100)

    setTimeout(() => {
      setShowMessage("Happy 23rd Birthday!")
      createConfettiBurst(40)
    }, 1500)
  }

  const handleContinue = () => {
    setIsExiting(true)
    setTimeout(onComplete, 700)
  }

  // Cleanup  
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current)
      audioContextRef.current?.close()
    }
  }, [])

  // ----------------------------------------------------------------
  // ------------------------ UI START -------------------------------
  // ----------------------------------------------------------------

  return (
    <div
      ref={containerRef}
      className={`min-h-screen relative flex flex-col items-center justify-center overflow-hidden transition-opacity duration-700 select-none ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
      style={{
        background: "linear-gradient(180deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)",
        touchAction: "none",
      }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      <SparkleEffect />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      {/* Background decorative confetti */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {backgroundConfetti.map((p) => (
          <div
            key={`bg-${p.id}`}
            className="absolute w-2 h-2 rounded-full opacity-30"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              backgroundColor: p.color,
              animation: `float ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Active animated confetti */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute pointer-events-none z-50"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            borderRadius: piece.borderRadius,
          }}
        />
      ))}

      {/* Cake crumbs */}
      {crumbs.map((crumb) => (
        <div
          key={crumb.id}
          className="absolute pointer-events-none z-30"
          style={{
            left: `${crumb.x}%`,
            top: `${crumb.y}%`,
            width: crumb.size,
            height: crumb.size,
            backgroundColor: "#fde68a",
            borderRadius: "50%",
            transform: `rotate(${crumb.rotation}deg)`,
            animation: "crumb-fall 1s ease-out forwards",
          }}
        />
      ))}

      {/* HEADER */}
      <div className="relative z-20 text-center mb-8">
        <h2 className="font-serif text-3xl md:text-4xl text-pink-800">
          {stage === "cutting" && "Time to Cut the Cake!"}
          {stage === "blowing" && "Now Blow Out the Candles!"}
          {stage === "celebration" && showMessage}
        </h2>

        {stage === "cutting" && !isCut && (
          <p className="text-pink-600 mt-2 animate-pulse">Drag your finger across the cake to cut it</p>
        )}

        {stage === "blowing" && (
          <p className="text-pink-600 mt-2">
            {micPermission === "granted" ? "Blow into your microphone!" : "Tap the candles to blow them out"}
          </p>
        )}
      </div>

      {/* Knife */}
      {stage === "cutting" && !isCut && (
        <div
          className="absolute z-40 pointer-events-none transition-all duration-75"
          style={{
            left: `${knifePosition.x}%`,
            top: `${knifePosition.y}%`,
            transform: `translate(-50%, -50%) rotate(${knifeRotation}deg)`,
            filter: isDragging
              ? "drop-shadow(0 4px 8px rgba(0,0,0,0.3))"
              : "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
          }}
        >
          <svg width="120" height="40" viewBox="0 0 120 40">
            <path
              d="M10 20 L100 20 L110 15 L100 20 L10 20"
              fill="linear-gradient(#e5e7eb, #9ca3af)"
              stroke="#6b7280"
              strokeWidth="1"
            />
            <rect x="10" y="15" width="90" height="10" rx="1" fill="url(#blade-gradient)" />

            <rect x="15" y="17" width="80" height="2" rx="1" fill="rgba(255,255,255,0.6)" />

            <rect x="0" y="12" width="15" height="16" rx="3" fill="#8b4513" />
            <rect x="2" y="14" width="2" height="12" rx="1" fill="#654321" />

            <defs>
              <linearGradient id="blade-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f3f4f6" />
                <stop offset="50%" stopColor="#d1d5db" />
                <stop offset="100%" stopColor="#9ca3af" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}

      {/* Slice line flash */}
      {showSliceLine && (
        <div
          className="absolute z-35 w-1 bg-white"
          style={{
            left: "50%",
            top: "35%",
            height: "30%",
            boxShadow: "0 0 20px 5px rgba(255,255,255,0.8)",
            animation: "slice-flash 0.15s ease-out",
          }}
        />
      )}

      {/* CAKE -------------------------------------------- */}
      <div
        ref={cakeRef}
        className={`relative z-20 ${cakeShake ? "animate-shake" : ""}`}
        style={{ width: 300, height: 350 }}
      >
        {/* Plate */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-10 rounded-full"
          style={{
            background: "linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.15), inset 0 2px 4px rgba(255,255,255,0.8)",
          }}
        />

        {/* FULL CAKE (before cut) */}
        {!isCut && (
          <>
            {/* Bottom */}
            <div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 w-60 h-28 rounded-2xl"
              style={{
                background: "linear-gradient(180deg, #fbcfe8 0%, #f9a8d4 50%, #f472b6 100%)",
                boxShadow: "inset 0 -15px 30px rgba(0,0,0,0.15), 0 4px 20px rgba(0,0,0,0.1)",
              }}
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute -top-2 rounded-b-full"
                    style={{
                      left: `${10 + i * 12}%`,
                      width: 12 + Math.random() * 8,
                      height: 15 + Math.random() * 10,
                      background: "linear-gradient(180deg, #fce7f3 0%, #fbcfe8 100%)",
                    }}
                  />
                ))}
              </div>

              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-3 h-3 rounded-full bg-pink-300 shadow-inner" />
                ))}
              </div>
            </div>

            {/* Top Tier */}
            <div
              className="absolute bottom-32 left-1/2 -translate-x-1/2 w-44 h-24 rounded-2xl"
              style={{
                background: "linear-gradient(180deg, #fce7f3 0%, #fbcfe8 50%, #f9a8d4 100%)",
                boxShadow: "inset 0 -12px 25px rgba(0,0,0,0.12), 0 4px 15px rgba(0,0,0,0.08)",
              }}
            >
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute -top-2 rounded-b-full"
                  style={{
                    left: `${8 + i * 16}%`,
                    width: 10 + Math.random() * 6,
                    height: 12 + Math.random() * 8,
                    background: "linear-gradient(180deg, #fff 0%, #fce7f3 100%)",
                  }}
                />
              ))}
            </div>
          </>
        )}

        {/* CUT CAKE (split left) */}
        {isCut && (
          <div
            className="absolute bottom-8 left-1/2 w-60 h-28 rounded-2xl origin-right"
            style={{
              transform: "translateX(-55%) translateX(-12px)",
              background: "linear-gradient(180deg, #fbcfe8 0%, #f9a8d4 50%, #f472b6 100%)",
              clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
              animation: "slide-left 0.5s ease-out forwards",
            }}
          />
        )}

        {/* CUT CAKE (split right) */}
        {isCut && (
          <div
            className="absolute bottom-8 left-1/2 w-60 h-28 rounded-2xl origin-left"
            style={{
              transform: "translateX(-45%) translateX(12px)",
              background: "linear-gradient(180deg, #fbcfe8 0%, #f9a8d4 50%, #f472b6 100%)",
              clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
              animation: "slide-right 0.5s ease-out forwards",
            }}
          >
            <div
              className="absolute left-0 top-2 bottom-2 w-8"
              style={{
                background: "linear-gradient(90deg, #fef3c7 0%, #fde68a 40%, #fcd34d 100%)",
                borderLeft: "3px solid #f9a8d4",
              }}
            />
          </div>
        )}

        {/* Split top tier */}
        {isCut && (
          <>
            <div
              className="absolute bottom-32 left-1/2 w-44 h-24 rounded-2xl"
              style={{
                transform: "translateX(-55%) translateX(-8px)",
                background: "linear-gradient(180deg, #fce7f3 0%, #fbcfe8 50%, #f9a8d4 100%)",
                clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)",
                animation: "slide-left 0.5s ease-out forwards",
              }}
            />
            <div
              className="absolute bottom-32 left-1/2 w-44 h-24 rounded-2xl"
              style={{
                transform: "translateX(-45%) translateX(8px)",
                background: "linear-gradient(180deg, #fce7f3 0%, #fbcfe8 50%, #f9a8d4 100%)",
                clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)",
                animation: "slide-right 0.5s ease-out forwards",
              }}
            />
          </>
        )}

        {/* CANDLES */}
        <div className="absolute bottom-52 left-1/2 -translate-x-1/2 flex gap-6">
          {[0, 1, 2].map((i) => (
            <div key={i} className="relative cursor-pointer" onClick={() => stage === "blowing" && handleManualBlow()}>
              <div
                className="w-4 h-14 rounded-t-full"
                style={{
                  background: "linear-gradient(90deg, #fbbf24 0%, #fcd34d 50%, #fbbf24 100%)",
                  boxShadow: "inset -2px 0 4px rgba(0,0,0,0.1)",
                }}
              >
                <div className="absolute inset-0 rounded-t-full overflow-hidden">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="absolute w-full h-1 bg-white/30" style={{ top: `${25 + j * 25}%` }} />
                  ))}
                </div>
              </div>

              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-3 bg-gray-800 rounded-full" />

              {/* Flame */}
              {!candlesBlown[i] && candlesLit && (
                <div
                  className="absolute -top-8 left-1/2 -translate-x-1/2 transition-all duration-100"
                  style={{
                    transform: `translateX(-50%) rotate(${flameTilt[i]}deg) scale(${flameIntensity[i]})`,
                    opacity: flameIntensity[i],
                  }}
                >
                  <div
                    className="w-4 h-8 rounded-full"
                    style={{
                      background:
                        "radial-gradient(ellipse at bottom, #fcd34d 0%, #f97316 40%, #ef4444 70%, transparent 100%)",
                      filter: "blur(1px)",
                      animation: "flicker 0.15s ease-in-out infinite alternate",
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-4 rounded-full"
                    style={{
                      background: "radial-gradient(ellipse at bottom, #fff 0%, #fef3c7 50%, transparent 100%)",
                      animation: "flicker 0.1s ease-in-out infinite alternate",
                    }}
                  />
                  <div
                    className="absolute -inset-4 rounded-full"
                    style={{
                      background: "radial-gradient(circle, rgba(251,191,36,0.4) 0%, transparent 70%)",
                      animation: "pulse 1s ease-in-out infinite",
                    }}
                  />
                </div>
              )}

              {/* Smoke */}
              {showSmoke[i] && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                  {[...Array(3)].map((_, j) => (
                    <div
                      key={j}
                      className="absolute w-2 h-2 rounded-full bg-gray-400/50"
                      style={{
                        animation: `smoke-rise 1s ease-out forwards`,
                        animationDelay: `${j * 0.15}s`,
                        left: `${(j - 1) * 4}px`,
                      }}
                    />
                  ))}
                </div>
              )}

              {/* glowing wick */}
              {candlesBlown[i] && (
                <div
                  className="absolute -top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                  style={{
                    background: "radial-gradient(circle, #ef4444 0%, #991b1b 100%)",
                    boxShadow: "0 0 4px 1px rgba(239,68,68,0.6)",
                    animation: "pulse 2s ease-in-out infinite",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Cutting Progress */}
      {stage === "cutting" && !isCut && isDragging && (
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-48 h-2 bg-pink-200 rounded-full overflow-hidden">
          <div className="h-full bg-pink-500 rounded-full transition-all duration-100" style={{ width: `${cutProgress}%` }} />
        </div>
      )}

      {/* Message */}
      {showMessage && (
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 z-50 animate-bounce-in">
          <div
            className="px-8 py-4 rounded-2xl text-3xl font-bold text-pink-700"
            style={{
              background: "rgba(255,255,255,0.9)",
              boxShadow: "0 10px 40px rgba(236,72,153,0.3)",
              backdropFilter: "blur(10px)",
            }}
          >
            {showMessage}
          </div>
        </div>
      )}

      {/* Continue */}
      {stage === "celebration" && (
        <button
          onClick={handleContinue}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 px-8 py-4 bg-pink-500 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-pink-600 transform hover:scale-105 transition-all duration-300 z-50 animate-pulse-glow"
        >
          Continue Your Surprise
        </button>
      )}

      {/* CSS KEYFRAMES */}
      <style jsx>
        {`
          @keyframes flicker {
            0% {
              transform: scaleY(1) scaleX(1);
            }
            100% {
              transform: scaleY(1.1) scaleX(0.9);
            }
          }

          @keyframes smoke-rise {
            0% {
              opacity: 0.6;
              transform: translateY(0) scale(1);
            }
            100% {
              opacity: 0;
              transform: translateY(-30px) scale(2);
            }
          }

          @keyframes crumb-fall {
            0% {
              opacity: 1;
              transform: translateY(0) rotate(0deg);
            }
            100% {
              opacity: 0;
              transform: translateY(100px) rotate(360deg);
            }
          }

          @keyframes slice-flash {
            0% {
              opacity: 0;
              transform: translateX(-50%) scaleY(0);
            }
            50% {
              opacity: 1;
              transform: translateX(-50%) scaleY(1);
            }
            100% {
              opacity: 0;
              transform: translateX(-50%) scaleY(1);
            }
          }

          @keyframes slide-left {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(-55%) translateX(-12px);
            }
          }

          @keyframes slide-right {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(-45%) translateX(12px);
            }
          }

          @keyframes bounce-in {
            0% {
              transform: translateX(-50%) scale(0);
              opacity: 0;
            }
            50% {
              transform: translateX(-50%) scale(1.2);
            }
            100% {
              transform: translateX(-50%) scale(1);
              opacity: 1;
            }
          }

          @keyframes shake {
            0%,
            100% {
              transform: translateX(0);
            }
            25% {
              transform: translateX(-3px);
            }
            75% {
              transform: translateX(3px);
            }
          }

          .animate-shake {
            animation: shake 0.15s ease-in-out 2;
          }

          .animate-bounce-in {
            animation: bounce-in 0.4s ease-out forwards;
          }
        `}
      </style>
    </div>
  )
}
