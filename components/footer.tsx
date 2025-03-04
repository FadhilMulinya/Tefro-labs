import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0B] pt-16 pb-8 border-t border-[#ffffff10]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <h3 className="text-2xl font-bold font-heading bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                Tefro Labs
              </h3>
            </Link>
            <p className="text-gray-400 max-w-md mb-6">
              A Web3 development studio helping startups and founders build and ship blockchain products in 4-6 weeks.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#ffffff10] flex items-center justify-center text-gray-300 hover:bg-[#ffffff20] hover:text-white transition-all hover:scale-105"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#ffffff10] flex items-center justify-center text-gray-300 hover:bg-[#ffffff20] hover:text-white transition-all hover:scale-105"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#ffffff10] flex items-center justify-center text-gray-300 hover:bg-[#ffffff20] hover:text-white transition-all hover:scale-105"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:contact@tefrolabs.com"
                className="w-10 h-10 rounded-full bg-[#ffffff10] flex items-center justify-center text-gray-300 hover:bg-[#ffffff20] hover:text-white transition-all hover:scale-105"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Services
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  DApp Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Smart Contract Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Web/Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Security Research & Audits
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-emerald-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Blockchain Street, San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-emerald-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-emerald-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">contact@tefrolabs.com</span>
              </li>
            </ul>
            <Button className="mt-6 rounded-md bg-gradient-to-r from-blue-600 to-emerald-600 text-white hover:from-blue-700 hover:to-emerald-700 transition-all">
              Contact Us
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#ffffff10] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Tefro Labs. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Glowing Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-20" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] opacity-20" />
      </div>
    </footer>
  )
}