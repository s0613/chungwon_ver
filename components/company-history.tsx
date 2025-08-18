"use client";

type Item = { year: number; month: string; text: string };

const items: Item[] = [
  { year: 2002, month: "03", text: "용인시 유방동에서 출발" },
  { year: 2006, month: "00", text: "인천 남동공단 이전" },
  { year: 2007, month: "00", text: "한국 식품업체 대표로 일본 식품업체 교류단 참여" },
  { year: 2007, month: "10", text: "소포장 5종 세트 출시" },
  { year: 2008, month: "00", text: "공장 자동화 라인 구축" },
  { year: 2010, month: "00", text: "미국 소포장 제품 수출" },
  { year: 2010, month: "08", text: "남동구 고잔동 확장이전" },
  { year: 2012, month: "00", text: "묵가루 제품 전국 출시" },
];

export default function CompanyHistory() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 pt-10 pb-16">
        {/* 제목 - 중앙정렬 */}
        <h2 className="text-center text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] font-extrabold tracking-[-0.02em] text-slate-900">
          (주)청원농산의 걸어온 길, 다가갈 미래,<br className="hidden md:block" />
          전통과 혁신이 함께한 우리의 여정
        </h2>

        {/* 중앙 배치된 타임라인 컨테이너 */}
        <div className="mt-8 md:mt-12 mx-auto max-w-[900px]">
          <div className="space-y-6 md:space-y-7">
            {items.map((it, idx) => (
              <div
                key={idx}
                className="grid items-baseline grid-cols-[97px_60px_1fr] gap-x-[77px] justify-items-center"
              >
                {/* YEAR - company-ceo와 동일한 스타일 적용 */}
                <div
                  className="w-[97px] font-extrabold tabular-nums text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[1.25] tracking-[-0.02em] text-slate-900"
                >
                  {it.year}
                </div>
                {/* MONTH - company-ceo와 동일한 스타일 적용 */}
                <div className="tabular-nums text-slate-900 font-extrabold text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[1.25] tracking-[-0.02em]">
                  {it.month}
                </div>
                {/* TEXT - company-ceo와 동일한 스타일 적용 */}
                <div className="text-[#4B5563] text-[16px] sm:text-[18px] md:text-[20px] leading-[1.6] sm:leading-8">
                  {it.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
