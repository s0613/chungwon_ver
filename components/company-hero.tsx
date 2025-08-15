import Image from "next/image"

export default function CompanyHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/placeholder.svg?height=800&width=1200&text=Panoramic+Landscape+with+Green+Fields+and+Mountains"
        alt="청원농산 배경"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">주식회사 청원농산은</h1>
        <p className="text-xl md:text-2xl mb-6 leading-relaxed">
          도토리 원두의 가공부터 전분 추출, 묵 제조까지 전 공정을 자체 운영하는 전통식품 제조기업입니다.
        </p>
        
      </div>
    </section>
  )
}
