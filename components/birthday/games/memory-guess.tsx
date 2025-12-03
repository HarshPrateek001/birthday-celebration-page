"use client";

import { useState } from "react";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Image from "next/image";

// Types
interface MemoryGuessProps {
  onComplete: () => void;
  onBack: () => void;
}
interface Memory {
  id: number;
  src: string;
  caption: string;
  revealed: boolean;
}

// Component
export function MemoryGuess({ onComplete, onBack }: MemoryGuessProps) {
  const [memories, setMemories] = useState<Memory[]>([
    { id: 1, src: "/2.jpg", caption: "Our first rain together 💕", revealed: false },
    { id: 2, src: "/Our smile.jpg", caption: "The day we couldn’t stop laughing 😄", revealed: false },
    { id: 3, src: "/5.jpg", caption: "The moment everything felt perfect ✨", revealed: false },
    { id: 4, src: "/Where We start.jpg", caption: "Where We Start Our Journey💕", revealed: false },
    { id: 5, src: "/4.jpg", caption: "Moment We feel the most 😄", revealed: false },
    { id: 6, src: "/bubu smile.jpg", caption: "You smile my home✨", revealed: false },
  ]);

  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [confetti, setConfetti] = useState<
    { id: number; x: number; y: number; size: number; delay: number }[]
  >([]);

  const handleReveal = (id: number) => {
    const memory = memories.find((m) => m.id === id);
    if (!memory || memory.revealed) return;

    setMemories((prev) => prev.map((m) => (m.id === id ? { ...m, revealed: true } : m)));
    setSelectedMemory(memory);

    // heart burst confetti
    const burst = Array.from({ length: 18 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      y: 20 + Math.random() * 30,
      size: 12 + Math.random() * 18,
      delay: Math.random() * 0.4,
    }));
    setConfetti(burst);
    setTimeout(() => setConfetti([]), 2000);
  };

  const allRevealed = memories.every((m) => m.revealed);

  return (
    <div
      className="relative text-center min-h-screen pb-20 pt-16"
      style={{
        background: "linear-gradient(180deg, #fdf2f8 0%, #fce7f3 50%, #fbcfe8 100%)",
      }}
    >
      {/* Back */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 flex items-center gap-2 text-muted-foreground hover:text-pink-600 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        Back
      </button>

      {/* Sparkles (fixed: include delay in shorthand animation string — don't mix with animationDelay prop) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(16)].map((_, i) => {
          const duration = 4 + Math.random() * 4; // seconds
          const delay = i * 0.2;
          // Put duration and delay inside same shorthand string to avoid mixing shorthand + longhand
          const anim = `sparkleFloat ${duration}s linear ${delay}s infinite`;
          return (
            <div
              key={i}
              className="absolute text-pink-300"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${6 + Math.random() * 10}px`,
                // NOTE: use only 'animation' shorthand (with delay included). Do not set 'animationDelay' separately.
                animation: anim,
              }}
            >
              ✦
            </div>
          );
        })}
      </div>

      {/* Title */}
      <h2 className="font-serif text-4xl text-pink-700 mb-2 drop-shadow-sm">Guess the Memory</h2>
      <p className="text-pink-500 mb-8 text-lg">
        {allRevealed ? "All memories revealed! 💖" : "Tap to reveal the hidden memories ✨"}
      </p>

      {/* Confetti hearts — animation built in shorthand already */}
      {confetti.map((c) => (
        <div
          key={c.id}
          className="absolute z-50 text-pink-500"
          style={{
            left: `${c.x}%`,
            top: `${c.y}%`,
            fontSize: c.size,
            // include delay in shorthand (no mixing)
            animation: `heartPop 1.8s ease-out ${c.delay}s forwards`,
          }}
        >
          ❤️
        </div>
      ))}

      {/* Memory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto px-6">
        {memories.map((memory) => (
          <div
            key={memory.id}
            className="relative group perspective-1000 cursor-pointer"
            onClick={() => handleReveal(memory.id)}
          >
            <div
              className={`relative w-full aspect-square rounded-2xl shadow-lg transition-all duration-700 transform-style-preserve-3d ${
                memory.revealed ? "rotate-y-180" : ""
              }`}
            >
              {/* FRONT - locked */}
              <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-pink-400/20 animate-pulse rounded-2xl" />
                <div className="absolute inset-0 flex items-center justify-center text-5xl text-pink-600 opacity-80">
                  ?
                </div>
                <div className="absolute inset-0 rounded-2xl border border-pink-300/50 shadow-inner" />
              </div>

              {/* BACK - image */}
              <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-2xl overflow-hidden">
                <Image src={memory.src} alt="Memory" fill className="object-cover" />
              </div>
            </div>

            {memory.revealed && (
              <p className="mt-3 text-sm text-pink-700 italic animate-fadeIn">
                “{memory.caption}”
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMemory && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedMemory(null)}
        >
          <div className="bg-white rounded-3xl max-w-sm w-full overflow-hidden shadow-xl animate-zoomIn">
            <div className="relative aspect-square">
              <Image src={selectedMemory.src} alt="Memory" fill className="object-cover" />
            </div>
            <div className="p-6">
              <p className="text-center text-lg text-pink-700 italic">“{selectedMemory.caption}”</p>
            </div>
          </div>
        </div>
      )}

      {/* Final Continue */}
      {allRevealed && (
        <div className="mt-10 animate-fadeIn">
          <div className="flex items-center justify-center gap-2 text-pink-600 mb-4">
            <CheckCircle2 className="w-6 h-6" />
            <span className="font-medium text-lg">Every memory with you is precious 💗</span>
          </div>

          <button
            onClick={onComplete}
            className="px-10 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Continue
          </button>
        </div>
      )}

      {/* Styles / Keyframes */}
      <style jsx global>{`
        @keyframes sparkleFloat {
          0% { transform: translateY(0); opacity: 0.7; }
          100% { transform: translateY(-40px); opacity: 0; }
        }
        @keyframes heartPop {
          0% { transform: translateY(0) scale(0.7); opacity: 1; }
          100% { transform: translateY(-120px) scale(1.2); opacity: 0; }
        }
        .perspective-1000 { perspective: 1000px; }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-zoomIn { animation: zoomIn 0.4s ease-out forwards; }
        @keyframes zoomIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
