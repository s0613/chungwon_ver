"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingCart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const menuItems = [
  { name: "기업소개", href: "/company" },
  { name: "제품소개", href: "/products" },
  { name: "지속가능경영", href: "/esg" },
  { name: "고객센터", href: "/customer-service" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const isActive = isScrolled || isHovered

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isActive 
          ? "bg-white/95 backdrop-blur-sm shadow-lg" 
          : "bg-transparent"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src={isActive ? "/logo_black.svg" : "/logo.svg"}
                alt="청원농산 로고"
                width={160}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            <div className="inline-flex h-[21px] justify-center items-center gap-[42px] flex-shrink-0">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`font-semibold text-lg transition-colors duration-300 hover:opacity-80 ${
                    isActive ? "text-gray-800" : "text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* SHOP Button */}
          <div className="hidden lg:flex items-center">
            <Link href="https://smartstore.naver.com/thedream0807food?NaPm=ct%3Dme7dwnw3%7Cci%3Dcheckout%7Ctr%3Dds%7Ctrx%3Dnull%7Chk%3D3d5c03078dd8e640fc2130076ec7a8658cfa19e2" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className={`font-semibold px-6 py-2 rounded-full border-2 transition-all duration-300 ${
                  isActive
                    ? "border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white"
                    : "border-white text-white hover:bg-white hover:text-gray-900"
                } bg-transparent`}
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                SHOP
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t bg-white">
            <nav className="flex flex-col py-4 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-3 text-gray-900 font-semibold hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
