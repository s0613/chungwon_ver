"use client";
const tabs = ["청원농산 소개","CEO 인사말","연혁","오시는 길","문의"];
export default function CompanyTabs() {
  return (
    <div className="w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex items-center justify-center py-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EFF2F5] px-2 py-2">
            {tabs.map((t, i) => {
              const active = i === 0;
              return (
                <button
                  key={t}
                  className={[
                    "px-5 h-[42px] rounded-full text-[15px] font-semibold tracking-[-0.01em] transition",
                    active
                      ? "bg-emerald-500 text-white shadow-[0_2px_0_rgba(0,0,0,0.04)]"
                      : "text-slate-700 hover:text-slate-900",
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
