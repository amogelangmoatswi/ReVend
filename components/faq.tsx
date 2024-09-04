// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// UI component imports
import * as Craft from "@/components/craft";
import { Button } from "@/components/ui/button";

import { ArrowUpRight } from "lucide-react";

// UI component imports
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Custom components
import { Section, Container } from "@/components/craft";

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: "How do I get started with the ReVend app?",
    answer:
      "Download the ReVend app from your app store, create an account, and follow the setup instructions to connect with our recycling machines. Once set up, you can start recycling and earning rewards.",
  },

  {
    question: "How do I earn rewards?",
    answer:
      "You earn rewards by recycling items through ReVend machines and tracking your activities in the app. Your rewards accumulate as you recycle, and you can manage them directly through the app.",
  },
  {
    question: "What can I do with my rewards?",
    answer:
      "Rewards can be redeemed for discounts, special offers, and other perks. Check the app for available options and how to redeem your points.",
  },
  {
    question: "How does the leaderboard work?",
    answer:
      "The leaderboard displays top recyclers based on their recycling activities. Compete with other users and see how you rank, which can help motivate you to recycle more.",
  },

  {
    question: "What should I do if I encounter a problem with the app or vending machine?",
    answer:
      "If you experience any issues, contact our support team through the app or our website. We’re here to help resolve any problems you may encounter.",
  },

];



const FAQ = () => {
  return (
    <Craft.Section>
      <div className="grid items-stretch md:grid-cols-2 md:gap-10">
      <div className="flex flex-col gap-4 py-6">
          <h3 className="!my-0 text-4xl mt-4 font-semibold tracking-tight text-gray-900 
          lg:text-balance">Frequently Asked Questions</h3>
          <p className="text-base font-medium mt-2 text-gray-500">
          Can&apos;t find the answer you&apos;re looking for? Reach out to our
          customer support team.
          </p>
        </div>

        
        <div className="not-prose flex flex-col gap-4 py-6 md:mt-6">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem
                value={item.question}
                className="rounded-md border-faqbb bg-faqbg px-4 transition-all hover:bg-faqbg/50"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100"
                    >
                      Learn more <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </Craft.Section>
  );
};

export default FAQ;
