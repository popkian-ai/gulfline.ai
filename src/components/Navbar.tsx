import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-2 rounded-lg">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <span className="ml-2 text-lg font-bold text-white">GULFLINE AI</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('how-it-works')} className="text-slate-300 hover:text-cyan-400 transition-colors text-sm">
              How it Works
            </button>
            <button onClick={() => scrollToSection('features')} className="text-slate-300 hover:text-cyan-400 transition-colors text-sm">
              Features
            </button>
            <button onClick={() => scrollToSection('use-cases')} className="text-slate-300 hover:text-cyan-400 transition-colors text-sm">
              Use Cases
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-slate-300 hover:text-cyan-400 transition-colors text-sm">
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-5 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all text-sm"
            >
              Book Demo
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="block w-full text-left px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded transition-colors"
            >
              How it Works
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="block w-full text-left px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('use-cases')}
              className="block w-full text-left px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded transition-colors"
            >
              Use Cases
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left px-4 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold mt-2"
            >
              Book Demo
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
