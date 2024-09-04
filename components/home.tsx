"use client";

import Link from "next/link";
import Image from "next/image";
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";
import Placeholder from "@/public/placeholder.jpg";
import Balancer from "react-wrap-balancer";
import GravityTextSwap from "@/components/textswap"; // Make sure this import path is correct

import DownloadButtons from "./ui/btn";
import AvatarCircles from "@/components/magicui/avatar-circles";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight";

const avatarUrls = [
  "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/2287252/pexels-photo-2287252.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://img.freepik.com/free-photo/african-american-woman-mockup-psd-black-long-sleeve-tee-portr_53876-145641.jpg?t=st=1724808691~exp=1724812291~hmac=04e5f3322bb10181419b0ca62e0deb5c3d642a7d9ab3285f1a33d830ed8a9231&w=740",
  "https://images.pexels.com/photos/1820559/pexels-photo-1820559.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const Homepage = () => {
  return (
    <Section className="bg-primary pt-8">
      <Container className="min-h-screen grid items-center md:grid-cols-2 md:gap-12">
        
        <div className="flex text-slate-50 flex-col gap-6 py-4">
          <h1 className="!my-0 text-4xl mt-4 font-semibold tracking-tight lg:text-balance">
            Revolutionizing eco-friendly practices
            <br />
            through{' '}
            <GravityTextSwap
              textArray={["innovation.", "technology.", "incentives."]}
              duration={0.9}
              pauseDuration={2.9}
              className="inline min-w-[180px] text-4xl font-semibold"
            />
          </h1>

          <p className="font-light leading-[1.4] opacity-70">
            <Balancer>
              With our mobile app, you can track your progress, find nearby machines, and stay 
              motivated to recycle more. Join us in our mission to create a cleaner planet, one 
              recycled item at a time.
            </Balancer>
          </p>
          <div className="not-prose flex items-center gap-2">
            <DownloadButtons/>
          </div>
          <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />
        </div>
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg border">
          <Image
            src={Placeholder}
            alt="placeholder"
            className="fill object-cover"
          />
        </div>
      </Container>
    </Section>
  );
};

export default Homepage;