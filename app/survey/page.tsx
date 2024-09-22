"use client"

import React, { useState, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Circle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

type FormData = {
  fullName: string;
  email: string;
  ageGroup: string;
  cityCountry: string;
  recyclingFamiliarity: string;
  recyclingFrequency: string;
  recycledItem: string;
  recyclingMotivation: string;
  recyclingBarrier: string;
  revendInterest: string;
  additionalFeature: string;
}

type Step = {
  title: string;
  fields: (keyof FormData)[];
}

const steps: Step[] = [
  { title: "Personal Info", fields: ["fullName", "email", "ageGroup", "cityCountry"] },
  { title: "Recycling Habits", fields: ["recyclingFamiliarity", "recyclingFrequency", "recycledItem"] },
  { title: "Motivations & Barriers", fields: ["recyclingMotivation", "recyclingBarrier"] },
  { title: "ReVend Interest", fields: ["revendInterest", "additionalFeature"] },
]

const initialFormData: FormData = {
  fullName: '',
  email: '',
  ageGroup: '',
  cityCountry: '',
  recyclingFamiliarity: '',
  recyclingFrequency: '',
  recycledItem: '',
  recyclingMotivation: '',
  recyclingBarrier: '',
  revendInterest: '',
  additionalFeature: ''
}

const thankYouMessages = [
  "Thank you for your valuable input!",
  "Your feedback helps us improve recycling!",
  "Together, we're making a difference!",
  "You're a recycling champion!",
]

export default function StepperSurvey(): JSX.Element {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [thankYouStep, setThankYouStep] = useState(0)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSingleChoice = (name: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const validateStep = (): boolean => {
    const currentFields = steps[currentStep].fields
    const newErrors: Partial<Record<keyof FormData, string>> = {}
    currentFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = `This field is required`
      }
    })
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1))
    }
  }

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0))
  }

  const handleConfetti = useCallback(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  const handleSubmit = () => {
    if (validateStep()) {
      console.log(formData)
      handleConfetti()
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
    } else {
      toast.error('Please fill in all required fields.', {
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

  const handleThankYouNext = () => {
    setThankYouStep(prev => Math.min(prev + 1, thankYouMessages.length - 1))
  }

  return (
    <div className="min-h-screen bg-primary py-8 px-4 sm:px-6 lg:px-10 pt-24">
      <Card className="w-full max-w-4xl mx-auto shadow-xl bg-white backdrop-blur-sm">
        <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-t-xl">
          <CardTitle className="text-3xl font-bold">ReVend Recycling Survey</CardTitle>
          <CardDescription className="text-green-100 text-lg">Help us understand your recycling habits</CardDescription>
        </CardHeader>
        <CardContent className="mt-6 px-8">
          {!isSubmitted ? (
            <>
              <div className="flex justify-between mb-8">
                {steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      index <= currentStep ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      {index < currentStep ? (
                        <CheckCircle2 className="w-6 h-6" />
                      ) : (
                        <Circle className="w-6 h-6" />
                      )}
                    </div>
                    <span className="text-sm mt-2">{step.title}</span>
                  </div>
                ))}
              </div>
              <Progress value={(currentStep / (steps.length - 1)) * 100} className="w-full mb-8" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <form className="space-y-6">
                    {currentStep === 0 && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="fullName" className="text-lg">Full Name</Label>
                          <Input 
                            id="fullName" 
                            name="fullName" 
                            value={formData.fullName} 
                            onChange={handleInputChange} 
                            className={`${errors.fullName ? 'border-red-500' : ''} text-lg p-6`}
                            placeholder="Enter your full name"
                          />
                          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-lg">Email Address</Label>
                          <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                            className={`${errors.email ? 'border-red-500' : ''} text-lg p-6`}
                            placeholder="your.email@example.com"
                          />
                          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label className="text-lg">Age Group</Label>
                          <RadioGroup 
                            value={formData.ageGroup} 
                            onValueChange={(value) => handleSingleChoice('ageGroup', value)}
                            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                          >
                            {['Under 18', '18-24', '25-34', '35-44', '45-54', '55+'].map((age) => (
                              <div key={age} className="flex items-center space-x-2 bg-white rounded-lg p-4 shadow-sm hover:bg-green-50 transition-colors">
                                <RadioGroupItem value={age} id={age} />
                                <Label htmlFor={age} className="text-base">{age}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                          {errors.ageGroup && <p className="text-red-500 text-sm">{errors.ageGroup}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cityCountry" className="text-lg">City and Country</Label>
                          <Input 
                            id="cityCountry" 
                            name="cityCountry" 
                            value={formData.cityCountry} 
                            onChange={handleInputChange} 
                            className={`${errors.cityCountry ? 'border-red-500' : ''} text-lg p-6`}
                            placeholder="New York, USA"
                          />
                          {errors.cityCountry && <p className="text-red-500 text-sm">{errors.cityCountry}</p>}
                        </div>
                      </>
                    )}
                    {currentStep === 1 && (
                      <>
                        <div className="space-y-4">
                          <Label className="text-lg">How familiar are you with recycling?</Label>
                          <RadioGroup 
                            value={formData.recyclingFamiliarity} 
                            onValueChange={(value) => handleSingleChoice('recyclingFamiliarity', value)}
                            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                          >
                            {['Very familiar', 'Somewhat familiar', 'Not familiar'].map((option) => (
                              <div key={option} className="flex items-center space-x-2 bg-white rounded-lg p-4 shadow-sm hover:bg-green-50 transition-colors">
                                <RadioGroupItem value={option} id={option} />
                                <Label htmlFor={option} className="text-base">{option}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                          {errors.recyclingFamiliarity && <p className="text-red-500 text-sm">{errors.recyclingFamiliarity}</p>}
                        </div>
                        <div className="space-y-4">
                          <Label className="text-lg">How often do you recycle your waste?</Label>
                          <RadioGroup 
                            value={formData.recyclingFrequency} 
                            onValueChange={(value) => handleSingleChoice('recyclingFrequency', value)}
                            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                          >
                            {['Always', 'Often', 'Sometimes', 'Rarely', 'Never'].map((option) => (
                              <div key={option} className="flex items-center space-x-2 bg-white rounded-lg p-4 shadow-sm hover:bg-green-50 transition-colors">
                                <RadioGroupItem value={option} id={option} />
                                <Label htmlFor={option} className="text-base">{option}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                          {errors.recyclingFrequency && <p className="text-red-500 text-sm">{errors.recyclingFrequency}</p>}
                        </div>
                        <div className="space-y-4">
                          <Label className="text-lg">Which item do you recycle most frequently?</Label>
                          <RadioGroup 
                            value={formData.recycledItem} 
                            onValueChange={(value) => handleSingleChoice('recycledItem', value)}
                            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                          >
                            {['Plastic bottles', 'Aluminum cans', 'Paper', 'Glass', 'Electronic waste', 'Food waste'].map((item) => (
                              <div key={item} className="flex items-center space-x-2 bg-white rounded-lg p-4 shadow-sm hover:bg-green-50 transition-colors">
                                <RadioGroupItem value={item} id={item} />
                                <Label htmlFor={item} className="text-base">{item}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                          {errors.recycledItem && <p className="text-red-500 text-sm">{errors.recycledItem}</p>}
                        </div>
                      </>
                    )}
                    {currentStep === 2 && (
                      <>
                        <div className="space-y-4">
                          <Label className="text-lg">What is your primary motivation for recycling?</Label>
                          <RadioGroup 
                            value={formData.recyclingMotivation} 
                            onValueChange={(value) => handleSingleChoice('recyclingMotivation', value)}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                          >
                            {['Environmental concern', 'Financial incentives', 'Convenience of recycling programs', 'Social responsibility'].map((item) => (
                              <div key={item} className="flex items-center space-x-2 bg-white rounded-lg p-4 shadow-sm hover:bg-green-50 transition-colors">
                                <RadioGroupItem value={item} id={item} />
                                <Label htmlFor={item} className="text-base">{item}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                          {errors.recyclingMotivation && <p className="text-red-500 text-sm">{errors.recyclingMotivation}</p>}
                        </div>
                        <div className="space-y-4">
                          <Label className="text-lg">What is the main barrier that prevents you from recycling more?</Label>
                          <RadioGroup 
                            value={formData.recyclingBarrier} 
                            onValueChange={(value) => handleSingleChoice('recyclingBarrier', value)}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                          >
                            {[
                              'Lack of convenient recycling locations',
                              'Lack of knowledge about what can be recycled',
                              'Time and effort required',
                              'Not enough financial incentives',
                              'I don\'t see the impact of recycling'
                            ].map((item) => (
                              <div key={item} className="flex items-center space-x-2 bg-white rounded-lg p-4 shadow-sm hover:bg-green-50 transition-colors">
                                <RadioGroupItem value={item} id={item} />
                                <Label htmlFor={item} className="text-base">{item}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                          {errors.recyclingBarrier && <p className="text-red-500 text-sm">{errors.recyclingBarrier}</p>}
                        </div>
                      </>
                    )}
                    {currentStep === 3 && (
                      <>
                        <div className="space-y-4">
                          <Label className="text-lg">Would you be interested in using ReVend's recycling vending machines?</Label>
                          <RadioGroup 
                            value={formData.revendInterest} 
                            onValueChange={(value) => handleSingleChoice('revendInterest', value)}
                            className="grid grid-cols-3 gap-4"
                          >
                            {['Yes', 'No', 'Maybe'].map((option) => (
                              <div key={option} className="flex items-center space-x-2 bg-white rounded-lg p-4 shadow-sm hover:bg-green-50 transition-colors">
                                <RadioGroupItem value={option} id={option} />
                                <Label htmlFor={option} className="text-base">{option}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                          {errors.revendInterest && <p className="text-red-500 text-sm">{errors.revendInterest}</p>}
                        </div>
                        <div className="space-y-4">
                          <Label className="text-lg">Which additional feature would you most like to see in a recycling app or system?</Label>
                          <RadioGroup 
                            value={formData.additionalFeature} 
                            onValueChange={(value) => handleSingleChoice('additionalFeature', value)}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                          >
                            {[
                              'Better rewards system',
                              'More detailed tracking and insights',
                              'Community engagement (challenges, competitions, etc.)',
                              'Educational resources about recycling'
                            ].map((item) => (
                              <div key={item} className="flex items-center space-x-2 bg-white rounded-lg p-4 shadow-sm hover:bg-green-50 transition-colors">
                                <RadioGroupItem value={item} id={item} />
                                <Label htmlFor={item} className="text-base">{item}</Label>
                              </div>
                            ))}
                          </RadioGroup>
                          {errors.additionalFeature && <p className="text-red-500 text-sm">{errors.additionalFeature}</p>}
                        </div>
                      </>
                    )}
                  </form>
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={thankYouStep}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12"
              >
                <h2 className="text-3xl font-bold text-green-600 mb-4">{thankYouMessages[thankYouStep]}</h2>
                <p className="text-lg text-gray-600 mb-8">Your input helps us improve recycling initiatives and create a more sustainable future.</p>
                {thankYouStep < thankYouMessages.length - 1 && (
                  <Button onClick={handleThankYouNext} className="px-8 py-4 text-lg bg-green-500 hover:bg-green-600 text-white">
                    Next
                  </Button>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </CardContent>
        {!isSubmitted && (
          <CardFooter className="flex justify-between px-8 py-6">
            <Button 
              onClick={handlePrevious} 
              disabled={currentStep === 0}
              variant="outline"
              className="px-8 py-6 text-lg"
            >
              Previous
            </Button>
            {currentStep < steps.length - 1 ? (
              <Button onClick={handleNext} className="px-8 py-6 text-lg bg-green-500 hover:bg-green-600">Next</Button>
            ) : (
              <Button 
                onClick={handleSubmit}
                className="px-8 py-6 text-lg bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
              >
                Submit
              </Button>
            )}
          </CardFooter>
        )}
      </Card>
      <ToastContainer position="bottom-right" />
    </div>
  )
}