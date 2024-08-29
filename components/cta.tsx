// React and Next.js imports
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "@/components/ui/button";

// Custom components
import { Section, Container } from "@/components/craft";

const CTA = () => {
  return (
    <Section>
      <div className="rounded-lg border bg-primary p-6 md:rounded-xl md:p-12">
       
     
        <div className="grid items-end grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-xl lg:text-3xl font-semibold tracking-tight text-gray-200">
            Join the Recycling Revolution
            </p>
            <p className="mt-4 text-gray-200 lg:text-base">
            Get started by downloading our app, find a ReVend machine, and start turning recyclables 
            into valuable rewards.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-2 sm:ml-auto">
            <Button className="gap-2  text-black bg-bggg hover:bg-bghov"
            >
              <svg
                className="size-5"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9998 14.5L21.1998 10L4.8998 1.2C4.7998 1.1 4.5998 1.1 4.2998 1L16.9998 14.5Z"
                  fill="#00F076"
                ></path>
                <path
                  d="M22.9998 21L28.8998 17.8C29.5998 17.4 29.9998 16.8 29.9998 16C29.9998 15.2 29.5998 14.5 28.8998 14.2L22.9998 11L18.2998 16L22.9998 21Z"
                  fill="#FFC900"
                ></path>
                <path
                  d="M2.4 1.8999C2.1 2.1999 2 2.5999 2 2.9999V28.9999C2 29.3999 2.1 29.7999 2.4 30.1999L15.6 15.9999L2.4 1.8999Z"
                  fill="#00D6FF"
                ></path>
                <path
                  d="M16.9998 17.5L4.2998 31C4.4998 31 4.6998 30.9 4.8998 30.8L21.1998 22L16.9998 17.5Z"
                  fill="#FF3A44"
                ></path>
              </svg>
              <span className="text-xs text-gray-600">Download on Google Play</span>
            </Button>
            <Button
              className="gap-2  text-black bg-bggg hover:bg-bghov"
            >
              <svg
                className="size-5"
                viewBox="0 0 61 74"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M51.0332 39.3793C51.0696 36.549 51.8214 33.7739 53.2186 31.3122C54.6157 28.8506 56.6129 26.7823 59.0241 25.2999C57.4923 23.1122 55.4715 21.3118 53.1222 20.0417C50.7728 18.7716 48.1597 18.0668 45.4904 17.9833C39.7961 17.3856 34.2759 21.3906 31.3741 21.3906C28.4163 21.3906 23.9488 18.0427 19.1379 18.1416C16.0261 18.2422 12.9935 19.147 10.3354 20.7681C7.6773 22.3892 5.48446 24.6711 3.97052 27.3917C-2.5874 38.7459 2.30423 55.433 8.58628 64.611C11.7293 69.1052 15.4027 74.1253 20.2092 73.9473C24.9126 73.7522 26.6693 70.948 32.3467 70.948C37.9715 70.948 39.6195 73.9473 44.5236 73.8341C49.5706 73.7522 52.7504 69.3199 55.7833 64.7832C58.0416 61.5809 59.7793 58.0417 60.9322 54.2966C58 53.0565 55.4977 50.9806 53.7374 48.3279C51.9771 45.6751 51.0366 42.5629 51.0332 39.3793Z"
                  fill="black"
                ></path>
                <path
                  d="M41.7704 11.9472C44.5223 8.64377 45.878 4.39769 45.5498 0.110733C41.3456 0.5523 37.4621 2.56163 34.673 5.73837C33.3094 7.29028 32.265 9.09575 31.5995 11.0515C30.9341 13.0073 30.6606 15.0751 30.7948 17.1367C32.8976 17.1583 34.978 16.7025 36.8791 15.8036C38.7803 14.9047 40.4527 13.5862 41.7704 11.9472V11.9472Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="text-xs text-gray-600">Download on App Store</span>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CTA;
