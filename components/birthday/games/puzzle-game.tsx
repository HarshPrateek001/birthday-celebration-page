"use client"

import { useState, useEffect, useMemo } from "react"
import { ArrowLeft, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

// --- Configuration ---
const PUZZLE_SIZE = 3
const IMAGE_URL = "/5.jpg" // The full, uncropped image
const GRID_SIZE_TW = "w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px]"

// --- Types ---
interface Tile {
  id: number
  correctPos: number
  currentPos: number
  // Position of this tile in the original image grid
  imgRow: number
  imgCol: number
}

interface PuzzleGameProps {
  onComplete: () => void
  onBack: () => void
}

// --- Helper Functions ---
const createAndShuffleTiles = (): Tile[] => {
  const tiles: Tile[] = Array.from({ length: PUZZLE_SIZE * PUZZLE_SIZE }, (_, i) => ({
    id: i,
    correctPos: i,
    currentPos: i,
    imgRow: Math.floor(i / PUZZLE_SIZE),
    imgCol: i % PUZZLE_SIZE,
  }))

  // Fisher-Yates shuffle on currentPos
  for (let i = tiles.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[tiles[i].currentPos, tiles[j].currentPos] = [tiles[j].currentPos, tiles[i].currentPos]
  }

  // To ensure it's solvable, we can add more robust checks, but for a 3x3 simple shuffle is usually fine.
  // A simple way to guarantee a solvable puzzle is to perform a number of random swaps from the solved state.
  
  return tiles
}


// --- Main Component ---
export function PuzzleGame({ onComplete, onBack }: PuzzleGameProps) {
  const [tiles, setTiles] = useState<Tile[]>([])
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [isComplete, setIsComplete] = useState(false)
  const [showHint, setShowHint] = useState(false)

  // Memoize sorted tiles to prevent re-sorting on every render
  const sortedTiles = useMemo(() => {
    return [...tiles].sort((a, b) => a.currentPos - b.currentPos)
  }, [tiles])

  useEffect(() => {
    setTiles(createAndShuffleTiles())
  }, [])

  // Check for completion whenever tiles change
  useEffect(() => {
    if (tiles.length > 0 && tiles.every(t => t.currentPos === t.correctPos)) {
      // A short delay to let the user see the final tile in place
      setTimeout(() => setIsComplete(true), 300)
    }
  }, [tiles])

  const handleTileClick = (tileId: number) => {
    if (isComplete) return

    if (selectedId === null) {
      setSelectedId(tileId)
    } else {
      // Immutable state update for swapping tiles
      setTiles(currentTiles => {
        const selectedTile = currentTiles.find(t => t.id === selectedId)!
        const clickedTile = currentTiles.find(t => t.id === tileId)!

        return currentTiles.map(t => {
          if (t.id === selectedId) return { ...t, currentPos: clickedTile.currentPos }
          if (t.id === tileId) return { ...t, currentPos: selectedTile.currentPos }
          return t
        })
      })
      setSelectedId(null)
    }
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-pink-100 via-pink-50 to-rose-100 p-4 overflow-hidden">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-6 left-6 flex items-center gap-2 text-rose-500 hover:text-rose-700 transition-colors z-30"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-semibold">Back</span>
      </button>

      {/* --- Puzzle View --- */}
      <div
        className={cn(
          "flex flex-col items-center justify-center transition-opacity duration-1000",
          isComplete ? "opacity-0" : "opacity-100"
        )}
      >
        <div className="text-center mb-6">
          <h2 className="font-serif text-4xl font-bold text-rose-500">Puzzle of Us</h2>
          <p className="text-rose-400 mt-1">Piece together a special moment.</p>
        </div>

        {/* Puzzle Container */}
        <div className={cn("relative rounded-2xl shadow-2xl", GRID_SIZE_TW)}>
          {/* Main Grid */}
          <div className="grid grid-cols-3 gap-1.5 p-1.5 bg-white/50 rounded-2xl">
            {sortedTiles.map(tile => (
              <PuzzleTile
                key={tile.id}
                tile={tile}
                isSelected={selectedId === tile.id}
                onClick={() => handleTileClick(tile.id)}
              />
            ))}
          </div>

          {/* Hint Overlay */}
          <div
            className={cn(
              "absolute inset-0 rounded-2xl overflow-hidden transition-opacity duration-300 pointer-events-none",
              showHint ? "opacity-100" : "opacity-0"
            )}
          >
            <Image src={IMAGE_URL} alt="Hint" layout="fill" objectFit="cover" />
          </div>
        </div>
        
        {/* Hint Button */}
        <button
          onMouseDown={() => setShowHint(true)}
          onMouseUp={() => setShowHint(false)}
          onTouchStart={() => setShowHint(true)}
          onTouchEnd={() => setShowHint(false)}
          className="mt-6 flex items-center gap-2 px-5 py-2.5 bg-white/70 text-rose-500 rounded-full shadow-lg hover:bg-white transition-all focus:outline-none"
        >
          <HelpCircle className="w-5 h-5" />
          <span>Hold for Hint</span>
        </button>
      </div>

      {/* --- Completed View --- */}
      <div
        className={cn(
          "absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-1000 p-4",
          isComplete ? "opacity-100 z-20" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="text-center">
            <h2 className="font-serif text-5xl font-bold text-rose-600 mb-4">You did it!</h2>
            <p className="text-rose-400 text-lg mb-6">Our beautiful memory, revealed.</p>
        </div>
        <div className={cn("relative rounded-2xl shadow-2xl overflow-hidden", GRID_SIZE_TW)}>
            <Image src={IMAGE_URL} alt="Completed Puzzle" layout="fill" objectFit="cover" />
        </div>
        <button
          onClick={onComplete}
          className="mt-8 px-8 py-4 bg-pink-500 text-white font-bold text-lg rounded-full shadow-lg hover:bg-pink-600 hover:scale-105 transform transition-all duration-300 animate-pulse"
        >
          Continue to next surprise ❤
        </button>
      </div>
    </div>
  )
}


// --- Tile Sub-Component ---
interface PuzzleTileProps {
  tile: Tile
  isSelected: boolean
  onClick: () => void
}

function PuzzleTile({ tile, isSelected, onClick }: PuzzleTileProps) {
  const { imgRow, imgCol } = tile

  const backgroundStyle = {
    backgroundImage: `url(${IMAGE_URL})`,
    backgroundSize: `${PUZZLE_SIZE * 100}% ${PUZZLE_SIZE * 100}%`,
    backgroundPosition: `${imgCol * (100 / (PUZZLE_SIZE - 1))}% ${imgRow * (100 / (PUZZLE_SIZE - 1))}%`,
  }

  return (
    <div
      onClick={onClick}
      className={cn(
        "aspect-square rounded-lg cursor-pointer transition-all duration-300",
        "shadow-md hover:shadow-xl hover:scale-[1.03]",
        "focus:outline-none focus:ring-4 focus:ring-pink-400 focus:ring-opacity-70",
        isSelected && "ring-4 ring-pink-500 scale-[0.97] shadow-inner"
      )}
      style={backgroundStyle}
    />
  )
}