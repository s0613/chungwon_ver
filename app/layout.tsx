import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "청원농산 - 자연 그대로의 건강한 식품",
  description: "첨가물 없이 자연 그대로를 담은 정원농산의 건강한 식품을 만나보세요",
  generator: 'v0.dev',
  icons: {
    icon: '/chunwonfavicon.svg',
    shortcut: '/chunwonfavicon.svg',
    apple: '/chunwonfavicon.svg',
  },
  verification: {
    other: {
      'naver-site-verification': '881c36006c9b69d6376d9921b6c14c99e35ea8d3',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
