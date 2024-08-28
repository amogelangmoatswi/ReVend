import Image from "next/image";
import { Section, Main, Container } from "@/components/craft";
import Homepage from "@/components/home";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <Main>
      <Homepage />
      <Section>
        <Container>
          <Footer />
        </Container>
      </Section>
    </Main>
  );
}
