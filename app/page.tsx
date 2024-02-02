import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Services from "@/components/main/Services";
import Testimonial from "@/components/main/testimonial";
import FAQSection from "@/components/main/FAQSection";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Services />
        <Testimonial />
        <Projects />
        <FAQSection/>
      </div>
    </main>
  );
}
