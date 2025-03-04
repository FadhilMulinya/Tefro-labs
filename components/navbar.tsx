"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">Tefro Labs</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#products" className="text-sm text-gray-300 hover:text-white transition-colors">
              Products
            </Link>
            <Link href="#blog" className="text-sm text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="#security" className="text-sm text-gray-300 hover:text-white transition-colors">
              Security
            </Link>
            <Link href="#jobs" className="text-sm text-gray-300 hover:text-white transition-colors">
              Jobs
            </Link>
 

          </nav>

          <div className="hidden md:flex items-center">
          <a
  href="https://calendly.com/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    size="sm"
    className="text-[#22c55e] border-[#22c55e] hover:bg-[#22c55e] hover:text-white rounded-full px-4"
  >
    Book a Call
  </Button>
</a>

          </div>
        </div>
      </div>
    </header>
  )
}

