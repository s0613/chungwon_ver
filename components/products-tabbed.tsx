"use client";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const CATEGORIES = [
  { key: "all",   label: "전체" },
  { key: "raw",   label: "원두" },
  { key: "powder",label: "전분·가루" },
  { key: "ready", label: "간편식품" },
  { key: "sauce", label: "소스·육수" },
] as const;

export default function ProductsTabbed() {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const fromUrl = sp.get("cat") ?? "all";
  const [active, setActive] = useState<string>(fromUrl);

  useEffect(() => {
    if (fromUrl !== active) setActive(fromUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fromUrl]);

  const onSelect = (key: string) => {
    setActive(key);
    const q = new URLSearchParams(sp.toString());
    q.set("cat", key);
    router.replace(`${pathname}?${q.toString()}`, { scroll: true });
  };

  // 아직 데이터가 없으므로 카테고리별로 같은 빈 레이아웃을 보여줌
  const Content = useMemo(() => <EmptyGrid category={active} />, [active]);

  return (
    <>
      {/* pill tabs */}
      <div className="w-full bg-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="flex items-center justify-center py-4 sm:py-6">
            {/* 모바일: grid로 3개 2개 정확히 배치 */}
            <div className="md:hidden grid grid-cols-3 gap-2 w-full max-w-sm">
              {CATEGORIES.map((c) => {
                const isActive = active === c.key;
                return (
                  <button
                    key={c.key}
                    onClick={() => onSelect(c.key)}
                    className={[
                      "px-2 py-2.5 rounded-lg text-[10px] sm:text-[11px] font-semibold tracking-[-0.01em] transition text-center",
                      isActive
                        ? "bg-emerald-500 text-white shadow-[0_2px_0_rgba(0,0,0,0.04)]"
                        : "bg-[#EFF2F5] text-slate-700 hover:text-slate-900",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
            
            {/* 데스크톱: 가로 배치 */}
            <div className="hidden md:inline-flex items-center gap-1 sm:gap-2 rounded-full bg-[#EFF2F5] px-1 sm:px-2 py-1 sm:py-2">
              {CATEGORIES.map((c) => {
                const isActive = active === c.key;
                return (
                  <button
                    key={c.key}
                    onClick={() => onSelect(c.key)}
                    className={[
                      "px-3 sm:px-4 md:px-6 h-[40px] sm:h-[44px] md:h-[48px] rounded-full text-[14px] sm:text-[16px] md:text-[18px] font-semibold tracking-[-0.01em] transition whitespace-nowrap flex-shrink-0",
                      isActive
                        ? "bg-emerald-500 text-white shadow-[0_2px_0_rgba(0,0,0,0.04)]"
                        : "text-[#2E3A49] hover:text-slate-900",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {c.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* content area */}
      {Content}
    </>
  );
}

function EmptyGrid({ category }: { category: string }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 pt-6 sm:pt-10 pb-16 sm:pb-24">
        {/* 향후 카드가 들어올 그리드 영역: 지금은 빈 상태 */}
        <div className="min-h-[300px] sm:min-h-[420px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 place-items-center">
          <div className="col-span-full w-full rounded-xl sm:rounded-2xl border border-dashed border-slate-300 py-12 sm:py-20 text-center text-slate-400">
            <p className="text-[14px] sm:text-[16px] md:text-[18px] px-4">
              '{category}' 카테고리의 제품이 여기에 표시됩니다. (데이터 연결 전, 레이아웃만 구성)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
