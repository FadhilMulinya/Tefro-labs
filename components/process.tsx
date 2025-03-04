"use client"

import { motion } from "framer-motion"
import { Lightbulb, FileSearch, Code, Rocket, Shield, Repeat } from "lucide-react"
import Image from "next/image"

const processSteps = [
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "Discovery & Ideation",
    description:
      "We explore your vision, analyze requirements, and define the blockchain architecture that best suits your project goals.",
  },
  {
    icon: <FileSearch className="h-8 w-8 text-primary" />,
    title: "Research & Planning",
    description:
      "Our team researches optimal blockchain protocols, tokenomics models, and technical approaches to create a comprehensive roadmap.",
  },
  {
    icon: <Code className="h-8 w-8 text-primary" />,
    title: "Development & Testing",
    description:
      "We implement smart contracts, develop frontend interfaces, and conduct rigorous testing to ensure security and functionality.",
  },
  {
    icon: <Shield className="h-8 w-8 text-primary" />,
    title: "Security Audit",
    description:
      "Our security experts perform comprehensive audits to identify and mitigate vulnerabilities before deployment.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Deployment & Launch",
    description:
      "We handle the deployment process across test and mainnet environments, ensuring a smooth launch of your Web3 product.",
  },
  {
    icon: <Repeat className="h-8 w-8 text-primary" />,
    title: "Maintenance & Optimization",
    description:
      "Post-launch, we provide ongoing support, monitor performance, and implement optimizations to enhance your product.",
  },
]

export default function Process() {
  return (
    <section id="process" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-primary text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              A Streamlined Approach to Web3 Development
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              We follow a proven methodology to bring your Web3 vision to life in weeks, not months
            </p>

            <div className="space-y-8">
              {processSteps.slice(0, 3).map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-blue-50 rounded-lg">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-heading mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Our Development Process"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </motion.div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md max-h-md bg-primary/10 rounded-full blur-3xl -z-10"></div>

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-50 rounded-full"></div>
          </div>
        </div>

        <div className="mt-16 space-y-8 lg:mt-24">
          {processSteps.slice(3).map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-blue-50 rounded-lg">
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold font-heading mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

