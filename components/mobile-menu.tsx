"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const menuItems = [
  { name: "기업소개", href: "#" },
  { name: "제품소개", href: "#" },
  { name: "Contact", href: "#" },
  { name: "Media", href: "#" },
  { name: "ESG", href: "#" },
]

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-t shadow-lg z-50">
          <nav className="flex flex-col py-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-6 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 font-bold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}
