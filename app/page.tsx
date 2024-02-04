import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Services from "@/components/main/Services";
import Testimonial from "@/components/main/testimonial";
import FAQSection from "@/components/main/FAQSection";
import ContactForm from "@/components/main/ContactForm"
import AboutUs from "@/components/main/AboutUs";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Services />
        <AboutUs />
        <Testimonial />
        <Projects />
        <FAQSection/>
        <ContactForm />
      </div>
    </main>
  );
}
