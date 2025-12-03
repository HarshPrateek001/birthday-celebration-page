"use client"

import { useEffect, useRef } from "react"

interface HeartParticle {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  wobble: number
}

export function HeartParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<HeartParticle[]>([])
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

    // Initialize particles
    for (let i = 0; i < 20; i++) {
      particlesRef.current.push({
        x: Math.random() * canvas.width,
        y: canvas.height + Math.random() * 100,
        size: 8 + Math.random() * 12,
        speed: 0.5 + Math.random() * 1,
        opacity: 0.3 + Math.random() * 0.5,
        wobble: Math.random() * Math.PI * 2,
      })
    }

    const drawHeart = (x: number, y: number, size: number, opacity: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.scale(size / 30, size / 30)
      ctx.beginPath()
      ctx.moveTo(0, -8)
      ctx.bezierCurveTo(-15, -22, -30, -5, 0, 15)
      ctx.bezierCurveTo(30, -5, 15, -22, 0, -8)
      ctx.fillStyle = `rgba(236, 72, 153, ${opacity})`
      ctx.fill()
      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        particle.y -= particle.speed
        particle.wobble += 0.03
        const wobbleX = Math.sin(particle.wobble) * 30

        if (particle.y < -50) {
          particle.y = canvas.height + 50
          particle.x = Math.random() * canvas.width
        }

        drawHeart(particle.x + wobbleX, particle.y, particle.size, particle.opacity)
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
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-5" style={{ background: "transparent" }} />
  )
}
