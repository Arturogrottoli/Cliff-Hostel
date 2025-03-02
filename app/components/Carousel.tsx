"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const images = [
  "https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1455729552865-3658a5d39692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1520443240718-fce21901db79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
]

export function Carousel({ isEnglish }: { isEnglish: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src || "/placeholder.svg"}
          alt={`Slide ${index + 1}`}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
          priority={index === 0}
        />
      ))}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
        <h2 className="text-6xl font-bold text-white text-center shadow-lg mb-4 font-surf">Hostel Cliff</h2>
        <p className="text-2xl text-white text-center font-light">
          {isEnglish ? "Your surfer refuge in Chapadmalal" : "Tu refugio surfer en Chapadmalal"}
        </p>
      </div>
    </div>
  )
}

