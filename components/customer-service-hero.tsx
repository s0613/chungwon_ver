import Image from "next/image";

export default function CustomerServiceHero() {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/landing1.gif"
          alt="고객센터"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          고객센터
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto">
          궁금한 점이 있으시면 언제든 문의해 주세요
        </p>
      </div>
    </section>
  );
}
