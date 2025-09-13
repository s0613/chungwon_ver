"use client";
import Image from "next/image";

const paragraphs = [
  "안녕하십니까.\n저희 회사를 찾아주신 모든 분들께 진심으로 감사의\n말씀을 드립니다.",
  "저희 브랜드 \"해다뜰\"은 자연을 그대로,\n정직하게 담는다는 신념 아래 출발했습니다.",
  "자연에 대한 존중과 사람에 대한 책임을 가장 소중한\n가치로 삼아, 친환경 제품을 만들고 있습니다.",
  "또한 옛 추억이 담긴 전통 식품을 현대적 위생 기준에\n맞추어 재해석하고, 현대인의 입맛에 맞는 건강한\n제품으로 발전시켜 왔습니다.",
  "앞으로도 연구와 혁신을 통해 가치 있는 식문화를\n선도하고, 고객 여러분의 기대에 부응하는 기업이\n되겠습니다.",
  "감사합니다.",
];

export default function CompanyCEO() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 pt-10 pb-16">
        {/* 섹션 제목 - 중앙정렬 */}
        <h2 className="text-center text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-extrabold tracking-[-0.02em] text-slate-900">
          CEO 인사말
        </h2>

        {/* 본문 블록 - 중앙 배치 (그리드) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-[360px_681px] gap-10 md:gap-12 place-content-center">
          {/* Left: 이미지 카드 */}
          <div className="justify-self-center md:justify-self-end">
            <div className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px] rounded-2xl bg-slate-200/70 overflow-hidden shadow-sm">
              <Image
                src="/ceohello.webp"
                alt="CEO 인사말"
                fill
                sizes="(min-width:768px) 360px, 300px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right: 텍스트 박스 (가운데 정렬 컨테이너 + 가독성 위해 내부 텍스트는 좌정렬 유지) */}
          <article className="justify-self-start md:justify-self-start md:max-w-[681px] mx-auto">
            <div className="space-y-6 text-[#4B5563] text-[16px] sm:text-[18px] md:text-[20px] leading-[1.6] sm:leading-8 text-left">
              {paragraphs.map((p, i) => (
                <p key={i} className="whitespace-pre-line">{p}</p>
              ))}
              {/* 서명 - 복원 & 표시 보장 (중앙정렬 요구에 맞춰 center) */}
              <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[1.6] sm:leading-8 text-center font-normal mt-4 text-[#4B5563]">
                (주)청원농산 대표이사 최종환
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

