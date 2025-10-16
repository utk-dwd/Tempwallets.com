import Hero from "../components/landing/hero";
import Services from "../components/landing/services";
import About from "../components/landing/about";
import Blogs from "../components/landing/blogs";
import Testimonials from "@/components/landing/testimonials";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Blogs />
      <Testimonials />
      <Footer />
    </>
  );
}
