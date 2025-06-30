"use client"

import type React from "react"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { SendIcon } from "./ui/icones"
import { useState } from "react"

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Form submitted:", formData)

    setFormData({ firstName: "", lastName: "", email: "", phone: "" })
    setIsSubmitting(false)
  }

  return (
    <section className="w-full  ">
      <div className="grid md:grid-cols-2  ">
        <div className="bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 flex items-center justify-center py-10 md:p-30">
          <div className="max-w-5/6  w-full ">
            <div className="bg-white rounded-2xl p-5 md:p-10 shadow-2xl text-center">
              <div className="w-22 h-22 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <SendIcon size={48} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900/90 mb-4">Get In Touch</h3>
              <p className="text-gray-600 md:text-lg mb-6">Ready to take part?<br/> <span className="text-gray-600/80">Let's start the conversation.</span></p>
              <div className="space-y-2 md:space-y-5 text-left">
                <div className="flex items-center gap-3 text-sm  md:text-lg text-gray-600">
                  <div className="w-2 h-2 md:w-4 md:h-4 bg-green-500 rounded-full"></div>
                  <span>response within 24 hours</span>
                </div>
                <div className="flex items-center gap-3 text-sm  md:text-lg text-gray-600">
                  <div className="w-2 h-2 md:w-4 md:h-4 bg-green-500 rounded-full"></div>
                  <span>Free consultation included</span>
                </div>
                <div className="flex items-center gap-3 text-sm md:text-lg text-gray-600">
                  <div className="w-2 h-2 md:w-4 md:h-4 bg-green-500 rounded-full"></div>
                  <span>No commitment required</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 flex items-center justify-center py-10 md:p-30">
          <div className="w-full max-w-5/6 ">
            <div className="bg-white rounded-2xl shadow-2xl p-4 md:p-5">
              <div className="text-center mx-auto mb-5">
                <h2 className="text-2xl font-bold text-gray-900/90 mb-5">Contact Us</h2>
                <p className="text-gray-600/80">We will get back to you us!</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-2 md:space-y-5">
                <div className="grid grid-cols-2 gap-1 md:gap-4">
                  <Input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />

                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-800 hover:bg-slate-900 disabled:bg-slate-400"
                >
                  <SendIcon size={24} />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>

              <p className="text-center text-sm text-gray-500 my-4">You may also call us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
