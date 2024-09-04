import React from 'react';
import { Section } from "@/components/craft";
import Image, { StaticImageData } from "next/image";
import Placeholder1 from "@/public/place.png";
import Placeholder2 from "@/public/place.png";
import { Chcard } from './chcard';


type FeatureText = {
  title: string;
  description: string;
  image?: StaticImageData; // Adding image property
};

const featureText: FeatureText[] = [
  {
    title: "Leaderboards",
    description: "Compete with others to boost motivation.",
    image: Placeholder1, // Individual image for Leaderboards
  },
  {
    title: "Real-Time Tracking",
    description: "Track your recycling progress live.",
    image: Placeholder2, // Individual image for Real-Time Tracking
  },
];

const singleFeatureText: FeatureText[] = [
  {
    title: "Reward Management",
    description: "Manage your rewards and unlock offers.",
    // No image for Reward Management
  },
];

const Features = () => {
  return (
    <Section>
      <div className="grid items-stretch md:grid-cols-2 md:gap-10">
        {/* Left Side Content */}
        <div className="flex flex-col gap-4 py-6">
          <h3 className="!my-0 text-4xl mt-4 font-semibold tracking-tight text-gray-900 lg:text-balance">
            Unveil the Perks of Our App
          </h3>
          <p className="text-base font-medium mt-2 text-gray-500">
            Discover how our app makes recycling smarter, easier, and more rewarding.
          </p>
        </div>

        {/* Right Side Cards */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          {featureText.map(({ title, description, image }, index) => (
            <div
              className="flex flex-col rounded-lg border p-0 shadow-lg bg-white transition-transform hover:scale-105"
              key={index}
            >
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src={image!} // Using the image property for each feature
                  alt={title}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }} // Updated styling
                />
              </div>
              <div className="p-4"> {/* Adding padding to the text container */}
                <h4 className="flex font-medium text-gray-800">{title}</h4>
                <p className="mt-1">{description}</p> {/* Adjusting margin-top */}
              </div>
            </div>
          ))}

          {/* Chcard Component */}
          <div className="md:col-span-2 flex justify-center items-center h-full transition-transform hover:scale-105">
            <Chcard />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Features;
