import Hero from "./components/Hero";
import LogoTickerTwo from "./components/LogoTickerTwo";
import Navbar from "./components/Navbar";




export default function Home() {
  return (
    <div className="min-h-screen text-center justify-center mt-15">

      <div className="container mx-auto py-2">
        <Navbar />

      </div>

      <div className="container mx-auto py-2">
        <Hero />

      </div>

      <div className="container mx-auto py-2">
        
        <LogoTickerTwo />

      </div>
    </div>
  );
}
