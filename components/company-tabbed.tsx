"use client";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import CompanyIntro from "@/components/company-intro";
import CompanyCEO from "@/components/company-ceo";
import CompanyHistory from "@/components/company-history";

function CompanyLocation() {
  const NAVER_MAP_IFRAME_URL =
    "https://map.naver.com/p/search/%EC%B2%AD%EC%9B%90%EB%86%8D%EC%82%B0/place/32812069?placePath=/home?entry=pll&from=map&fromNxList=true&fromPanelNum=2&timestamp=202508120205&locale=ko&svcName=map_pcv5&searchText=%EC%B2%AD%EC%9B%90%EB%86%8D%EC%82%B0&searchType=place&c=15.04,0,0,0,dh";

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 pt-6 sm:pt-10 pb-12 sm:pb-16">
        {/* 지도 임베드 */}
        <div className="w-full mx-auto rounded-xl sm:rounded-2xl overflow-hidden">
          <iframe
            title="오시는 길 - 네이버 지도"
            src={NAVER_MAP_IFRAME_URL}
            className="w-full h-[300px] sm:h-[400px] md:h-[520px] lg:h-[600px] border-0"
            style={{ border: "none" }}
            loading="lazy"
          />
        </div>

        {/* 주소 / 연락처 */}
        <div className="mt-6 sm:mt-8 max-w-[900px] mx-auto">
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-slate-900">
                주소
              </h3>
              <p className="mt-2 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-slate-900 leading-relaxed">
                인천광역시 남동구 능허대로 625번길 118 (주)청원농산
              </p>
            </div>
            <div>
              <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-slate-900">
                전화번호
              </h3>
              <p className="mt-2 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-slate-900 leading-relaxed">
                032-818-4168
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function CompanyInquiry() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 py-8 sm:py-12">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">문의</h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">문의 폼 또는 연락처가 여기에 들어갑니다.</p>
      </div>
    </section>
  );
}

const TABS = [
  { key: "intro", label: "청원농산 소개" },
  { key: "ceo", label: "CEO 인사말" },
  { key: "history", label: "연혁" },
  { key: "location", label: "오시는 길" },
  { key: "inquiry", label: "문의" },
] as const;

export default function CompanyTabbed() {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();
  const tabFromUrl = sp.get("tab") ?? "intro";
  const [active, setActive] = useState<string>(tabFromUrl);

  // URL -> state 동기화
  useEffect(() => {
    if (tabFromUrl !== active) setActive(tabFromUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tabFromUrl]);

  // state -> URL 동기화 (shallow replace)
  const onSelect = (key: string) => {
    setActive(key);
    const q = new URLSearchParams(sp.toString());
    q.set("tab", key);
    router.replace(`${pathname}?${q.toString()}`, { scroll: false });
  };

  const Content = useMemo(() => {
    switch (active) {
      case "intro":
        return <CompanyIntro />;
      case "ceo":
        return <CompanyCEO />;
      case "history":
        return <CompanyHistory />;
      case "location":
        return <CompanyLocation />;
      case "inquiry":
        return <CompanyInquiry />;
      default:
        return <CompanyIntro />;
    }
  }, [active]);

  return (
    <>
      {/* Tabs (Figma pill style) */}
      <div className="w-full bg-white">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="flex items-center justify-center py-4 sm:py-6">
            {/* 모바일: grid로 3개 2개 정확히 배치 */}
            <div className="md:hidden grid grid-cols-3 gap-2 w-full max-w-sm">
              {TABS.map((t) => {
                const activeTab = active === t.key;
                return (
                  <button
                    key={t.key}
                    onClick={() => onSelect(t.key)}
                    className={[
                      "px-2 py-2.5 rounded-lg text-[10px] sm:text-[11px] font-semibold tracking-[-0.01em] transition text-center",
                      activeTab
                        ? "bg-emerald-500 text-white shadow-[0_2px_0_rgba(0,0,0,0.04)]"
                        : "bg-[#EFF2F5] text-slate-700 hover:text-slate-900",
                    ].join(" ")}
                    aria-current={activeTab ? "page" : undefined}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
            
            {/* 데스크톱: 가로 배치 */}
            <div className="hidden md:inline-flex items-center gap-1 sm:gap-2 rounded-full bg-[#EFF2F5] px-1 sm:px-2 py-1 sm:py-2">
              {TABS.map((t) => {
                const activeTab = active === t.key;
                return (
                  <button
                    key={t.key}
                    onClick={() => onSelect(t.key)}
                    className={[
                      "px-3 sm:px-4 md:px-6 h-[40px] sm:h-[44px] md:h-[48px] rounded-full text-[14px] sm:text-[16px] md:text-[18px] font-semibold tracking-[-0.01em] transition shadow-none whitespace-nowrap flex-shrink-0",
                      activeTab
                        ? "bg-emerald-500 text-white shadow-[0_2px_0_rgba(0,0,0,0.04)]"
                        : "text-[#2E3A49] hover:text-slate-900",
                    ].join(" ")}
                    aria-current={activeTab ? "page" : undefined}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Selected content */}
      {Content}
    </>
  );
}
