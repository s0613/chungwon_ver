"use client";
import Image from "next/image";

export default function CompanyIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-8 sm:py-12 md:py-14">
        {/* 제목 */}
        <h2 className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-extrabold tracking-[-0.02em] text-slate-900">
          (주) 청원농산
        </h2>

        {/* 본문 (Figma: 20/32, color #4B5563) */}
        <div className="mt-3 sm:mt-4 max-w-[760px] text-[16px] sm:text-[18px] md:text-[20px] leading-[1.6] sm:leading-8 text-[#4B5563] space-y-2 sm:space-y-3">
          <p>
            청원농산은 묵 원료를 앙금으로 가공하여 묵공장에 공급하는 일로 시작했습니다. 이제는 전분과 묵 제품을 직접 소비자께 선보이며, 가정의 식탁 어디서나 만나실 수 있게 되었습니다.
          </p>
          <p>
            우리나라의 전통식품을 젊은 세대에도 친숙하게 전하고, 더 많은 분들이 건강하고 맛있게 즐길 수 있도록 노력하겠습니다.
          </p>
          <p>
            전통의 맛과 정성을 담아, 청원농산이 여러분과 함께하겠습니다.
          </p>
        </div>

        {/* 상단 작은 이미지: 560x420 카드 */}
        <div className="mt-4 sm:mt-6">
          <div className="relative w-full max-w-[560px] h-[200px] sm:h-[280px] md:h-[350px] lg:h-[420px] rounded-xl sm:rounded-2xl bg-slate-200/70 shadow-sm">
            <Image
              src="/chungwon3.webp"
              alt="청원농산 소개 이미지"
              fill
              className="object-cover rounded-xl sm:rounded-2xl"
              sizes="(min-width:1024px) 560px, (min-width:768px) 350px, (min-width:640px) 280px, 200px"
              priority
            />
          </div>
        </div>

        {/* 동영상 섹션 */}
        <div className="mt-8 sm:mt-12">
          <div className="relative w-full h-[300px] sm:h-[420px] md:h-[560px] lg:h-[680px] rounded-xl sm:rounded-2xl bg-slate-200/70 shadow-sm overflow-hidden">
            <video
              src="/video/introduce.mp4"
              className="absolute inset-0 w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
            />
          </div>
        </div>

        {/* 경영철학 인포그래픽 섹션 */}
        <div className="mt-8 sm:mt-12">
          <div className="relative flex flex-col items-center">
            {/* 원형 이미지: SVG에 텍스트가 포함되어 있음 */}
            <div className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[360px] md:h-[360px] lg:w-[720px] lg:h-[720px]">
              <Image
                src="/Group 151.svg"
                alt="청원농산 경영 철학 인포그래픽"
                fill
                className="object-contain"
                sizes="(min-width:1024px) 720px, (min-width:768px) 360px, (min-width:640px) 280px, 200px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
