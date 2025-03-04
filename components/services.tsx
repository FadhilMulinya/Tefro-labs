"use client"

import { motion } from "framer-motion"
import { Code2, FileCode2, Smartphone, Bot, Palette, Gamepad2, ShieldCheck, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: <Code2 className="h-10 w-10 text-primary" />,
    title: "DApp Development",
    description: "Build decentralized applications with robust, scalable, and user-friendly interfaces.",
  },
  {
    icon: <FileCode2 className="h-10 w-10 text-primary" />,
    title: "Smart Contract Development",
    description: "Design and implement secure, efficient smart contracts tailored for your blockchain applications.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Web/Mobile App Development",
    description: "Develop responsive, high-performance web applications that drive your business forward.",
  },
  {
    icon: <Bot className="h-10 w-10 text-primary" />,
    title: "Telegram Bots & Apps",
    description: "Deliver tailor-made software solutions that address your unique business challenges.",
  },
  {
    icon: <Palette className="h-10 w-10 text-primary" />,
    title: "UI/UX Design",
    description: "Create intuitive and aesthetically pleasing interfaces that enhance user experiences.",
  },
  {
    icon: <Gamepad2 className="h-10 w-10 text-primary" />,
    title: "Game Development",
    description: "Craft immersive gaming experiences with cutting-edge technology and engaging gameplay.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Security Research & Audits",
    description: "Comprehensive security audits to ensure your blockchain applications are robust and secure.",
  },
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-primary text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Comprehensive Web3 Development Solutions</h2>
          <p className="text-lg text-gray-600">
            We offer a full range of blockchain development services to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-hover"
            >
              <Card className="h-full border border-gray-100 shadow-sm bg-white overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-lg mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent"
                  >
                    Learn more <ArrowRight size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

