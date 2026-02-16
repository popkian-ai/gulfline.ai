import { Mail, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex items-center gap-3">
            <img
              src="/GL-logo.png"
              alt="Gulfline AI"
              className="w-10 h-10 object-contain"
              style={{ mixBlendMode: 'lighten' }}
            />
            <span className="text-xl font-bold text-white tracking-wide">GULFLINE AI</span>
          </div>

          <p className="text-slate-400 max-w-md text-sm">
            AI Voice Receptionist for GCC Small Businesses
          </p>

          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-slate-500" />
            <a href="mailto:hello@gulfline.ai" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
              hello@gulfline.ai
            </a>
          </div>

          <div className="flex gap-6 pt-2">
            <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="pt-6 border-t border-slate-800 w-full">
            <p className="text-slate-500 text-sm">
              &copy; {currentYear} Gulfline AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
