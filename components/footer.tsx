import Image from "next/image";
import Link from "next/link";
import { Github, Twitter, Facebook } from "lucide-react";
import { Button } from "./ui/button";
import { Container } from "./craft";
import Logo from "@/public/Revend2.png";

export default function Footer() {
  return (
    <footer className="bg-[#002f1b] text-gray-200 py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <Image
              src={Logo}
              alt="ReVend Logo"
              width={100}
              height={29}
              className="dark:invert"
            />
            <p className="text-sm">
              We are at the forefront of the recycling revolution, offering 
              state-of-the-art vending machines that turn waste into value.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <h5 className="font-semibold mb-2">Website</h5>
              <ul className="space-y-1">
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/features">Features</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2">Legal</h5>
              <ul className="space-y-1">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/cookies">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" className="bg-primary w-8 h-8">
                <Github size={16} />
              </Button>
              <Button variant="outline" size="icon" className="bg-primary w-8 h-8">
                <Twitter size={16} />
              </Button>
              <Button variant="outline" size="icon" className="bg-primary w-8 h-8">
                <Facebook size={16} />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-sm text-center">
          © ReVend. All rights reserved. 2024-present.
        </div>
      </Container>
    </footer>
  );
}