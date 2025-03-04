"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Github, Linkedin, Twitter } from "lucide-react"

const coreTeam = [
  {
    name: "Alex Chen",
    role: "Founder & Lead Developer",
    bio: "Blockchain architect with 6+ years of experience in Web3 development and smart contract security.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      github: "#",
      linkedin: "#",
    },
  },
  {
    name: "Sarah Johnson",
    role: "Technical Lead",
    bio: "Full-stack developer specializing in DeFi protocols and cross-chain applications.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      github: "#",
      linkedin: "#",
    },
  },
  {
    name: "Michael Rodriguez",
    role: "Security Researcher",
    bio: "Smart contract auditor with a background in cryptography and zero-knowledge proofs.",
    image: "/placeholder.svg?height=400&width=400",
    social: {
      twitter: "#",
      github: "#",
      linkedin: "#",
    },
  },
]

export default function Team() {
  return (
    <section id="team" className="section-padding bg-[#F8F9FA]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-primary text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            Our Team
          </div>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Meet the Web3 Experts</h2>
          <p className="text-lg text-gray-600">
            A dedicated group of blockchain specialists building the decentralized future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {coreTeam.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-hover"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold font-heading">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a href={member.social.twitter} className="text-gray-400 hover:text-primary transition-colors">
                      <Twitter size={18} />
                    </a>
                    <a href={member.social.github} className="text-gray-400 hover:text-primary transition-colors">
                      <Github size={18} />
                    </a>
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-primary transition-colors">
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-2xl font-bold font-heading mb-4">Extended Team</h3>
            <p className="text-gray-600">
              Beyond our core team, we collaborate with a network of 10+ specialized developers, designers, and creators
              to deliver comprehensive solutions for any project scope.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                  <Image
                    src={`/placeholder.svg?height=80&width=80`}
                    alt="Team member"
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                </div>
                <p className="text-sm font-medium text-center">Specialist</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

