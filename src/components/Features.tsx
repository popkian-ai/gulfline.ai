import { Clock, Languages, Shield, TrendingUp, Calendar, MessageCircle } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Never miss a call, day or night. Your AI receptionist is always ready.',
    },
    {
      icon: Languages,
      title: 'Multilingual Support',
      description: 'Communicate in Arabic, English, and other languages fluently.',
    },
    {
      icon: Calendar,
      title: 'Appointment Booking',
      description: 'Schedule appointments automatically and sync with your calendar.',
    },
    {
      icon: MessageCircle,
      title: 'Natural Conversations',
      description: 'Human-like interactions that understand context and intent.',
    },
    {
      icon: TrendingUp,
      title: 'Business Intelligence',
      description: 'Get insights from call data and customer interactions.',
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security protecting your customer data.',
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Powerful <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Features</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to provide exceptional customer service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl p-6 hover:border-cyan-400/40 transition-all group"
            >
              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
