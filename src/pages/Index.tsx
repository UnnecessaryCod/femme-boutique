import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandValues from "@/components/BrandValues";
import CollectionGrid from "@/components/CollectionGrid";
import BrandStory from "@/components/BrandStory";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BrandValues />
        <CollectionGrid />
        <BrandStory />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
