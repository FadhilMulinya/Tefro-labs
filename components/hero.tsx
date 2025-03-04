"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen relative flex items-center justify-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#0A0A0B] via-[#1A1A2E] to-[#0A0A0B] opacity-95">
        <div className="absolute inset-0 animate-gradient-rotate bg-[length:400%_400%] bg-gradient-to-r from-transparent via-[#00ff8820] to-transparent" />
      </div>

      {/* Floating grid pattern */}
      <div className="absolute inset-0 w-full h-full bg-grid-pattern opacity-10" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center space-y-8"
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-7xl md:text-9xl font-bold leading-tight"
            >
              <div className="flex flex-wrap justify-center items-center">
                <div className="px-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">From</div>
                <div className="px-4 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 text-transparent">Idea</div>
              </div>
              
              <div className="my-2 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">To MVP In</div>
              
              <div className="flex flex-wrap justify-center items-baseline">
                <motion.div 
                  className="relative px-4"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <div className="relative inline-block">
  <span className="relative text-white">Weeks</span>
  <svg
    className="absolute left-0 bottom-0 w-full"
    viewBox="0 0 100 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5,5 C20,10 80,10 95,5"
      stroke="#ffcc00"
      strokeWidth="3"
      fill="transparent"
      strokeLinecap="round"
    />
  </svg>
</div>

                </motion.div>
                
                <div className="px-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Not</div>
                
                <motion.div 
                  className="relative px-4"
                  animate={{ rotate: [-1, 1, -1] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                >
                  <span className="text-red-400 drop-shadow-[0_0_8px_rgba(255,50,50,0.6)] text-8xl md:text-10xl">
                    Months
                  </span>
                </motion.div>
              </div>
            </motion.h1>
          </div>

          <motion.div 
            className="max-w-3xl mx-auto space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-2xl md:text-3xl text-gray-300 font-light leading-relaxed">
            We build secure and scalable Web3 and blockchain products, tailored to your business needs by our team of experts
            </p>
            
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-emerald-500 blur-2xl opacity-30" />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="relative bg-gradient-to-r from-blue-600 to-emerald-600 text-white text-xl px-12 py-7 rounded-2xl border-2 border-[#ffffff20] hover:border-[#ffffff40] transition-all"
                >
                  Explore Next-Gen Solutions
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Animated floating elements */}
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-emerald-400 rounded-full animate-float" />
          <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-blue-400 rounded-full opacity-50 animate-float-delayed" />
        </motion.div>
      </div>

      {/* Animated scanline overlay */}
      <div className="absolute inset-0 bg-scanlines opacity-20 pointer-events-none" />
    </section>
  )
}