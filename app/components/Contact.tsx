'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Phone, Mail } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const sectionRef = useRef(null)
  const formRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const form = formRef.current

    gsap.from(form, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white" id="contact-us">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-12 text-center">Contact Us</h2>
        <div className="flex flex-col md:flex-row gap-12 justify-center">
          <div className="md:w-1/2">
            <form ref={formRef} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-green-500 focus:ring-green-500 bg-gray-50" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-green-500 focus:ring-green-500 bg-gray-50" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" id="phone" name="phone" className="mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-green-500 focus:ring-green-500 bg-gray-50" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 border-2 shadow-sm focus:border-green-500 focus:ring-green-500 bg-gray-50" />
              </div>
              <button type="submit" className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>
          <div className="md:w-1/2 space-y-6">
            <div className="flex items-center">
              <MapPin className="w-6 h-6 text-green-600 mr-4" />
              <p className="text-gray-700">123 Green Street, Eco City, India 123456</p>
            </div>
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-green-600 mr-4" />
              <p className="text-gray-700">+91 1234567890</p>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-green-600 mr-4" />
              <p className="text-gray-700">info@biobiz.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

