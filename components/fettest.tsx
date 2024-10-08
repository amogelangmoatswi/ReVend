import React from 'react';
import { Section, Container } from "@/components/craft";
import Image, { StaticImageData } from "next/image";
import Placeholder1 from "@/public/place.png";
import Placeholder2 from "@/public/place.png";
import { Chcard } from './chcard';
import BlurFade from './magicui/blur-fade';


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
      <Container>
      <div className="grid items-stretch md:grid-cols-2 md:gap-10">
        {/* Left Side Content */}
        <BlurFade delay={0.25} inView>
        <div className="flex flex-col gap-4">
        <a className="inline-flex w-fit items-center text-xs p-1 border rounded-full font-medium duration-150 hover:bg-gray-100">
      <span className="inline-block text-xs rounded-full px-2 py-1 bg-green-500 text-white">
      Features
     </span>
                   </a>
          <h3 className="text-3xl sm:text-4xl font-normal text-green-700">
            Unveil the Perks of Our App
          </h3>
          <p className="text-base sm:text-lg text-gray-600">
            Discover how our app makes recycling smarter, easier, and more rewarding.
          </p>
        </div>
        </BlurFade>

        {/* Right Side Cards */}
        <BlurFade delay={0.25 * 4} inView>
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
        </BlurFade>
      </div>
      </Container>
    </Section>
  );
};

export default Features;
