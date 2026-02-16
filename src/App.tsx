import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UseCases from './components/UseCases';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="use-cases">
        <UseCases />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="booking">
        <Booking />
      </div>
      <Footer />
    </div>
  );
}

export default App;
