"use client"

import Image from "next/image"

export default function CompanyHero() {
  return (
    <section className="w-full relative h-[360px] md:h-[420px]">
      {/* Background Image */}
      <Image
        src="https://d1tlu55vk9m9db.cloudfront.net/companyinfo.webp"
        alt="청원농산 배경"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content */}
      <div className="relative mx-auto max-w-[1200px] h-full flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-white text-[28px] md:text-[32px] font-extrabold tracking-[-0.02em]">
          주식회사 청원농산은
        </h1>
        <p className="text-white/90 text-lg md:text-2xl font-light mt-4">
          가공부터 전분 추출, 묵 제조까지 전 공정을 자체 운영하는 전통식품 제조기업입니다
        </p>
      </div>
    </section>
  )
}
