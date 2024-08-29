import React from 'react'
import {
    BookOpenIcon,
    ChevronRightIcon,
    MessagesSquareIcon,
    ThumbsUpIcon,
} from "lucide-react";

import { Section, Container } from './craft';

const Aboutus: React.FC = () => {
  return (
    <Section className="bg-aboutcolor">
      <Container>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="lg:w-3/4">
            <a className="inline-flex items-center text-xs gap-x-2 p-1 pr-3 border rounded-full font-medium duration-150 hover:bg-gray-100 whitespace-nowrap">
              <span className="inline-block text-xs rounded-full px-2 py-1 bg-green-500 text-white">
                About Us
              </span>
              <p className="flex items-center text-xs">
                Reduce, Reuse, Recycle
              </p>
            </a>

            <h2 className="scroll-m-20 border-b mt-3 pb-2 text-4xl font-semibold tracking-tight transition-colors first:mt-0">
              Pioneers of a Greener Tomorrow
            </h2>
            <p className="text-base font-medium mt-2 text-gray-500">
              We are at the forefront of the recycling revolution, offering state-of-the-art vending machines that turn waste into value. Our business is built on a foundation of sustainability, innovation, and customer engagement. We aim to make recycling accessible and rewarding for everyone.
            </p>
            <p className="mt-5">
              <a
                className="inline-flex items-center gap-x-1 group font-medium hover:underline underline-offset-4"
                href="#contact"
              >
                Contact us to learn more
                <ChevronRightIcon className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" />
              </a>
            </p>
          </div>
          {/* End Col */}
          <div className="space-y-6 lg:space-y-10">
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                <BookOpenIcon className="w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Sustainability
                </h3>
                <p className="mt-1 text-gray-500">
                  We make it simple to do your part for the environment. By using our machines, you are easily contributing to a cleaner planet with minimal effort.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                <MessagesSquareIcon className="w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Innovation
                </h3>
                <p className="mt-1 text-gray-500">
                  Our technology takes the hassle out of recycling. With just a few taps on our app, you can track your progress, earn rewards, and see the impact you&apos;re making.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="flex">
              {/* Icon */}
              <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground">
                <ThumbsUpIcon className="w-5 h-5" />
              </span>
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Customer Engagement
                </h3>
                <p className="mt-1 text-gray-500">
                  We believe recycling should be something you look forward to. Our app keeps you engaged with real-time updates, personalized tips, and rewards, making you feel connected to a community that&apos;s driving positive change.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
          {/* End Col */}
        </div>
      </Container>
    </Section>
  )
}

export default Aboutus