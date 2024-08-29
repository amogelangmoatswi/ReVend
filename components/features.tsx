// React and Next.js
import React from "react";
import Image, { StaticImageData } from "next/image";

// Layout Components
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Import your images
import Image1 from "@/public/placeholder.jpg";
import Image2 from "@/public/placeholder.jpg";
import Image3 from "@/public/placeholder.jpg";

type FeatureText = {
  image: StaticImageData; // Update to use StaticImageData type for images
  title: string;
  description: string;
};

const featureText: FeatureText[] = [
  {
    image: Image1, // Replace with your image import
    title: "Real-Time Tracking",
    description:
      "Monitor your recycling activities with live updates. Track how much you’ve recycled and see your progress toward rewards in real-time.",
  },
  {
    image: Image2, // Replace with your image import
    title: "Reward Management",
    description:
      "Earn and manage rewards easily. View your accumulated points, redeem discounts, and unlock special offers—all directly through the app.",
  },
  {
    image: Image3, // Replace with your image import
    title: "Leaderboards",
    description:
      "Compete with others and see how you stack up. Foster a friendly competition to boost your recycling motivation.",
  },
];

const Feature = () => {
  return (
    <Section>
        <div className="flex flex-col">
        <a className="inline-flex w-fit items-center text-xs p-1 border rounded-full font-medium duration-150 hover:bg-gray-100">
      <span className="inline-block text-xs rounded-full px-2 py-1 bg-green-500 text-white">
      Features
     </span>
      </a>
        <h2 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 
          lg:text-balance">
        Unveil the Perks of Our App
        </h2>
        <p className="text-base font-medium mt-2 text-gray-500">
        Discover how our app makes recycling smarter, easier, and more rewarding.
        </p>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
            {featureText.map(({ image, title, description }, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <div className="relative w-full aspect-square"> {/* Ensures a square aspect ratio */}
                  <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover" // Ensures the image covers the container
                    className="rounded-lg border"
                  />
                </div>
                <h4 className="text-base sm:text-lg font-semibold">{title}</h4>
                <p className="text-base text-gray-500">{description}</p>
              </div>
            ))}
          </div>
        </div>
        </Section>
  );
};

export default Feature;
