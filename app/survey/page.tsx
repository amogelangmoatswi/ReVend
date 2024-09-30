"use client"

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { CheckCircle2, Circle, ArrowLeft, ArrowRight } from 'lucide-react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Progress } from "@/components/ui/progress"

interface FormData {
  fullName: string;
  email: string;
  ageGroup: string;
  cityCountry: string;
  recyclingFamiliarity: string;
  recyclingFrequency: string;
  recycledItems: string[];
  recyclingMotivation: string;
  recyclingBarriers: string[];
  revendInterest: string;
  revendFeatures: string[];
  additionalComments: string;
}

type FormErrors = Partial<Record<keyof FormData, string>>;

interface Step {
  title: string;
  fields: (keyof FormData)[];
}

const initialFormData: FormData = {
  fullName: '',
  email: '',
  ageGroup: '',
  cityCountry: '',
  recyclingFamiliarity: '',
  recyclingFrequency: '',
  recycledItems: [],
  recyclingMotivation: '',
  recyclingBarriers: [],
  revendInterest: '',
  revendFeatures: [],
  additionalComments: ''
}

const steps: Step[] = [
  { title: "Personal Information", fields: ["fullName", "email", "ageGroup", "cityCountry"] },
  { title: "Recycling Habits", fields: ["recyclingFamiliarity", "recyclingFrequency", "recycledItems"] },
  { title: "Motivations and Barriers", fields: ["recyclingMotivation", "recyclingBarriers"] },
  { title: "ReVend Interest", fields: ["revendInterest", "revendFeatures", "additionalComments"] },
]

export default function StepperSurvey(): JSX.Element {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleMultiSelectChange = (name: keyof FormData, value: string) => {
    setFormData(prev => {
      const currentValues = prev[name] as string[]
      if (currentValues.includes(value)) {
        return { ...prev, [name]: currentValues.filter(v => v !== value) }
      } else {
        return { ...prev, [name]: [...currentValues, value] }
      }
    })
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validateStep = (): boolean => {
    const currentFields = steps[currentStep].fields
    const newErrors: FormErrors = {}
    currentFields.forEach(field => {
      if (Array.isArray(formData[field])) {
        if ((formData[field] as string[]).length === 0) {
          newErrors[field] = 'Please select at least one option'
        }
      } else if (!formData[field]) {
        newErrors[field] = 'This field is required'
      }
    })
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep() && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validateStep()) {
      console.log(formData)
      setIsSubmitted(true)
      toast.success('Survey submitted successfully!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }

  return (
    <div className="min-h-screen bg-primary py-8 px-4 sm:px-6 lg:px-10 pt-24">
      <Card className="w-full max-w-6xl mx-auto shadow-lg overflow-hidden">
        <div className="md:flex h-full">
          <div className="md:w-1/2 relative hidden md:block">
            <div className="absolute inset-0">
              <Image
                src="/surveypic.jpg?height=800&width=600"
                alt="Recycling image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-6">
              <blockquote className="text-lg font-medium mb-2">
                &quot;ReVend has revolutionized our recycling habits. It&apos;s so easy and rewarding!&quot;
              </blockquote>
              <cite className="text-sm">- Amogelang Moatswi, Eco Enthusiast</cite>
            </div>
          </div>
          <div className="md:w-1/2 bg-white">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-gray-900 mb-2">Help us improve!</CardTitle>
              <p className="text-gray-600 mb-6">Help us understand your recycling habits and how we can improve our services.</p>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between mb-8 mr-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      index <= currentStep ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      {index < currentStep ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <Circle className="w-5 h-5" />
                      )}
                    </div>
                    <span className="text-xs mt-1 hidden sm:inline">{step.title}</span>
                  </div>
                ))}
              </div>
              <ScrollArea className="h-[calc(100vh-300px)] pr-4">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <AnimatePresence mode="wait">
                    {!isSubmitted ? (
                      <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.3 }}
                      >
                        {currentStep === 0 && (
                          <>
                            <div className="space-y-4">
                              <div>
                                <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">Full name</Label>
                                <Input
                                  id="fullName"
                                  name="fullName"
                                  value={formData.fullName}
                                  onChange={handleInputChange}
                                  className={`mt-1 ${errors.fullName ? 'border-red-500' : ''}`}
                                  placeholder="John Doe"
                                />
                                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                              </div>
                              <div>
                                <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                                <Input
                                  id="email"
                                  name="email"
                                  type="email"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  className={`mt-1 ${errors.email ? 'border-red-500' : ''}`}
                                  placeholder="john@example.com"
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                              </div>
                              <div>
                                <Label htmlFor="ageGroup" className="text-sm font-medium text-gray-700">Age group</Label>
                                <Select onValueChange={(value) => handleSelectChange('ageGroup', value)}>
                                  <SelectTrigger className={`mt-1 ${errors.ageGroup ? 'border-red-500' : ''}`}>
                                    <SelectValue placeholder="Select age group" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {['Under 18', '18-24', '25-34', '35-44', '45-54', '55+'].map((age) => (
                                      <SelectItem key={age} value={age}>{age}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                {errors.ageGroup && <p className="text-red-500 text-xs mt-1">{errors.ageGroup}</p>}
                              </div>
                              <div>
                                <Label htmlFor="cityCountry" className="text-sm font-medium text-gray-700">City and Country</Label>
                                <Input
                                  id="cityCountry"
                                  name="cityCountry"
                                  value={formData.cityCountry}
                                  onChange={handleInputChange}
                                  className={`mt-1 ${errors.cityCountry ? 'border-red-500' : ''}`}
                                  placeholder="New York, USA"
                                />
                                {errors.cityCountry && <p className="text-red-500 text-xs mt-1">{errors.cityCountry}</p>}
                              </div>
                            </div>
                          </>
                        )}
                        {currentStep === 1 && (
                          <>
                            <div className="space-y-4">
                              <div>
                                <Label className="text-sm font-medium text-gray-700">How familiar are you with recycling?</Label>
                                <RadioGroup
                                  value={formData.recyclingFamiliarity}
                                  onValueChange={(value) => handleSelectChange('recyclingFamiliarity', value)}
                                  className="mt-2"
                                >
                                  {['Very familiar', 'Somewhat familiar', 'Not familiar'].map((option) => (
                                    <div key={option} className="flex items-center">
                                      <RadioGroupItem value={option} id={option} />
                                      <Label htmlFor={option} className="ml-2">{option}</Label>
                                    </div>
                                  ))}
                                </RadioGroup>
                                {errors.recyclingFamiliarity && <p className="text-red-500 text-xs mt-1">{errors.recyclingFamiliarity}</p>}
                              </div>
                              <div>
                                <Label htmlFor="recyclingFrequency" className="text-sm font-medium text-gray-700">How often do you recycle?</Label>
                                <Select onValueChange={(value) => handleSelectChange('recyclingFrequency', value)}>
                                  <SelectTrigger className={`mt-1 ${errors.recyclingFrequency ? 'border-red-500' : ''}`}>
                                    <SelectValue placeholder="Select frequency" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {['Always', 'Often', 'Sometimes', 'Rarely', 'Never'].map((option) => (
                                      <SelectItem key={option} value={option}>{option}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                {errors.recyclingFrequency && <p className="text-red-500 text-xs mt-1">{errors.recyclingFrequency}</p>}
                              </div>
                              <div>
                                <Label className="text-sm font-medium text-gray-700">Which items do you recycle most often?</Label>
                                <div className="grid grid-cols-2 gap-2 mt-2">
                                  {['Plastic', 'Paper', 'Glass', 'Metal', 'Electronics', 'Organic waste'].map((item) => (
                                    <div key={item} className="flex items-center">
                                      <input
                                        type="checkbox"
                                        id={item}
                                        checked={formData.recycledItems.includes(item)}
                                        onChange={() => handleMultiSelectChange('recycledItems', item)}
                                        className="mr-2"
                                      />
                                      <Label htmlFor={item}>{item}</Label>
                                    </div>
                                  ))}
                                </div>
                                {errors.recycledItems && <p className="text-red-500 text-xs mt-1">{errors.recycledItems}</p>}
                              </div>
                            </div>
                          </>
                        )}
                        {currentStep === 2 && (
                          <>
                            <div className="space-y-4">
                              <div>
                                <Label htmlFor="recyclingMotivation" className="text-sm font-medium text-gray-700">What is your primary motivation for recycling?</Label>
                                <Select onValueChange={(value) => handleSelectChange('recyclingMotivation', value)}>
                                  <SelectTrigger className={`mt-1 ${errors.recyclingMotivation ? 'border-red-500' : ''}`}>
                                    <SelectValue placeholder="Select motivation" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {['Environmental concern', 'Financial incentives', 'Social responsibility', 'Legal requirements'].map((option) => (
                                      <SelectItem key={option} value={option}>{option}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                {errors.recyclingMotivation && <p className="text-red-500 text-xs mt-1">{errors.recyclingMotivation}</p>}
                              </div>
                              <div>
                                <Label className="text-sm font-medium text-gray-700">What are the main barriers to recycling for you?</Label>
                                <div className="grid grid-cols-2 gap-2 mt-2">
                                  {['Lack of facilities', 'Time-consuming', 'Lack of knowledge', 'Inconvenience', 'No incentives', 'Other'].map((item) => (
                                    <div key={item} className="flex items-center">
                                      <input
                                        type="checkbox"
                                        id={item}
                                        checked={formData.recyclingBarriers.includes(item)}
                                        onChange={() => handleMultiSelectChange('recyclingBarriers', item)}
                                        className="mr-2"
                                      />
                                      <Label htmlFor={item}>{item}</Label>
                                    </div>
                                  ))}
                                </div>
                                {errors.recyclingBarriers && <p className="text-red-500 text-xs mt-1">{errors.recyclingBarriers}</p>}
                              </div>
                            </div>
                          </>
                        )}
                        {currentStep === 3 && (
                          <>
                            <div className="space-y-4">
                              <div>
                                <Label className="text-sm font-medium text-gray-700">Would you be interested in using ReVend&apos;s recycling vending machines?</Label>
                                <RadioGroup
                                  value={formData.revendInterest}
                                  onValueChange={(value) => handleSelectChange('revendInterest', value)}
                                  className="mt-2"
                                >
                                  {['Very interested', 'Somewhat interested', 'Not interested'].map((option) => (
                                    <div key={option} className="flex items-center">
                                      <RadioGroupItem value={option} id={option} />
                                      <Label htmlFor={option} className="ml-2">{option}</Label>
                                    </div>
                                  ))}
                                </RadioGroup>
                                {errors.revendInterest && <p className="text-red-500 text-xs mt-1">{errors.revendInterest}</p>}
                              </div>
                              <div>
                                <Label className="text-sm font-medium text-gray-700">Which features would you like to see in ReVend&apos;s app?</Label>
                                <div className="grid grid-cols-2 gap-2 mt-2">
                                  {['Recycling points tracking', 'Rewards program', 'Educational content', 'Community challenges', 'Location finder', 'Impact visualization'].map((item) => (
                                    <div key={item} className="flex items-center">
                                      <input
                                        type="checkbox"
                                        id={item}
                                        checked={formData.revendFeatures.includes(item)}
                                        onChange={() => handleMultiSelectChange('revendFeatures', item)}
                                        className="mr-2"
                                      />
                                      <Label htmlFor={item}>{item}</Label>
                                    </div>
                                  ))}
                                </div>
                                {errors.revendFeatures && <p className="text-red-500 text-xs mt-1">{errors.revendFeatures}</p>}
                              </div>
                              <div>
                                <Label htmlFor="additionalComments" className="text-sm font-medium text-gray-700">Additional comments</Label>
                                <Textarea
                                  id="additionalComments"
                                  name="additionalComments"
                                  value={formData.additionalComments}
                                  onChange={handleInputChange}
                                  className="mt-1"
                                  placeholder="Tell us more about your recycling habits or suggestions for ReVend..."
                                />
                              </div>
                            </div>
                          </>
                        )}
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.5 }}
                        className="text-center py-12"
                      >
                        <h2 className="text-3xl font-bold text-green-600 mb-4">Thank You for Your Feedback!</h2>
                        <p className="text-lg text-gray-600 mb-8">Your input is invaluable in helping us improve our recycling initiatives and create a more sustainable future.</p>
                        <Button className="px-8 py-4 text-lg bg-green-500 hover:bg-green-600 text-white">
                          Take Another Survey
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {!isSubmitted && (
                    <div className="flex justify-between mt-8">
                      <Button
                        type="button"
                        onClick={handlePrevious}
                        disabled={currentStep === 0}
                        variant="outline"
                      >
                        Previous
                      </Button>
                      {currentStep < steps.length - 1 ? (
                        <Button type="button" onClick={handleNext} className="bg-green-600 hover:bg-green-700 text-white">
                          Next
                        </Button>
                      ) : (
                        <Button type="submit" className="bg-green-600 hover:bg-green-700 text-white">
                          Submit
                        </Button>
                      )}
                    </div>
                  )}
                </form>
              </ScrollArea>
            </CardContent>
          </div>
        </div>
      </Card>
      <ToastContainer position="bottom-right" />
    </div>
  )
}