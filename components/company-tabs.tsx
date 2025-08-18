"use client";
const tabs = ["청원농산 소개","CEO 인사말","연혁","오시는 길"];
export default function CompanyTabs() {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex items-center justify-center py-6">
          {/* 모바일: grid로 3개 2개 정확히 배치 */}
          <div className="md:hidden grid grid-cols-3 gap-2 w-full max-w-sm">
            {tabs.map((t, i) => {
              const active = i === 0;
              return (
                <button
                  key={t}
                  className={[
                    "px-2 py-2.5 rounded-lg text-[10px] sm:text-[11px] font-semibold tracking-[-0.01em] transition text-center",
                    active
                      ? "bg-emerald-500 text-white shadow-[0_2px_0_rgba(0,0,0,0.04)]"
                      : "bg-[#EFF2F5] text-slate-700 hover:text-slate-900",
                  ].join(" ")}
                >
                  {t}
                </button>
              );
            })}
          </div>
          
          {/* 데스크톱: 가로 배치 */}
          <div className="hidden md:inline-flex items-center gap-1 sm:gap-2 rounded-full bg-[#EFF2F5] px-1 sm:px-2 py-1 sm:py-2">
            {tabs.map((t, i) => {
              const active = i === 0;
              return (
                <button
                  key={t}
                  className={[
                    "px-3 sm:px-4 md:px-6 h-[40px] sm:h-[44px] md:h-[48px] rounded-full text-[14px] sm:text-[16px] md:text-[18px] font-semibold tracking-[-0.01em] transition shadow-none whitespace-nowrap flex-shrink-0",
                    active
                      ? "bg-emerald-500 text-white shadow-[0_2px_0_rgba(0,0,0,0.04)]"
                      : "text-[#2E3A49] hover:text-slate-900",
                  ].join(" ")}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
