"use client";

import Image from "next/image";

const productCategories = [
  {
    id: 1,
    image: "https://d1tlu55vk9m9db.cloudfront.net/product3.webp",
    name: "주원료",
    sizes: ["10kg", "20kg", "40kg"],
  },
  {
    id: 2,
    image: "https://d1tlu55vk9m9db.cloudfront.net/product1.webp",
    name: "도토리가루(국산, 국내가공, 수입)",
    sizes: ["500g", "800g", "1kg", "Bulk"],
    link: "https://smartstore.naver.com/thedream0807food/products/10393868175",
  },
  {
    id: 3,
    image: "https://d1tlu55vk9m9db.cloudfront.net/product2.webp",
    name: "말린 묵(건조묵, 밥도토리)",
    sizes: ["250g", "500g", "Bulk"],
    link: "https://smartstore.naver.com/thedream0807food/products/10473345729",
  },
  {
    id: 4,
    image: "https://d1tlu55vk9m9db.cloudfront.net/product5.webp",
    name: "묵",
    sizes: ["400g", "2kg"],
    link: "https://smartstore.naver.com/thedream0807food/products/10361524571",
  },
  {
    id: 5,
    image: "https://d1tlu55vk9m9db.cloudfront.net/product4.webp",
    name: "소스",
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
              {product.link ? (
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity"
                >
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
                        className="bg-[#C8D8CD] text-slate-700 px-4 py-1 rounded-full text-sm font-medium"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </a>
              ) : (
                <>
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
                        className="bg-[#C8D8CD] text-slate-700 px-4 py-1 rounded-full text-sm font-medium"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
