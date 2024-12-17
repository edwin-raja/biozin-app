'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BarChart2, Network, Eye } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: BarChart2,
    title: 'Market Intelligence',
    description: 'Providing data-driven analyses and insights for informed decision-making.'
  },
  {
    icon: Network,
    title: 'Networking Opportunities',
    description: 'Connecting stakeholders to foster collaboration.'
  },
  {
    icon: Eye,
    title: 'Visibility Support',
    description: 'Enhancing visibility for businesses and investors in the bio-economy sector.'
  }
]

const Services = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const section = sectionRef.current
    const cards = cardsRef.current

    cards.forEach((card, index) => {
      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.2,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      })
    })
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-green-50" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={el => {
                cardsRef.current[index] = el;
              }}
              className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105"
            >
              <service.icon className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-green-800 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

