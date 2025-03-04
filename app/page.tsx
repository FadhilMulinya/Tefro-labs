import type { Metadata } from "next"
import Hero from "@/components/hero"

export const metadata: Metadata = {
  title: "Tefro Labs | Blockchain Solutions",
  description: "Access blockchain solutions from across the globe with Tefro Labs.",
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0A0A0B]">
      <Hero />
    </main>
  )
}

