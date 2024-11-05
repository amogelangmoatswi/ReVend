'use client';

import { useState, useEffect } from 'react'
import * as Craft from "@/components/craft";
import { Section, Container } from './craft';

const TeamMembersComponent = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const teamMembers = [
    {
      name: "MARANG PHOLO",
      role: "Idea Holder",
      image: "/images/marang.jpg",
      featured: true,
    },
    {
      name: "TAFADZWA CHIGWADA",
      role: "Software Developer",
      image: "/images/tafa.jpg",
    },
    {
      name: "MPHO SETHIBE",
      role: "Business Analyst",
      image: "/images/mpho.jpg",
    },
    {
      name: "AMOGELANG MOATSWI",
      role: "UI/UX Designer / Developer",
      image: "/images/moatswi.jpg",
    },
    {
      name: "KARABO AGOSI",
      role: "Embedded Systems Engineer",
      image: "/images/karabo.jpg",
    },
  ]

  return (
    <Section id="Team" className="bg-primary">
      <Container>
        <div className="flex flex-col gap-2">
          <a className="inline-flex w-fit items-center text-xs p-1 border rounded-full font-medium duration-150 hover:bg-gray-100">
            <span className="inline-block text-xs rounded-full px-2 py-1 bg-green-500 text-white">
              Team
            </span>
          </a>
          <h3 className="text-3xl sm:text-4xl font-bold text-white">
            Introducing Our Talented Team
          </h3>
          <p className="text-base sm:text-lg text-gray-300">
            Meet the exceptional individuals behind our success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6 gap-4 md:gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`relative rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ${
                member.featured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              }`}
            >
              <img
                src={member.image}
                alt=""
                className={`w-full object-cover ${
                  member.featured
                    ? 'h-[240px] sm:h-[320px] md:h-[360px] lg:h-full'
                    : 'h-[200px] sm:h-[240px]'
                } ${!member.featured && !isMobile ? 'grayscale hover:grayscale-0' : ''}`}
              />
              <div 
                className={`absolute bottom-0 left-0 right-0 p-3 sm:p-4 ${
                  member.featured ? 'bg-green-500' : 'bg-black/70'
                }`}
              >
                <h3 className={`text-base sm:text-lg font-bold ${member.featured ? 'text-black' : 'text-white'}`}>
                  {member.name}
                </h3>
                <p className={`text-sm sm:text-base ${member.featured ? 'text-black/80' : 'text-white/80'}`}>
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default TeamMembersComponent