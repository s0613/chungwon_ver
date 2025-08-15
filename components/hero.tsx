"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"

const heroImages = ["/landing1.gif", "/landing2.png", "/landing3.png"]

const heroDescriptions = [
  {
    text: "첨가물 없이 자연 그대로를 담았습니다",
    company: "청원농산",
    buttonText: "기업소개"
  },
  {
    text: "20년 전 느꼈던 그 맛,",
    company: "전통 도토리묵",
    buttonText: "제품소개"
  },
  {
    text: "지속가능한 도토리 이야기,",
    company: "다음 세대를 위한 건강한 선택",
    buttonText: "지속가능"
  }
]

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const isMobile = useIsMobile()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 3000) // 3초마다 전환

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slideshow */}
      <Image
        src={heroImages[currentImageIndex]}
        alt={`Hero background ${currentImageIndex + 1}`}
        fill
        className={`${
          isMobile 
            ? "object-cover object-center" 
            : "object-cover"
        }`}
        priority
      />

      {/* Mobile overlay for better text readability */}
      {isMobile && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-[1]" />
      )}

      {/* Left Bottom Description */}
      <div className={`absolute z-10 text-white ${
        isMobile 
          ? "bottom-8 left-6 right-6 text-center" 
          : "bottom-12 left-12"
      }`}>
        <div className={`flex flex-col ${
          isMobile ? "items-center" : "items-start"
        }`}>
          <h1 className={`font-bold mb-2 leading-tight ${
            isMobile ? "text-2xl" : "text-4xl"
          }`}>
            {heroDescriptions[currentImageIndex].text}
          </h1>
          <h1 className={`font-semibold mb-4 ${
            isMobile ? "text-xl" : "text-3xl"
          }`}>
            {heroDescriptions[currentImageIndex].company}
          </h1>
          <Link href={currentImageIndex === 0 ? "/company" : currentImageIndex === 1 ? "/products" : "/esg"}>
            <Button
              variant="outline"
              className={`bg-transparent border-none text-white font-bold px-8 py-3 text-lg rounded-full transition-all duration-300 hover:text-gray-300 flex items-center justify-center gap-2 ${
                isMobile ? "w-full max-w-xs" : ""
              }`}
            >
              <Image src="/arrow.svg" alt="Arrow" width={24} height={24} />
              {heroDescriptions[currentImageIndex].buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
