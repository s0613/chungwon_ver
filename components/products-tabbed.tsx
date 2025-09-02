"use client";
import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const CATEGORIES = [
  { key: "raw",   label: "원두" },
  { key: "powder",label: "전분·가루" },
  { key: "ready", label: "간편식품" },
  { key: "sauce", label: "소스·육수" },
] as const;

// 제품 데이터 정의
const PRODUCTS = {
  raw: [
    {
      id: "chestnut",
      name: "상수리",
      image: "/product/상수리.webp", 
      description: "도토리 원료",
      category: "원두",
      sizes: ["10kg", "20kg", "Bulk"]
    },
    {
      id: "rice",
      name: "쌀 재롱이",
      image: "/product/쌀.webp",
      description: "도토리와 함께 넣는 부원료 곡물",
      category: "원두",
      sizes: ["10kg", "20kg", "Bulk"]
    },
    {
      id: "acorn",
      name: "도토리 앙금",
      image: "/product/도토리앙금.webp",
      description: "도토리와 쌀재롱이를 갈아 얻은 침전물",
      category: "원두",
      sizes: ["4kg", "10kg", "Bulk"]
    }
  ],
  powder: [
    {
      id: "domestic-acorn-powder",
      name: "국산 도토리가루",
      image: "/powder/국산도토리가루.webp",
      description: "국내산 도토리를 건조·정제해 만든 가루",
      category: "전분·가루",
      sizes: ["500g", "Bulk"]
    },
    {
      id: "domestic-processed-acorn-powder",
      name: "국내가공 도토리가루",
      image: "/powder/국내가공도토리가루.webp",
      description: "수입 도토리를 국내에서 100% 건조·정제해 만든 가루",
      category: "전분·가루",
      sizes: ["500g", "800g", "2kg", "Bulk"]
    },
    {
      id: "imported-acorn-powder",
      name: "수입 도토리가루",
      image: "/powder/수입도토리가루.webp",
      description: "수입한 도토리를 건조·정제해 만든 가루",
      category: "전분·가루",
      sizes: ["500g", "1kg", "2kg", "Bulk"]
    },
    {
      id: "water-chestnut-starch",
      name: "올방개 전분",
      image: "/powder/올방개가루.webp",
      description: "올방개 열매에서 얻은 고소한 맛의 전분",
      category: "전분·가루",
      sizes: ["500g", "800g", "1kg", "Bulk"]
    },
    {
      id: "cowpea-starch",
      name: "동부 전분",
      image: "/powder/동부묵가루.webp",
      description: "동부콩을 갈아 만든 전통 전분",
      category: "전분·가루",
      sizes: ["500g", "1kg", "Bulk"]
    },
    {
      id: "mung-bean-starch",
      name: "청포 전분",
      image: "/powder/청포묵가루.webp",
      description: "녹두에서 전분을 추출해 만든 전분",
      category: "전분·가루",
      sizes: ["500g", "1kg", "Bulk"]
    },
    {
      id: "buckwheat-starch",
      name: "메밀 전분",
      image: "/powder/메밀묵가루.webp",
      description: "담백하고 부드러운 식감을 내는 메밀가루 전분",
      category: "전분·가루",
      sizes: ["500g", "1kg", "Bulk"]
    }
  ],
  ready: [
    {
      id: "dried-muk",
      name: "건조묵",
      image: "/simple/건조묵.webp",
      description: "보관과 조리가 편리하도록 건조시킨 묵",
      category: "간편식품",
      sizes: ["500g", "5kg", "Bulk"]
    },
    {
      id: "acorn-muk",
      name: "도토리묵",
      image: "/simple/도토리묵.webp",
      description: "도토리 전분을 끓여 굳힌 고소한 전통 묵",
      category: "간편식품",
      sizes: ["400g", "2kg"]
    },
    {
      id: "cowpea-muk",
      name: "동부묵",
      image: "/simple/동부묵.webp",
      description: "동부콩 전분으로 만든 쫄깃한 묵",
      category: "간편식품",
      sizes: ["400g", "2kg"]
    }
  ],
  sauce: [
    {
      id: "soy-sauce",
      name: "간장소스",
      image: "/source/간장소스.webp",
      description: "묵과 함께 곁들이는 특제 양념 소스",
      category: "소스·육수",
      sizes: ["60ml"]
    },
    {
      id: "broth",
      name: "육수",
      image: "/source/도토리묵밥.webp",
      description: "시원하고 깔끔한 맛을 살린 냉면 육수",
      category: "소스·육수",
      sizes: ["350ml"]
    }
  ]
};

export default function ProductsTabbed() {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const fromUrl = sp.get("cat") ?? "raw";
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

  // 카테고리별 콘텐츠 렌더링
  const Content = useMemo(() => {
    const products = PRODUCTS[active as keyof typeof PRODUCTS] || [];
    
    if (products.length === 0) {
      return <EmptyGrid category={active} />;
    }
    
    return <ProductGrid products={products} />;
  }, [active]);

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

// 제품 카드 컴포넌트
function ProductCard({ product }: { product: any }) {
  return (
    <div className="group relative bg-white rounded-lg overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="aspect-square relative overflow-hidden bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-medium text-gray-900 mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3">
          {product.description}
        </p>
        {product.sizes && (
          <div className="flex flex-wrap gap-1">
            {product.sizes.map((size: string, index: number) => (
              <span
                key={index}
                className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-sm"
              >
                {size}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// 제품 그리드 컴포넌트
function ProductGrid({ products }: { products: any[] }) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 pt-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
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
