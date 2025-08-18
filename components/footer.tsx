import Link from "next/link"
import Image from "next/image"

export default function Footer() {

  return (
    <footer className="bg-[#0F1113] text-gray-300">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8">
        {/* TOP: Logo + policy links */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <div className="w-24 h-16">
              <Image
                src="/logo.svg"
                alt="청원농산 로고"
                width={96}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">개인정보처리방침</Link>
            <Link href="#" className="hover:text-white transition-colors">영상정보처리기기 운용·관리 방침</Link>
          </div>
        </div>

        {/* MIDDLE: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          {/* left address column */}
          <div className="space-y-2 text-xs text-gray-400">
            <p>
              주소: (21697) 인천광역시 남동구 능허대로 625번길 118(고잔동)
            </p>
            <p>
              TEL: 032-818-4168 <span className="ml-3">FAX:</span>
            </p>
          </div>

          {/* right company info column */}
          <div className="space-y-2 text-xs text-gray-400 md:col-start-4">
            <p className="font-medium text-white">청원농산</p>
            <p>대표: 최종환</p>
            <p>사업자등록번호: 131-86-64578</p>
            <p>이메일: chungwon0915@naver.com</p>
          </div>
        </div>

        {/* BOTTOM: copyright + socials */}
        <div className="mt-6 border-t border-white/10 pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-xs text-gray-500">
            Copyright © 2025 CHUNGWON. All Right Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}
