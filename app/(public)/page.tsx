import Hero from "@/components/LandingPage/Hero";
import Menu from "@/components/LandingPage/Menu";
import OurServices from "@/components/LandingPage/OurServices";
import OurSpecialty from "@/components/LandingPage/OurSpecialty";

export default function Home() {
  return (
    <main>
      <Hero />
      <Menu />
      <OurSpecialty />
      <OurServices />
    </main>
  );
}
