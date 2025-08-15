"use client";
export default function CompanyGrid() {
  // 대형 비디오 프리뷰: 1200 x 420 (rounded-2xl)
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 pb-14">
        <div className="relative w-full h-[420px] rounded-2xl bg-slate-200/70 overflow-hidden shadow-sm">
          <button
            className="absolute inset-0 m-auto w-[64px] h-[64px] rounded-full bg-white/90 grid place-items-center shadow"
            onClick={() => alert("Video preview")}
            aria-label="play"
          >
            <span className="block border-l-[14px] border-y-[9px] border-y-transparent border-l-slate-500 ml-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
