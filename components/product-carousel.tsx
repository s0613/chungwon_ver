"use client";

import Image from "next/image";

const productCategories = [
  {
    id: 1,
    image: "/product3.png",
    name: "묵의 주원료",
    sizes: ["500g", "1kg", "Bulk"],
  },
  {
    id: 2,
    image: "/product1.png",
    name: "간편하게 만드는 조리 식품",
    sizes: ["500g", "800g", "1kg", "Bulk"],
  },
  {
    id: 3,
    image: "/product2.png",
    name: "간편하게 만드는 조리 식품",
    sizes: ["400g", "2kg"],
  },
  {
    id: 4,
    image: "/product5.png",
    name: "건강한 재료로 만든 간편 식품",
    sizes: ["250g", "500g", "Bulk"],
  },
  {
    id: 5,
    image: "/product4.png",
    name: "더 맛있게 즐기는 소스",
    sizes: ["250g", "600g"],
  },
];

export default function ProductCategories() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            주요 제품군
          </h2>
          <p className="text-slate-600">
            다양한 카테고리의 고품질 식품을 생산합니다
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {productCategories.map((product) => (
            <div key={product.id} className="text-center">
              {/* Image */}
              <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 shadow-md">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Name */}
              <h4 className="text-sm font-medium text-slate-700 mb-4">
                {product.name}
              </h4>
              {/* Size pills */}
              <div className="flex flex-col items-center gap-2">
                {product.sizes.map((size, idx) => (
                  <span
                    key={idx}
                    className="bg-[#4ADE80] text-slate-900 px-4 py-1 rounded-full text-sm font-medium"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
