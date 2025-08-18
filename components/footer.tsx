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
            <p>대표: 김영수</p>
            <p>사업자등록번호: 123-45-67890</p>
            <p>이메일: info@chungwon.com</p>
          </div>
        </div>

        {/* BOTTOM: copyright + socials */}
        <div className="mt-6 border-t border-white/10 pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="text-xs text-gray-500">
            Copyright © 2025 CHUNGWON. All Right Reserved
          </div>

          {/* social icons (blog / instagram / youtube) */}
          <div className="flex items-center gap-2">
            {/* Blog */}
            <Link href="#" aria-label="Blog"
              className="w-7 h-7 rounded-md bg-[#15C654] grid place-items-center hover:opacity-90 transition">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#0F1113"><rect x="4" y="4" width="16" height="16" rx="3" fill="white"/><circle cx="10" cy="12" r="2.5" fill="#15C654"/><rect x="13.5" y="9.5" width="4.5" height="5" rx="1" fill="#15C654"/></svg>
            </Link>
            {/* Instagram */}
            <Link href="#" aria-label="Instagram"
              className="w-7 h-7 rounded-md bg-gray-700 grid place-items-center hover:bg-gray-600 transition">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeOpacity=".8"/>
                <circle cx="12" cy="12" r="4" stroke="white" strokeOpacity=".8"/>
                <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
              </svg>
            </Link>
            {/* YouTube */}
            <Link href="#" aria-label="YouTube"
              className="w-7 h-7 rounded-md bg-gray-700 grid place-items-center hover:bg-gray-600 transition">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M22 12s0-3.5-.45-4.95c-.25-.86-.98-1.53-1.87-1.7C17.9 4 12 4 12 4s-5.9 0-7.68.35c-.89.17-1.62.84-1.87 1.7C2 8.5 2 12 2 12s0 3.5.45 4.95c.25.86.98 1.53 1.87 1.7C6.1 20 12 20 12 20s5.9 0 7.68-.35c.89-.17 1.62-.84 1.87-1.7C22 15.5 22 12 22 12Z"/>
                <path d="M10 9.5v5l4.5-2.5L10 9.5Z" fill="#0F1113"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
