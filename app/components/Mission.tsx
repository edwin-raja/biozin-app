'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Mission = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const text = textRef.current

    gsap.from(text, {
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
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-green-500 to-green-600" id="our-mission">
      <div className="container mx-auto px-4">
        <div ref={textRef} className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Our mission is to empower farmers, rural stakeholders, and businesses to unlock the potential of biomass residues and create impactful solutions for a sustainable future.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Mission

