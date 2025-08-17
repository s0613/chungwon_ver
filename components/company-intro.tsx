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
            청원농산은 묵 원료인 앙금을 제조하여 묵공장에 공급하는 일로 시작했습니다.
이제는 전분과 묵 제품을 직접 소비자께 선보이며, 가정의 식탁 어디서나 만나실 수 있게 되었습니다.
          </p>
          <p>
            우리나라의 전통식품을 젊은 세대에도 친숙하게 전하고,
더 많은 분들이 건강하고 맛있게 즐길 수 있도록 노력하겠습니다.
          </p>
          <p>
            전통의 맛과 정성을 담아,
청원농산이 여러분과 함께하겠습니다.
          </p>
        </div>

        {/* 상단 작은 이미지: 560x420 카드 */}
        <div className="mt-4 sm:mt-6">
          <div className="relative w-full max-w-[560px] h-[200px] sm:h-[280px] md:h-[350px] lg:h-[420px] rounded-xl sm:rounded-2xl bg-slate-200/70 shadow-sm">
            <Image
              src="/chungwon3.png"
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
          <div className="relative w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[420px] rounded-xl sm:rounded-2xl bg-slate-200/70 shadow-sm">
            {/* 동영상 플레이어 또는 플레이 버튼 */}
            <div className="absolute inset-0 grid place-items-center">
              <div className="flex flex-col items-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-0 h-0 border-l-[8px] sm:border-l-[12px] md:border-l-[16px] border-l-emerald-600 border-t-[6px] sm:border-t-[9px] md:border-t-[12px] border-t-transparent border-b-[6px] sm:border-b-[9px] md:border-b-[12px] border-b-transparent ml-0.5 sm:ml-1"></div>
                </div>
                <p className="text-slate-600 font-medium text-xs sm:text-sm md:text-base text-center px-2">청원농산 소개 동영상</p>
              </div>
            </div>
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
