'use client';

import { Calendar, UserCheck, Shield, Stethoscope } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Calendar,
      title: 'Smart Appointment Booking',
      description: 'Schedule visits instantly with our integrated calendar system. Real-time availability, automated reminders, and seamless rescheduling.',
      color: 'blue'
    },
    {
      icon: UserCheck,
      title: 'Expert Doctor Profiles',
      description: 'Browse detailed profiles with verified credentials, specialties, patient reviews, and years of experience to find your perfect match.',
      color: 'teal'
    },
    {
      icon: Shield,
      title: 'Secure Patient Portal',
      description: 'Access medical records, test results, and prescription history anytime. Bank-level encryption ensures your data stays private.',
      color: 'blue'
    },
    {
      icon: Stethoscope,
      title: 'Comprehensive Care',
      description: 'From routine checkups to specialized treatments, explore our full range of medical services designed for your wellbeing.',
      color: 'teal'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Healthcare Made <span className="text-blue-600">Simple</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Modern medical services designed around your needs, accessible anytime, anywhere
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClasses = service.color === 'blue' 
              ? 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white'
              : 'bg-teal-100 text-teal-600 group-hover:bg-teal-500 group-hover:text-white';
            
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-start gap-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${colorClasses}`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Today
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
