import Hero from "@/components/Hero";
import DualImpact from "@/components/DualImpact";
import ProgramHighlights from "@/components/ProgramHighlights";
import VideoTestimonials from "@/components/VideoTestimonials";
import PhotoGallery from "@/components/PhotoGallery";
import VideoGallery from "@/components/VideoGallery";
import Sponsorship from "@/components/Sponsorship";
import TakeAction from "@/components/TakeAction";
import CallToAction from "@/components/CallToAction";
import StickyNav from "@/components/StickyNav";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <StickyNav />
      <Hero />
      <DualImpact />
      <ProgramHighlights />
      <VideoTestimonials />
      <PhotoGallery />
      <VideoGallery />
      <Sponsorship />
      <TakeAction />
      <CallToAction />
    </main>
  );
};

export default Index;
