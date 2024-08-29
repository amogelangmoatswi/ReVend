import React from 'react'
import { Section, Container } from "@/components/craft";
import { Stepper,StepperItem,StepperStatusIcon,StepperTitle } from './ui/stepper';

const Steps = () => {
  return (
    <Section>
        
    <div className="grid grid-cols-1 md:grid-cols-3 md:items-end">
    <div className="lg:col-span-2">
          <a className="inline-flex w-fit items-center text-xs p-1 border rounded-full font-medium duration-150 hover:bg-gray-100">
      <span className="inline-block text-xs rounded-full px-2 py-1 bg-green-500 text-white">
      How To
     </span>
      </a>
            <h1 className="text-4xl mt-4 font-semibold tracking-tight text-gray-900 lg:text-balance">
            Simple Steps to Earning Rewards
            </h1>
          </div>
        </div>
        <div className='mt-12'>
        <Stepper activeStep={1}>
        <StepperItem>
        <StepperStatusIcon status="success" />
        <StepperTitle>Download App</StepperTitle>
        </StepperItem>
        <StepperItem>
        <StepperStatusIcon status="loading" />
        <StepperTitle>Recycle</StepperTitle>
        </StepperItem>
        <StepperItem>
        <StepperStatusIcon status="inactive" />
        <StepperTitle>Redeem Rewards</StepperTitle>
        </StepperItem>
        </Stepper> 
        </div>
        <dl className="grid grid-cols-2 gap-6 lg:grid-cols-3 md:grid-cols-2 mt-12">
          <div className=" bg-bggg rounded-3xl">
            <dt className="tracking-tight text-lg font-medium text-gray-900 p-8">
              1. Download and Set Up
            </dt>
            <dd className="text-sm text-gray-500 p-8 border-t">
            Download the ReVend app from your app store and create an account. Follow the setup instructions to connect with our recycling machines.
            </dd>
          </div>
          <div className=" bg-carcolor rounded-3xl">
            <dt className="tracking-tight text-lg font-medium text-gray-200 p-8">
              2. Recycle and Track
            </dt>
            <dd className="text-sm lg:text-balance text-gray-200 p-8 border-t border-white/20">
            Deposit your recyclables into a ReVend machine and use the app to track your recycling progress and rewards in real-time.
            </dd>
          </div>
          <div className=" bg-primary rounded-3xl">
            <dt className="tracking-tight text-lg font-medium text-gray-200 p-8">
              3. Redeem and Manage Rewards
            </dt>
            <dd className="text-sm lg:text-balance text-gray-200 p-8 border-t border-white/20">
            Redeem and manage your rewards within the app. Check your points and explore special offers while staying motivated with leaderboards.
            </dd>
          </div>
        </dl>
      
    </Section>
  )
}

export default Steps