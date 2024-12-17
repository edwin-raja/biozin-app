'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const text = textRef.current
    const image = imageRef.current

    gsap.from(text, {
      x: -100,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: section,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })

    gsap.from(image, {
      x: 100,
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
    <section ref={sectionRef} className="py-20 bg-white" id="about-us">
      <div className="container mx-auto px-4"> {/* Update 1 */}
        <div className="flex flex-col md:flex-row items-center md:justify-center"> {/* Update 2 */}
          <div ref={textRef} className="md:w-5/12 mb-8 md:mb-0 md:pr-8"> {/* Update 3 */}
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">About Us</h2>
            <p className="text-lg text-gray-700">
              At BioBiz, we are keen to capitalize on India's rich biodiversity and biomass residues to develop a sustainable bio-economy. Our team of experts works tirelessly to provide cutting-edge solutions and insights that drive innovation and growth in this vital sector.
            </p>
          </div>
          <div ref={imageRef} className="md:w-5/12 md:pl-8"> {/* Update 3 */}
            <img src="biobizz.jpg"  alt="BioBiz Impact Areas" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

