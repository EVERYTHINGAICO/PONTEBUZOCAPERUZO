import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export const metadata = {
  title: "Home - SOLANA AI KIT",
  description: "Page description",
};

export default function Home() {
  return (
    <>
      <Hero />
      {/* <BusinessCategories /> */}
      <FeaturesPlanet />
      {/* <LargeTestimonial /> */}
      <Cta />
    </>
  );
}
