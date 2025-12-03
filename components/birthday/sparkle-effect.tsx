"use client"

import { useEffect, useRef } from "react"

interface Sparkle {
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  angle: number
}

export function SparkleEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sparklesRef = useRef<Sparkle[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize sparkles
    for (let i = 0; i < 50; i++) {
      sparklesRef.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 1 + Math.random() * 3,
        opacity: Math.random(),
        speed: 0.5 + Math.random() * 1,
        angle: Math.random() * Math.PI * 2,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      sparklesRef.current.forEach((sparkle) => {
        sparkle.angle += 0.05
        sparkle.opacity = 0.3 + Math.abs(Math.sin(sparkle.angle)) * 0.7

        // Draw sparkle
        ctx.save()
        ctx.translate(sparkle.x, sparkle.y)
        ctx.rotate(sparkle.angle)

        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, sparkle.size * 2)
        gradient.addColorStop(0, `rgba(255, 255, 255, ${sparkle.opacity})`)
        gradient.addColorStop(0.5, `rgba(251, 207, 232, ${sparkle.opacity * 0.5})`)
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()

        // Draw 4-point star
        for (let i = 0; i < 4; i++) {
          const angle = (i * Math.PI) / 2
          ctx.lineTo(Math.cos(angle) * sparkle.size * 2, Math.sin(angle) * sparkle.size * 2)
          ctx.lineTo(
            Math.cos(angle + Math.PI / 4) * sparkle.size * 0.5,
            Math.sin(angle + Math.PI / 4) * sparkle.size * 0.5,
          )
        }
        ctx.closePath()
        ctx.fill()
        ctx.restore()

        // Slowly move sparkles
        sparkle.y -= sparkle.speed * 0.1
        if (sparkle.y < -10) {
          sparkle.y = canvas.height + 10
          sparkle.x = Math.random() * canvas.width
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-10" style={{ background: "transparent" }} />
  )
}
