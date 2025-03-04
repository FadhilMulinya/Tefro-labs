"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { BookCallDialog } from "./book-call-dialog"
import { ArrowRight } from "lucide-react"

export default function BookCall() {
  return (
    <section className="section-padding bg-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-4xl mx-auto text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">
            Ready to Build Your Web3 Future?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can transform your blockchain vision into reality in just 4-6 weeks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <BookCallDialog>
              <Button size="lg" className="rounded-md px-8 bg-white text-primary hover:bg-white/90 btn-hover-slide">
                Schedule a Free Consultation
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </BookCallDialog>

            <Button size="lg" variant="outline" className="rounded-md px-8 text-white border-white hover:bg-white/10">
              View Our Projects
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

