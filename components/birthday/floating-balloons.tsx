"use client"

import { useEffect, useRef } from "react"

interface Balloon {
  id: number
  x: number
  y: number
  size: number
  speed: number
  wobble: number
  color: string
}

export function FloatingBalloons() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const balloonsRef = useRef<Balloon[]>([])
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

    // Initialize balloons
    const colors = [
      "rgba(244, 114, 182, 0.6)",
      "rgba(251, 207, 232, 0.7)",
      "rgba(253, 164, 175, 0.6)",
      "rgba(249, 168, 212, 0.65)",
      "rgba(236, 72, 153, 0.5)",
    ]

    for (let i = 0; i < 15; i++) {
      balloonsRef.current.push({
        id: i,
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 200,
        size: 30 + Math.random() * 40,
        speed: 0.3 + Math.random() * 0.5,
        wobble: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      balloonsRef.current.forEach((balloon) => {
        balloon.y -= balloon.speed
        balloon.wobble += 0.02
        const wobbleX = Math.sin(balloon.wobble) * 20

        if (balloon.y < -100) {
          balloon.y = canvas.height + 50
          balloon.x = Math.random() * canvas.width
        }

        // Draw balloon
        ctx.beginPath()
        ctx.fillStyle = balloon.color
        ctx.ellipse(balloon.x + wobbleX, balloon.y, balloon.size * 0.7, balloon.size, 0, 0, Math.PI * 2)
        ctx.fill()

        // Draw string
        ctx.beginPath()
        ctx.strokeStyle = "rgba(200, 200, 200, 0.5)"
        ctx.lineWidth = 1
        ctx.moveTo(balloon.x + wobbleX, balloon.y + balloon.size)
        ctx.quadraticCurveTo(
          balloon.x + wobbleX + 10,
          balloon.y + balloon.size + 30,
          balloon.x + wobbleX - 5,
          balloon.y + balloon.size + 60,
        )
        ctx.stroke()

        // Balloon highlight
        ctx.beginPath()
        ctx.fillStyle = "rgba(255, 255, 255, 0.4)"
        ctx.ellipse(
          balloon.x + wobbleX - balloon.size * 0.25,
          balloon.y - balloon.size * 0.3,
          balloon.size * 0.15,
          balloon.size * 0.2,
          -0.5,
          0,
          Math.PI * 2,
        )
        ctx.fill()
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
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
