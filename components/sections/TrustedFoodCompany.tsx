"use client";

import Image from "next/image";

type FeatureProps = {
  title: string;
  body: string[];
  imagePosition?: "left" | "right";
  textAlign?: "left" | "center"; // NEW: control text alignment per section
  imageSrc: string; // NEW: image source prop
  imageAlt: string; // NEW: image alt text prop
};

function FeatureBlock({
  title,
  body,
  imagePosition = "left",
  textAlign = "left",
  imageSrc,
  imageAlt,
}: FeatureProps) {
  const isCenter = textAlign === "center";

  const ImageBox = (
    <div
      className="
        relative rounded-2xl overflow-hidden shadow-sm bg-slate-200
        w-full max-w-[560px] aspect-square
        lg:w-[560px] lg:h-[560px]
        mx-auto lg:mx-0
        order-2 lg:order-none
      "
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(min-width:1024px) 560px, 100vw"
      />
    </div>
  );

  const TextCol = (
    <div
      className={[
        // 높이 매칭: 데스크톱에서만 이미지(560)와 동일 높이로 수직 중앙 정렬
        "lg:min-h-[560px] lg:flex lg:flex-col lg:justify-center",
        // 폭: 피그마 텍스트 박스 638px
        "max-w-[638px]",
        // 왼쪽/가운데 정렬
        isCenter ? "text-center mx-auto" : "text-left",
        // 좌우 여백 조정
        imagePosition === "left" ? "lg:pl-6" : "lg:pr-6",
        // 모바일에서 이미지 다음에 본문이 오도록 순서 지정
        "order-3 lg:order-none",
      ].join(" ")}
    >
      <h2
        className={[
          "text-2xl md:text-3xl font-semibold tracking-tight",
          isCenter ? "mb-6" : "mb-5",
          "text-slate-900",
          // 모바일에서는 상단에 별도로 타이틀을 노출하므로 숨김
          "hidden lg:block",
        ].join(" ")}
      >
        {title}
      </h2>

      {/* 본문: 20px / line-height 32px / 컬러 #4B5563 */}
      <div className="space-y-4 text-[20px] leading-8 text-[#4B5563]">
        {body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );

  // grid: 데스크톱에서 560 고정 + 가변, 모바일은 스택
  const gridTemplate =
    imagePosition === "left"
      ? "lg:[grid-template-columns:560px_1fr]"
      : "lg:[grid-template-columns:1fr_560px]";

  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        {/* 모바일 전용 타이틀: 제목 → 이미지 → 본문 순서를 위해 분리 */}
        <h2
          className={[
            "text-2xl md:text-3xl font-semibold tracking-tight text-slate-900",
            isCenter ? "mb-6" : "mb-5",
            "block lg:hidden",
          ].join(" ")}
        >
          {title}
        </h2>
        <div className={`flex flex-col gap-10 items-stretch lg:grid ${gridTemplate}`}>
          {imagePosition === "left" ? (
            <>
              {ImageBox}
              {TextCol}
            </>
          ) : (
            <>
              {TextCol}
              {ImageBox}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default function TrustedFoodCompany() {
  return (
    <section id="trusted-company" className="bg-white">
      {/* Intro title */}
      <div className="py-16 md:py-20 text-center">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
            신뢰받는 식품 전문 기업
          </h1>
          <p className="mt-4 max-w-[760px] mx-auto text-slate-600 leading-relaxed">
            30년의 경험과 노하우로 안전하고 맛있는 식품을 생산하며,
            지속가능한 미래 식품 산업을 선도합니다.
          </p>
        </div>
      </div>

      {/* 1) 식품의 안전한 품질관리 */}
      <FeatureBlock
        title="식품의 안전한 품질관리"
        imagePosition="left"
        imageSrc="https://d1tlu55vk9m9db.cloudfront.net/productmanage.webp"
        imageAlt="식품 품질관리 시스템 - 청원농산의 체계적인 품질관리 프로세스"
        body={[
          "(주)청원농산은 원료의 직수입 및 직접 수매 단계부터 생산·출고에 이르기까지 전 과정을 철저히 위생적이고 청결하게 관리하고 있습니다.",
          "모든 임직원이 안전한 공정 유지에 최선을 다하고 있으며, 제품 또한 자가품질검사를 통해 신뢰성과 안전성을 확보하고 있습니다.",
        ]}
      />

      {/* 2) 친환경 생산 */}
      <FeatureBlock
        title="친환경 생산"
        imagePosition="right"
        textAlign="left"   // Changed to left alignment
        imageSrc="https://d1tlu55vk9m9db.cloudfront.net/goodproduct.webp"
        imageAlt="친환경 식품 생산 - 자연에서 온 건강한 도토리 등 천연 식재료"
        body={[
          "옛말에 \"도토리는 들판을 보고 자란다\"는 속담이 있습니다. 흉년 시절 배고픔을 달래주던 구황식물이자, 재배가 불가능한 자연의 순수한 선물인 도토리는 그 자체로 소중한 자원입니다.",
          "저희는 도토리 생산 과정에서 발생하는 부산물까지 사료로 활용하여 자원 낭비를 최소화하고, 부자재 또한 친환경 소재를 사용합니다. 사람과 환경이 함께 건강해질 수 있는 지속 가능한 방식으로 나아가겠습니다.",
        ]}
      />

      {/* 3) 혁신적 연구개발 */}
      <FeatureBlock
        title="혁신적 연구개발"
        imagePosition="left"
        imageSrc="https://d1tlu55vk9m9db.cloudfront.net/productdevelop.webp"
        imageAlt="혁신적 연구개발 - 청원농산의 식품 연구개발 시설과 기술"
        body={[
          "(주)청원농산은 수백 년간 이어온 한국 전통푸드의 지혜와 건강함을 현대 식문화 속에서 재해석하고자 끊임없는 연구개발에 집중하고 있습니다.",
          "단순한 재현을 넘어, 전통 식재료와 조리법을 기반으로 현대인의 라이프스타일에 맞는 고부가가치 제품을 개발하고 있으며, 데이터 기반의 품질 개선을 통해 기능성과 편의성, 안전성까지 모두 갖춘 제품으로 발전시키고 있습니다.",
          "전통 도토리묵, 올방개, 청포, 동부, 메밀 등 자연에서 온 건강 식재료를 바탕으로 한 우리의 연구개발은, 발효 기술, 건조 및 장기 보존기술 등 식품과학과 전통의 융합을 통해 새로운 식문화를 창조해 나갑니다.",
          "우리는 전통의 깊이를 존중하되 미래의 식품 기준을 선도하는 기업으로서의 책임을 다하며, 국내외 소비자에게 전통의 가치를 담은 혁신 식품을 지속적으로 선보이겠습니다.",
        ]}
      />
    </section>
  );
}
