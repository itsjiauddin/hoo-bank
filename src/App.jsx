import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Download from "./components/Download";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-customDark-800 font-poppins text-white text-center px-4 leading-relaxed lg:text-left">
      <div className="mx-auto md:max-w-4xl lg:max-w-6xl">
        <Navbar />
        <Header />
        <About />
        <Download />
        <Testimonial />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}
