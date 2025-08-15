"use client";
import Image from "next/image";

const paragraphs = [
  "(주)청원농산은 자연의 순수함과 전통의 깊이를\n담아, 정직한 식품을 위해 노력하고 있습니다.",
  "안녕하십니까.\n저희 회사를 찾아주신 모든 분들께 깊은 감사의\n말씀을 드립니다.",
  "저희는 '자연을 그대로, 정직하게 담다'라는 철학을\n바탕으로 도토리묵과 전통 곡물 식품을 정성껏\n만들어가는 식품 제조 전문기업입니다.",
  "도토리 원두를 직접 선별하고, 가공과 건조를 거쳐\n도토리 전분, 도토리묵, 건조묵에 이르기까지 전통의\n깊은 맛과 현대적 위생 기준을 조화롭게 담아내기\n위해 노력하고 있습니다. 더불어 올방개, 메밀,\n청포, 동부 등의 곡물을 활용한 가루 식품과 즉석식품\n또한 정직하게 생산하고 있습니다.",
  "자연에 대한 존중과 사람에 대한 책임을 가장\n중요한 가치로 삼으며, 모든 공정은 철저한\n품질관리와 위생 기준 아래에서 이루어지고\n있습니다. 안전하고 믿을 수 있는 먹거리를\n제공함으로써, 국내를 넘어 세계인이 즐길 수 있는\n건강한 전통 푸드를 실현하고자 합니다.",
  "앞으로도 우리는 가치 있는 식문화를 선도하고,\n끊임없는 연구개발과 혁신으로 고객 여러분의\n기대에 부응하겠습니다.",
  "감사합니다.",
];

export default function CompanyCEO() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 pt-10 pb-16">
        {/* 섹션 제목 - 중앙정렬 */}
        <h2 className="text-center text-[22px] md:text-[24px] font-extrabold tracking-[-0.02em] text-slate-900">
          (주)청원농산은 자연의 순수함과 전통의 깊이를 담아, 정직한 식품을 위해 노력하고 있습니다.
        </h2>

        {/* 본문 블록 - 중앙 배치 (그리드) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-[360px_681px] gap-10 md:gap-12 place-content-center">
          {/* Left: 이미지 카드 */}
          <div className="justify-self-center md:justify-self-end">
            <div className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px] rounded-2xl bg-slate-200/70 overflow-hidden shadow-sm">
              <Image
                src="/ceo-placeholder.png"   // /public 경로에 파일이 없으면 placeholder.svg 복사해 두세요
                alt="CEO"
                fill
                sizes="(min-width:768px) 360px, 300px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right: 텍스트 박스 (가운데 정렬 컨테이너 + 가독성 위해 내부 텍스트는 좌정렬 유지) */}
          <article
            className="justify-self-start md:justify-self-start md:max-w-[681px] mx-auto"
            style={{ fontFamily: "Roboto, system-ui, -apple-system, Segoe UI, Noto Sans KR, sans-serif" }}
          >
            <div className="space-y-6 text-[#111827] md:text-[32px] md:leading-[48px] text-[18px] leading-[30px] tracking-[0] text-left">
              {paragraphs.map((p, i) => (
                <p key={i} className="whitespace-pre-line">{p}</p>
              ))}
              {/* 서명 - 복원 & 표시 보장 (중앙정렬 요구에 맞춰 center) */}
              <p className="md:text-[32px] md:leading-[48px] text-[18px] leading-[30px] text-center font-normal mt-4">
                (주)청원농산 대표이사 최종환
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

