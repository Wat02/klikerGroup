import HeroSection from "@/components/HeroSection/HeroSection";
import WhyUsSection from "@/components/WhyUs/WhyUsSection";

export default async function Home() {
  return (
    <section>
      <div>
        <HeroSection />
        <WhyUsSection />
      </div>
    </section>
  );
}
