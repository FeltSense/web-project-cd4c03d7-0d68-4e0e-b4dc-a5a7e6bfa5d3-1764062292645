import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  const trustBadges = [
    { icon: '🏥', label: 'Board Certified', value: '100%' },
    { icon: '⭐', label: 'Patient Rating', value: '4.9/5' },
    { icon: '👥', label: 'Patients Served', value: '50K+' }
  ]

  return (
    <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-b from-blue-50 via-white to-gray-50 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 animate-bounce-slow">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold">Trusted Healthcare Partner</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Health,{' '}
              <span className="text-blue-600">Our Priority</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Experience compassionate, personalized healthcare from board-certified professionals. We combine cutting-edge medical expertise with genuine care for your wellbeing.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link
                href="#contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Schedule Consultation</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="#services"
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold border-2 border-blue-600 hover:bg-blue-50 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Our Services
              </Link>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0">
              {trustBadges.map((badge, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <div className="text-xl font-bold text-blue-600 mb-1">{badge.value}</div>
                  <div className="text-xs text-gray-600 font-medium">{badge.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            {/* Main Image Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
              <Image
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1920&q=80"
                alt="Healthcare professional providing compassionate care"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Overlay gradient for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
            </div>

            {/* Floating Trust Card */}
            <div 
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs hidden lg:block"
              style={{
                animation: 'float 3s ease-in-out infinite'
              }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">24/7</div>
                  <div className="text-sm text-gray-600 font-medium">Emergency Care Available</div>
                </div>
              </div>
            </div>

            {/* Floating Review Card */}
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-5 max-w-xs hidden lg:block">
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-2 font-medium">&quot;Exceptional care and attention. Highly recommend!&quot;</p>
              <p className="text-xs text-gray-500">- Sarah M., Patient</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
