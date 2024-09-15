"use client";

import Image from "next/image";
import { Section, Container } from "@/components/craft";
import Placeholder from "@/public/appscren.png";
import Balancer from "react-wrap-balancer";
import GravityTextSwap from "@/components/textswap";
import DownloadButtons from "./ui/btn";
import AvatarCircles from "@/components/magicui/avatar-circles";

const avatarUrls = [
  "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2287252/pexels-photo-2287252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://img.freepik.com/free-photo/african-american-woman-mockup-psd-black-long-sleeve-tee-portr_53876-145641.jpg?t=st=1724808691~exp=1724812291~hmac=04e5f3322bb10181419b0ca62e0deb5c3d642a7d9ab3285f1a33d830ed8a9231&w=740",
  "https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const Homepage = () => {
  return (
    <Section className="bg-primary">
      <Container className="min-h-[calc(100vh-64px)] flex flex-col justify-center items-center">
        <div className="max-w-4xl w-full text-center mb-12">
          <h1 className="text-slate-50 text-4xl sm:text-2xl lg:text-5xl font-bold tracking-tight mb-6">
            <Balancer>
              Revolutionizing eco-friendly practices through{' '}
              <GravityTextSwap
                textArray={["innovation.", "technology.", "incentives."]}
                duration={0.9}
                pauseDuration={2.9}
                className="inline text-4xl sm:text-5xl lg:text-5xl font-bold text-green-400"
              />
            </Balancer>
          </h1>
          <p className="text-slate-300 text-lg sm:text-xl lg:text-2xl mb-8 max-w-2xl mx-auto">
            <Balancer>
              Track progress, find nearby recycling points, and stay motivated. 
              Join our mission to create a cleaner planet, one recycled item at a time.
            </Balancer>
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <DownloadButtons />
          </div>
          <div className="flex justify-center items-center gap-4">
            <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
            <p className="text-slate-300 text-sm">Join 10,000+ eco-warriors</p>
          </div>
        </div>
        <div className="w-full max-w-2xl">
          <Image
            src={Placeholder}
            alt="ReVend app screenshot"
            className="w-full h-auto object-contain rounded-lg shadow-xl"
            priority
          />
        </div>
      </Container>
    </Section>
  );
};

export default Homepage;