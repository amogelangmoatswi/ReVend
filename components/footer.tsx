// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports
import Balancer from "react-wrap-balancer";

// UI component imports
import { Button } from "./ui/button";

// Icon imports
import { Github, Twitter, Facebook } from "lucide-react";

// Local component imports
import { Section, Container } from "./craft";

// Asset imports
import Logo from "@/public/Revend2.png";

export default function Footer() {
  return (
    <footer className=" bg-bgbg">
      <Section>
        <Container className="grid gap-12 text-gray-200/90 md:grid-cols-[1.5fr_0.5fr_0.5fr]">
          <div className="not-prose flex flex-col gap-6">
            <Link href="/">
              <h3 className="sr-only">Revend</h3>
              <Image
                src={Logo}
                alt="Logo"
                width={130}
                height={37.37}
                className="transition-all hover:opacity-75 dark:invert"
              ></Image>
            </Link>
            <p>
              <Balancer>
              We are at the forefront of the recycling revolution, offering 
              state-of-the-art vending machines that turn waste into value.
              </Balancer>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h5>Website</h5>
            <Link href="/">About Us</Link>
            <Link href="/">Features</Link>
            <Link href="/">Contact Us</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h5>Legal</h5>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </Container>
        <Container className="not-prose flex flex-col text-gray-200 justify-between gap-6 border-t md:flex-row md:items-center md:gap-2">
          <div className="flex gap-2 ">
            <Button variant="outline" size="icon" className=" bg-primary">
              <Github/>
            </Button>
            <Button variant="outline" size="icon" className=" bg-primary">
              <Twitter />
            </Button>
            <Button variant="outline" size="icon" className=" bg-primary">
              <Facebook />
            </Button>
          </div>
          <p className="text-muted-foreground">
            ©{" "}
            <a href="/">ReVend</a>.
            All rights reserved. 2024-present.
          </p>
        </Container>
      </Section>
    </footer>
  );
}
