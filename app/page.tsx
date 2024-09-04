import Image from "next/image";
import { Section, Main, Container } from "@/components/craft";
import Homepage from "@/components/home";
import Footer from "@/components/footer";
import Steps from "@/components/steps";
import FAQ from "@/components/faq";
import Aboutus from "@/components/aboutus";
import CTA from "@/components/cta";
import { Testimonials } from "@/components/testimonials";
import Features from "@/components/fettest";


export default function Home() {
  return (
    <Main>
      <Homepage />
      <Aboutus/>
        <Container>
          <Steps/>
          <Features/>
          <Testimonials/>
          <CTA/>
          <FAQ/>
          
        </Container>
      <Footer />
    </Main>
  );
}
