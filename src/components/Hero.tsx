import { Sparkles, Globe, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMTAwIDAgTCAwIDAgMCAxMDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-400/10 border border-cyan-400/30 rounded-full mb-8 backdrop-blur-sm animate-fade-in">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span className="text-cyan-400 text-sm font-medium">Launching Soon in the Gulf Region</span>
        </div>

        <div className="flex items-center justify-center mb-10">
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-green-400 to-yellow-400 rounded-3xl blur-2xl opacity-40"></div>
            <img
              src="/GL-logo.png"
              alt="Gulfline AI"
              className="relative w-32 h-32 sm:w-40 sm:h-40 object-contain drop-shadow-2xl"
              style={{ mixBlendMode: 'lighten' }}
            />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight tracking-wide">
          GULFLINE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">AI</span>
        </h1>

        <p className="text-xl sm:text-2xl text-slate-400 mb-6 font-light tracking-wider">
          AI VOICE RECEPTIONIST
        </p>

        <p className="text-base sm:text-lg text-slate-500 mb-4">
          FOR GCC SMALL BUSINESSES
        </p>

        <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Never miss a call again. Advanced AI technology coming soon to serve businesses across the Gulf nations.
        </p>

        <div className="flex items-center justify-center gap-3 mb-16 flex-wrap">
          <Globe className="w-5 h-5 text-cyan-400" />
          <span className="text-slate-300 text-sm sm:text-base">UAE • Saudi Arabia • Kuwait • Bahrain • Qatar • Oman</span>
        </div>

        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 border border-cyan-400/20 rounded-2xl p-8 backdrop-blur-sm max-w-md mx-auto shadow-2xl">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="w-5 h-5 text-cyan-400" />
            <h3 className="text-white font-semibold text-lg">Get Early Access</h3>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-slate-950/70 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              Join Waitlist
            </button>
          </form>
          <p className="text-slate-500 text-sm mt-4">
            Be the first to know when we launch
          </p>
        </div>
      </div>
    </div>
  );
}
