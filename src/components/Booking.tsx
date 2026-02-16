import { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, MessageSquare } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    date: '',
    time: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Demo booking submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Book a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Demo</span>
          </h2>
          <p className="text-slate-400 text-lg">
            See Gulfline AI in action. Schedule a personalized demo with our team.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-400/20 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center text-slate-300 mb-2 text-sm font-medium">
                  <User className="w-4 h-4 mr-2 text-cyan-400" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-950/70 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  placeholder="Ahmed Al-Mansoori"
                />
              </div>

              <div>
                <label className="flex items-center text-slate-300 mb-2 text-sm font-medium">
                  <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-950/70 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  placeholder="ahmed@company.com"
                />
              </div>

              <div>
                <label className="flex items-center text-slate-300 mb-2 text-sm font-medium">
                  <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-950/70 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  placeholder="+971 50 123 4567"
                />
              </div>

              <div>
                <label className="flex items-center text-slate-300 mb-2 text-sm font-medium">
                  <User className="w-4 h-4 mr-2 text-cyan-400" />
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-950/70 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  placeholder="Your Company LLC"
                />
              </div>

              <div>
                <label className="flex items-center text-slate-300 mb-2 text-sm font-medium">
                  <Calendar className="w-4 h-4 mr-2 text-cyan-400" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-950/70 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="flex items-center text-slate-300 mb-2 text-sm font-medium">
                  <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-950/70 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center text-slate-300 mb-2 text-sm font-medium">
                <MessageSquare className="w-4 h-4 mr-2 text-cyan-400" />
                Additional Information
              </label>
              <textarea
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-950/70 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your business and what you'd like to see in the demo..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
            >
              Book Your Demo
            </button>

            <p className="text-slate-500 text-sm text-center">
              We'll confirm your appointment within 24 hours
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
