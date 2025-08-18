"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function CompanyHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/companyinfo.png"
        alt="청원농산 배경"
        fill
        className="object-cover transition-transform duration-1000 ease-out hover:scale-105"
        priority
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 transition-opacity duration-1000" />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h2 
          className={`text-4xl md:text-5xl font-bold mb-8 leading-tight transition-all duration-1000 ease-out ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          주식회사 청원농산은 <br />
        </h2>
        <p 
          className={`text-lg md:text-2xl font-light transition-all duration-1000 ease-out delay-300 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          가공부터 전분 추출, 묵 제조까지 전 공정을 자체 운영하는 전통식품 제조기업입니다
        </p>
      </div>
    </section>
  )
}
