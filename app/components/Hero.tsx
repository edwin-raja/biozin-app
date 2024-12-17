'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Hero = () => {
  const headlineRef = useRef(null)
  const subtextRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    gsap.from(headlineRef.current, { opacity: 0, y: 50, duration: 1, delay: 0.5 })
    gsap.from(subtextRef.current, { opacity: 0, y: 50, duration: 1, delay: 0.8 })
    gsap.from(ctaRef.current, { opacity: 0, y: 50, duration: 1, delay: 1.1 })
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }}></div>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 ref={headlineRef} className="text-4xl md:text-6xl font-bold mb-4">
          Transforming India's Biodiversity into a Sustainable Bio-Economy
        </h1>
        <p ref={subtextRef} className="text-xl md:text-2xl mb-8">
          Empowering stakeholders with market intelligence, data-driven insights, and professional opportunities
        </p>
        <button ref={ctaRef} className="bg-yellow-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
          Learn More
        </button>
      </div>
    </section>
  )
}

export default Hero

