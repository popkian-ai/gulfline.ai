import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does Gulfline AI work?',
      answer: 'Gulfline AI uses advanced artificial intelligence to answer your business calls 24/7. When a call comes in, our AI receptionist answers naturally, understands the caller\'s needs, and can handle bookings, answer questions, or transfer calls to you when needed.',
    },
    {
      question: 'Can it speak Arabic?',
      answer: 'Yes! Gulfline AI is fluent in both Arabic and English, making it perfect for businesses serving the Gulf region. It can seamlessly switch between languages based on the caller\'s preference.',
    },
    {
      question: 'How long does setup take?',
      answer: 'Setup is quick and easy. Most businesses are up and running within 24 hours. We\'ll help you customize your AI receptionist\'s responses and integrate it with your existing systems.',
    },
    {
      question: 'What happens if the AI can\'t help?',
      answer: 'If the AI encounters a situation it can\'t handle, it will smoothly transfer the call to you or a designated team member. You stay in control while the AI handles routine inquiries.',
    },
    {
      question: 'Is my customer data secure?',
      answer: 'Absolutely. We use enterprise-grade security and comply with international data protection standards. All conversations are encrypted and stored securely.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, there are no long-term contracts. You can cancel your subscription at any time with no penalties.',
    },
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Questions</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Everything you need to know about Gulfline AI
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="text-white font-semibold text-lg pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
