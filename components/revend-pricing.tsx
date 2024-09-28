"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Leaf, DollarSign, BarChart, Users, Recycle, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Section,Container } from './craft'

export function RevendPricing() {
  const [isHovered, setIsHovered] = useState(false)

  return (
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div>
      <a className="inline-flex w-fit items-center text-xs p-1 border rounded-full font-medium duration-150 hover:bg-gray-100">
      <span className="inline-block text-xs rounded-full px-2 py-1 bg-green-500 text-white">
      Pricing
     </span>
      </a>
        <h2 className="text-3xl mt-2 sm:text-4xl font-normal text-green-700">
        Simple, transparent pricing
        </h2>
        <p className="text-base font-medium mt-2 text-gray-500">
        Transform your business sustainability with ReVend Recycling Machine.
        </p>
      </div>

          
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          <motion.div 
            className="w-full lg:w-1/2 bg-white rounded-lg p-6 sm:p-8 shadow-lg border border-green-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-between items-start mb-8 border-b border-green-200 pb-4">
              <h2 className="text-xl sm:text-2xl font-light text-green-700">ReVend Machine plan</h2>
              <div className="text-right">
                <div className="text-3xl sm:text-4xl font-light text-green-700">P499</div>
                <div className="text-sm text-gray-600">per machine/month</div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <FeatureItem text="Real-time analytics dashboard" />
              <FeatureItem text="Custom branding options" />
              <FeatureItem text="Comprehensive maintenance plan" />
              <FeatureItem text="24/7 customer support" />
              <FeatureItem text="Mobile app integration" />
            </div>

            <Button 
              className="w-full bg-green-600 text-white hover:bg-green-700 text-base py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? "Let's Go Green" : "Get Started"}
            </Button>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-xl sm:text-2xl font-light mb-6 pb-2 border-b border-green-200 text-green-700">Why Choose ReVend?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <BenefitItem
                icon={Leaf}
                title="Boost Sustainability"
                description="Reduce carbon footprint"
              />
              <BenefitItem
                icon={Users}
                title="Enhance Brand Image"
                description="Improve CSR scores"
              />
              <BenefitItem
                icon={DollarSign}
                title="Generate Revenue"
                description="Share recycling profits"
              />
              <BenefitItem
                icon={BarChart}
                title="Access Insights"
                description="Real-time analytics"
              />
              <BenefitItem
                icon={Recycle}
                title="Reduce Waste Costs"
                description="Improve efficiency"
              />
            </div>
          </motion.div>
        </div>
      </Container>
  )
}

function FeatureItem({ text }: { text: string }) {
  return (
    <motion.div 
      className="flex items-center space-x-3"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
      <span className="text-gray-700">{text}</span>
    </motion.div>
  )
}

function BenefitItem({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) {
  return (
    <motion.div 
      className="flex items-start space-x-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-all duration-300 group"
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="mt-1 bg-green-100 p-2 rounded-full group-hover:bg-green-200 transition-colors duration-300">
        <Icon className="h-4 w-4 text-green-600" />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-green-700">{title}</h3>
        <p className="text-xs text-gray-600">{description}</p>
      </div>
    </motion.div>
  )
}