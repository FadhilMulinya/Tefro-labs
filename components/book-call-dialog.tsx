"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function BookCallDialog({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
    } else {
      // Here you would typically send the data to your backend or Calendly
      console.log("Form submitted:", formData)
      setIsOpen(false)
      setStep(1)
      // Reset form data if needed
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <div className="bg-primary text-white p-6">
          <DialogTitle className="text-2xl font-bold font-heading text-center">
            {step === 1 ? "Book a Consultation" : "Select a Time"}
          </DialogTitle>
          <p className="text-center text-white/80 mt-2">
            {step === 1
              ? "Fill in your details and we'll get back to you within 24 hours"
              : "Choose a convenient time for our call"}
          </p>
        </div>

        {step === 1 ? (
          <form onSubmit={handleSubmit} className="p-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectType">Project Type</Label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="">Select a project type</option>
                  <option value="dapp">DApp Development</option>
                  <option value="smart-contract">Smart Contract</option>
                  <option value="web-mobile">Web/Mobile App</option>
                  <option value="security">Security Audit</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project"
                  className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>

            <Button type="submit" className="w-full mt-6 rounded-md">
              Continue to Calendar
            </Button>
          </form>
        ) : (
          <div className="p-6">
            <div className="h-[400px] w-full bg-gray-100 rounded-md flex items-center justify-center">
              <p className="text-gray-500">Calendly integration would appear here</p>
            </div>
            <Button type="button" onClick={handleSubmit} className="w-full mt-6 rounded-md">
              Confirm Booking
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

