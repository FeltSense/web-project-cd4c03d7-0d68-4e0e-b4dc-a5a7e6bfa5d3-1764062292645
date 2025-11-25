'use client';

import Image from 'next/image';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Healthcare Administrator',
    avatar: 'https://i.pravatar.cc/150?img=47',
    quote: 'The level of care and professionalism exceeded all expectations. Our team felt supported every step of the way, and the results speak for themselves.',
    rating: 5
  },
  {
    id: 2,
    name: 'Dr. James Chen',
    role: 'Medical Director',
    avatar: 'https://i.pravatar.cc/150?img=33',
    quote: 'Outstanding service with a personal touch. The attention to detail and commitment to excellence made all the difference in our patient outcomes.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Patient Care Coordinator',
    avatar: 'https://i.pravatar.cc/150?img=45',
    quote: 'A transformative experience that brought peace of mind. The compassionate approach combined with cutting-edge solutions created the perfect balance.',
    rating: 5
  }
];

export default function Testimonials() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Professionals
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from those who've placed their trust in our care
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              onMouseEnter={() => setHoveredId(testimonial.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 ${
                hoveredId === testimonial.id
                  ? 'transform -translate-y-2 shadow-2xl border-2 border-blue-600'
                  : 'border-2 border-transparent'
              }`}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-teal-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-8 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-blue-600 ring-offset-2">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-teal-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Share Your Experience
          </a>
        </div>
      </div>
    </section>
  );
}
