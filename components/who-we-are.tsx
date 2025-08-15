"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const slides = [
  {
    id: 1,
    image: "/landing1.jpg",
    title1: "환경과 안전을",
    title2: "최우선 하는 기업",
  },
  {
    id: 2,
    image: "/landing2.jpg",
    title1: "혁신적인 기술로",
    title2: "미래를 선도하는 기업",
  },
  {
    id: 3,
    image: "/landing3.jpg",
    title1: "고객과 함께",
    title2: "성장하는 기업",
  },
  {
    id: 4,
    image: "/landing1.jpg",
    title1: "품질과 신뢰를",
    title2: "약속하는 기업",
  },
]

export default function WhoWeAre() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div className="mb-8 lg:mb-0">
            <p className="text-green-600 text-sm font-semibold tracking-wider uppercase mb-6">WHO WE ARE</p>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">청원농산 우리의 가치는</h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex space-x-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-14 h-14 rounded-full border-gray-300 hover:border-gray-400 hover:bg-gray-50 bg-transparent transition-all duration-200"
            >
              <Image src="/prev-arrow.png" alt="Previous" width={20} height={20} className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="w-14 h-14 rounded-full border-gray-300 hover:border-gray-400 hover:bg-gray-50 bg-transparent transition-all duration-200"
            >
              <Image src="/next-arrow.png" alt="Next" width={20} height={20} className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="max-w-[1500px] w-full mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="flex-shrink-0 w-full">
                  <div className="relative aspect-[3/1] group">
                    <Image
                      src={slide.image || "/placeholder.svg"}
                      alt={`${slide.title1} ${slide.title2}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Text Overlay */}
                    <div className="absolute bottom-8 right-8 text-right">
                      <p className="text-white text-2xl lg:text-4xl font-bold mb-2 drop-shadow-2xl">{slide.title1}</p>
                      <p className="text-white text-2xl lg:text-4xl font-bold drop-shadow-2xl">{slide.title2}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-green-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
