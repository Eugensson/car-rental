import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Cars } from "@/components/cars";
import { About } from "@/components/about";
import { Why } from "@/components/why";
import { Testimonial } from "@/components/testimonial";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";
import { BackToTopButton } from "@/components/back-to-top-button";

const Home = () => {
  return (
    <main className="relative overflow-hidden mx-auto max-w-[1920px] bg-white">
      <Header />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonial />
      <Cta />
      <Footer />
      <BackToTopButton />
      <div className="h-[4000px]" />
    </main>
  );
};

export default Home;
