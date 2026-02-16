import { Stethoscope, Scissors, Briefcase, Utensils, Wrench, Store } from 'lucide-react';

export default function UseCases() {
  const useCases = [
    {
      icon: Stethoscope,
      title: 'Healthcare Clinics',
      description: 'Handle appointment scheduling, patient inquiries, and prescription refill requests.',
    },
    {
      icon: Scissors,
      title: 'Salons & Spas',
      description: 'Book appointments, answer service questions, and manage cancellations.',
    },
    {
      icon: Briefcase,
      title: 'Professional Services',
      description: 'Screen potential clients, schedule consultations, and provide information.',
    },
    {
      icon: Utensils,
      title: 'Restaurants',
      description: 'Take reservations, answer menu questions, and handle delivery inquiries.',
    },
    {
      icon: Wrench,
      title: 'Home Services',
      description: 'Schedule service appointments, provide quotes, and manage emergency calls.',
    },
    {
      icon: Store,
      title: 'Retail Stores',
      description: 'Answer product questions, check inventory, and provide store information.',
    },
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Perfect For <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Your Business</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Trusted by small businesses across the Gulf region
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all hover:transform hover:scale-105"
            >
              <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <useCase.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">{useCase.title}</h3>
              <p className="text-slate-400">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
