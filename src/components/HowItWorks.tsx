import { Phone, MessageSquare, Brain, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: Phone,
      title: 'Call Arrives',
      description: 'A customer calls your business number',
    },
    {
      icon: Brain,
      title: 'AI Answers',
      description: 'Our AI receptionist answers in natural language',
    },
    {
      icon: MessageSquare,
      title: 'Conversation',
      description: 'AI handles inquiries, bookings, and information',
    },
    {
      icon: CheckCircle,
      title: 'Action Taken',
      description: 'Transfers to you or logs the interaction',
    },
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Works</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Simple, seamless, and intelligent call handling in four steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-400/20 rounded-xl p-6 h-full hover:border-cyan-400/40 transition-all">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-cyan-400 text-sm font-semibold mb-2">Step {index + 1}</div>
                <h3 className="text-white font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-slate-400">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
