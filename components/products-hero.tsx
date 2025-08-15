"use client";

export default function ProductsHero() {
  return (
    <section className="w-full bg-[#D9DEE6]">
      <div className="mx-auto max-w-[1200px] h-[360px] md:h-[420px] flex flex-col items-center justify-center px-6 text-center">
        <h1 className="text-white/95 text-[28px] md:text-[32px] font-extrabold tracking-[-0.02em]">
          주식회사 청원농산은
        </h1>
        <p className="text-white/95 text-lg md:text-2xl font-light">다양한 제품군으로 구성되어 있습니다</p>
      </div>
    </section>
  );
}
