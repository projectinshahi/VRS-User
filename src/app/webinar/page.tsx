import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WebinarSection from "@/components/sections/WebinarSection";

export default function webinar() {
  return (
    <main className=" bg-black text-white min-h-screen">
      <Navbar />
      <WebinarSection />
      <Footer />
    </main>
  );
}
