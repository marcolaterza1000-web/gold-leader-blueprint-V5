import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import TrustBar from "@/components/TrustBar";
import ProblemSection from "@/components/ProblemSection";
import AboutMarco from "@/components/AboutMarco";
import MethodSection from "@/components/MethodSection";
import ResultsSection from "@/components/ResultsSection";
import TransformationGallery from "@/components/TransformationGallery";
import GoogleReviews from "@/components/GoogleReviews";
import BookingSection from "@/components/BookingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => (
  <div className="min-h-screen bg-[#0a0a0a]">
    <Navbar />
    <HeroSection />
    <StatsBar />
    <TrustBar />
    <ProblemSection />
    <AboutMarco />
    <MethodSection />
    <ResultsSection />
    <TransformationGallery />
    <GoogleReviews />
    <BookingSection />
    <FAQSection />
    <Footer />
    <FloatingButtons />
  </div>
);

export default Index;
