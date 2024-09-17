"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Progress } from "@/components/ui/progress"

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

export default function StepperSurvey(): JSX.Element {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

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

  const handleSubmit = () => {
    if (validateStep()) {
      console.log(formData)
      toast.success('Survey submitted successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    } else {
      toast.error('Please fill in all required fields.', {
        position: "top-right",
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
    <div className="min-h-screen bg-primary py-8 px-4 sm:px-6 lg:px-8 pt-24"> {/* Added pt-24 for top padding */}
      <Card className="w-full max-w-2xl mx-auto shadow-xl rounded-lg">
        <CardHeader className="bg-gradient-to-r rounded-t-lg from-green-500 to-green-900 text-white">
          <CardTitle className="text-2xl font-bold">ReVend Recycling Survey</CardTitle>
          <CardDescription className="text-green-100">
  Step {currentStep + 1} of {steps.length}: {steps[currentStep].title.replace("'", "&#39;")}
</CardDescription>
        </CardHeader>
        <CardContent className="mt-6">
          <Progress value={(currentStep / (steps.length - 1)) * 100} className="w-full mb-6" />
          <form className="space-y-6">
            {currentStep === 0 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input 
                    id="fullName" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleInputChange} 
                    className={errors.fullName ? 'border-red-500' : ''}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    className={errors.email ? 'border-red-500' : ''}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="space-y-2">
                  <Label>Age Group</Label>
                  <RadioGroup 
                    value={formData.ageGroup} 
                    onValueChange={(value) => handleSingleChoice('ageGroup', value)}
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {['Under 18', '18-24', '25-34', '35-44', '45-54', '55+'].map((age) => (
                        <div key={age} className="flex items-center space-x-2">
                          <RadioGroupItem value={age} id={age} />
                          <Label htmlFor={age}>{age}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                  {errors.ageGroup && <p className="text-red-500 text-sm">{errors.ageGroup}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cityCountry">City and Country</Label>
                  <Input 
                    id="cityCountry" 
                    name="cityCountry" 
                    value={formData.cityCountry} 
                    onChange={handleInputChange} 
                    className={errors.cityCountry ? 'border-red-500' : ''}
                    placeholder="New York, USA"
                  />
                  {errors.cityCountry && <p className="text-red-500 text-sm">{errors.cityCountry}</p>}
                </div>
              </>
            )}
            {currentStep === 1 && (
              <>
                <div className="space-y-2">
                  <Label>How familiar are you with recycling?</Label>
                  <RadioGroup 
                    value={formData.recyclingFamiliarity} 
                    onValueChange={(value) => handleSingleChoice('recyclingFamiliarity', value)}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {['Very familiar', 'Somewhat familiar', 'Not familiar'].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={option} />
                          <Label htmlFor={option}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                  {errors.recyclingFamiliarity && <p className="text-red-500 text-sm">{errors.recyclingFamiliarity}</p>}
                </div>
                <div className="space-y-2">
                  <Label>How often do you recycle your waste?</Label>
                  <RadioGroup 
                    value={formData.recyclingFrequency} 
                    onValueChange={(value) => handleSingleChoice('recyclingFrequency', value)}
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {['Always', 'Often', 'Sometimes', 'Rarely', 'Never'].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={option} />
                          <Label htmlFor={option}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                  {errors.recyclingFrequency && <p className="text-red-500 text-sm">{errors.recyclingFrequency}</p>}
                </div>
                <div className="space-y-2">
                  <Label>Which item do you recycle most frequently?</Label>
                  <RadioGroup 
                    value={formData.recycledItem} 
                    onValueChange={(value) => handleSingleChoice('recycledItem', value)}
                  >
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {['Plastic bottles', 'Aluminum cans', 'Paper', 'Glass', 'Electronic waste', 'Food waste'].map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                          <RadioGroupItem value={item} id={item} />
                          <Label htmlFor={item}>{item}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                  {errors.recycledItem && <p className="text-red-500 text-sm">{errors.recycledItem}</p>}
                </div>
              </>
            )}
            {currentStep === 2 && (
              <>
                <div className="space-y-2">
                  <Label>What is your primary motivation for recycling?</Label>
                  <RadioGroup 
                    value={formData.recyclingMotivation} 
                    onValueChange={(value) => handleSingleChoice('recyclingMotivation', value)}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {['Environmental concern', 'Financial incentives', 'Convenience of recycling programs', 'Social responsibility'].map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                          <RadioGroupItem value={item} id={item} />
                          <Label htmlFor={item}>{item}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                  {errors.recyclingMotivation && <p className="text-red-500 text-sm">{errors.recyclingMotivation}</p>}
                </div>
                <div className="space-y-2">
                  <Label>What is the main barrier that prevents you from recycling more?</Label>
                  <RadioGroup 
                    value={formData.recyclingBarrier} 
                    onValueChange={(value) => handleSingleChoice('recyclingBarrier', value)}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        'Lack of convenient recycling locations',
                        'Lack of knowledge about what can be recycled',
                        'Time and effort required',
                        'Not enough financial incentives',
                        "I don't see the impact of recycling"
                      ].map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                          <RadioGroupItem value={item} id={item} />
                          <Label htmlFor={item}>{item}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                  {errors.recyclingBarrier && <p className="text-red-500 text-sm">{errors.recyclingBarrier}</p>}
                </div>
              </>
            )}
            {currentStep === 3 && (
              <>
                <div className="space-y-2">
                  <Label>Would you be interested in using ReVend's recycling vending machines?</Label>
                  <RadioGroup 
                    value={formData.revendInterest} 
                    onValueChange={(value) => handleSingleChoice('revendInterest', value)}
                  >
                    <div className="grid grid-cols-3 gap-2">
                      {['Yes', 'No', 'Maybe'].map((option) => (
                        <div key={option} className="flex items-center space-x-2">
                          <RadioGroupItem value={option} id={option} />
                          <Label htmlFor={option}>{option}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                  {errors.revendInterest && <p className="text-red-500 text-sm">{errors.revendInterest}</p>}
                </div>
                <div className="space-y-2">
                  <Label>Which additional feature would you most like to see in a recycling app or system?</Label>
                  <RadioGroup 
                    value={formData.additionalFeature} 
                    onValueChange={(value) => handleSingleChoice('additionalFeature', value)}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        'Better rewards system',
                        'More detailed tracking and insights',
                        'Community engagement (challenges, competitions, etc.)',
                        'Educational resources about recycling'
                      ].map((item) => (
                        <div key={item} className="flex items-center space-x-2">
                          <RadioGroupItem value={item} id={item} />
                          <Label htmlFor={item}>{item}</Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                  {errors.additionalFeature && <p className="text-red-500 text-sm">{errors.additionalFeature}</p>}
                </div>
              </>
            )}
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button 
            onClick={handlePrevious} 
            disabled={currentStep === 0}
            variant="outline"
          >
            Previous
          </Button>
          {currentStep < steps.length - 1 ? (
            <Button onClick={handleNext}>Next</Button>
          ) : (
            <Button 
              onClick={handleSubmit}
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white"
            >
              Submit
            </Button>
          )}
        </CardFooter>
      </Card>
      <ToastContainer />
    </div>
  )
}