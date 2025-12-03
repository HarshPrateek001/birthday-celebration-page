"use client"

import type React from "react"

import { createContext, useContext, useRef, useState, useCallback } from "react"

interface AudioContextType {
  playSound: (sound: "chime" | "pop" | "celebration" | "heartbeat") => void
  toggleMusic: () => void
  isMusicPlaying: boolean
}

const AudioContext = createContext<AudioContextType | null>(null)

export function AudioProvider({ children }: { children: React.ReactNode }) {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const playSound = useCallback((sound: "chime" | "pop" | "celebration" | "heartbeat") => {
    // Sound effects would be loaded here in production
    console.log(`Playing sound: ${sound}`)
  }, [])

  const toggleMusic = useCallback(() => {
    setIsMusicPlaying((prev) => !prev)
  }, [])

  return <AudioContext.Provider value={{ playSound, toggleMusic, isMusicPlaying }}>{children}</AudioContext.Provider>
}

export function useAudio() {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error("useAudio must be used within AudioProvider")
  }
  return context
}
