"use client";
import Image from "next/image";

export default function CompanyValues() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        {/* 중앙 원형 인포그래픽 이미지 */}
        <div className="relative flex flex-col items-center">
          {/* 원형 이미지: SVG에 텍스트가 포함되어 있음 */}
          <div className="relative w-[360px] h-[360px] lg:w-[720px] lg:h-[720px]">
            <Image
              src="/Group 151.svg"
              alt="청원농산 경영 철학 인포그래픽"
              fill
              className="object-contain"
              sizes="(min-width:1024px) 720px, 360px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
