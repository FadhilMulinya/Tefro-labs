"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "DeFi Lending Protocol",
    description: "A decentralized lending platform with multi-chain support and innovative yield strategies.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["DeFi", "Smart Contracts", "Frontend"],
  },
  {
    title: "NFT Marketplace",
    description: "Custom NFT marketplace with royalty enforcement and cross-chain trading capabilities.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["NFT", "Marketplace", "UI/UX"],
  },
  {
    title: "DAO Governance Tool",
    description:
      "Comprehensive governance solution for decentralized autonomous organizations with proposal creation and voting.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["DAO", "Governance", "Web3"],
  },
  {
    title: "Blockchain Explorer",
    description: "Custom blockchain explorer with advanced analytics and visualization tools.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Explorer", "Analytics", "API"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-[#F8F9FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div className="max-w-2xl mb-8 md:mb-0">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-primary text-sm font-medium mb-4">
              <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
              Our Projects
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Featured Web3 Projects</h2>
            <p className="text-lg text-gray-600">
              We've successfully delivered 10+ Web3 projects across various domains
            </p>
          </div>
          <Button variant="outline" className="rounded-md px-6">
            View All Projects <ArrowRight size={16} className="ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-hover"
            >
              <Card className="h-full border border-gray-100 shadow-sm bg-white overflow-hidden">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-blue-50 text-primary hover:bg-blue-100">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent"
                  >
                    View case study <ArrowRight size={16} className="ml-2" />
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

