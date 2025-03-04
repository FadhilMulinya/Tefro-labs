import type React from "react"

export function DotBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full bg-gray-950 bg-dot-white/[0.2] relative">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-gray-950 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-20">{children}</div>
    </div>
  )
}

