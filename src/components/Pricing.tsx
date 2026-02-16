import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '99',
      currency: 'AED',
      period: 'month',
      description: 'Perfect for small businesses just getting started',
      features: [
        'Up to 100 calls/month',
        'Basic AI receptionist',
        'Email notifications',
        'Call transcripts',
        'Business hours support',
      ],
    },
    {
      name: 'Professional',
      price: '249',
      currency: 'AED',
      period: 'month',
      description: 'For growing businesses with higher call volume',
      features: [
        'Up to 500 calls/month',
        'Advanced AI features',
        'Calendar integration',
        'SMS notifications',
        'Priority support',
        'Custom voice options',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      currency: '',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited calls',
        'Custom AI training',
        'Multi-location support',
        'Dedicated account manager',
        'API access',
        'SLA guarantee',
      ],
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Pricing</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-8 ${
                plan.popular
                  ? 'border-2 border-cyan-400 relative transform scale-105'
                  : 'border border-slate-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-400 mb-6">{plan.description}</p>

              <div className="mb-6">
                {plan.price === 'Custom' ? (
                  <div className="text-4xl font-bold text-white">Custom</div>
                ) : (
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-slate-400 ml-2">{plan.currency}/{plan.period}</span>
                  </div>
                )}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50'
                    : 'bg-slate-800 text-white hover:bg-slate-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
