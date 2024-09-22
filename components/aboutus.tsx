import React from 'react'
import {
    BookOpenIcon,
    ChevronRightIcon,
    MessagesSquareIcon,
    ThumbsUpIcon,
} from "lucide-react";

import { Section, Container } from './craft';
import BlurFade from "@/components/magicui/blur-fade";

const Aboutus: React.FC = () => {
  return (
    <Section className="bg-aboutcolor">
      <Container>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="lg:w-3/4">
            <BlurFade delay={0.25} inView>
              <a className="inline-flex items-center text-xs gap-x-2 p-1 pr-3 border rounded-full font-medium duration-150 hover:bg-gray-100 whitespace-nowrap">
                <span className="inline-block text-xs rounded-full px-2 py-1 bg-green-500 text-white">
                  About Us
                </span>
                <p className="flex items-center text-xs">
                  Reduce, Reuse, Recycle
                </p>
              </a>
            </BlurFade>

            <BlurFade delay={0.25 * 2} inView>
              <h2 className="text-3xl mt-2 sm:text-4xl font-normal text-green-700">
                Pioneers of a Greener Tomorrow
              </h2>
            </BlurFade>

            <BlurFade delay={0.25 * 3} inView>
              <p className="text-base font-medium mt-2 text-gray-500">
                We are at the forefront of the recycling revolution, offering state-of-the-art vending machines that turn waste into value. Our business is built on a foundation of sustainability, innovation, and customer engagement. We aim to make recycling accessible and rewarding for everyone.
              </p>
            </BlurFade>

            <BlurFade delay={0.25 * 4} inView>
              <p className="mt-5">
                <a
                  className="inline-flex items-center gap-x-1 group font-medium hover:underline underline-offset-4"
                  href="#contact"
                >
                  Contact us to learn more
                  <ChevronRightIcon className="flex-shrink-0 w-4 h-4 transition ease-in-out group-hover:translate-x-1" />
                </a>
              </p>
            </BlurFade>
          </div>
          {/* End Col */}
          <div className="space-y-6 lg:space-y-10">
            {/* Icon Blocks */}
            {[
              { icon: BookOpenIcon, title: "Sustainability", description: "We make it simple to do your part for the environment. By using our machines, you are easily contributing to a cleaner planet with minimal effort." },
              { icon: MessagesSquareIcon, title: "Innovation", description: "Our technology takes the hassle out of recycling. With just a few taps on our app, you can track your progress, earn rewards, and see the impact you're making." },
              { icon: ThumbsUpIcon, title: "Customer Engagement", description: "We believe recycling should be something you look forward to. Our app keeps you engaged with real-time updates, personalized tips, and rewards, making you feel connected to a community that's driving positive change." }
            ].map((block, index) => (
              <BlurFade key={block.title} delay={0.25 * (index + 5)} inView>
                <div className="flex">
                  <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-green-700 text-primary-foreground">
                    <block.icon className="w-5 h-5" />
                  </span>
                  <div className="ms-5 sm:ms-8">
                    <h3 className="text-xl sm:text-2xl font-light mb-2 border-b border-green-200 text-green-700">
                      {block.title}
                    </h3>
                    <p className="mt-1 text-gray-500">
                      {block.description}
                    </p>
                  </div>
                </div>
              </BlurFade>
            ))}
            {/* End Icon Blocks */}
          </div>
          {/* End Col */}
        </div>
      </Container>
    </Section>
  )
}

export default Aboutus