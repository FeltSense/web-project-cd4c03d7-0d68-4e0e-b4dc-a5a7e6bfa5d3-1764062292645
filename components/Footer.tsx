'use client'

import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Pricing Plans', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' }
  ]

  const services = [
    { name: 'Primary Care', href: '#services' },
    { name: 'Specialist Consultations', href: '#services' },
    { name: 'Diagnostic Services', href: '#services' },
    { name: 'Emergency Care', href: '#services' }
  ]

  const contactInfo = [
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, text: 'info@healthcareplus.com', href: 'mailto:info@healthcareplus.com' },
    { icon: MapPin, text: '123 Medical Center Dr, Suite 100', href: '#contact' },
    { icon: Clock, text: 'Mon-Fri: 8AM-8PM, Sat-Sun: 9AM-5PM', href: '#contact' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-blue-600 p-2 rounded-xl">
                <Heart className="h-6 w-6 text-white" fill="white" />
              </div>
              <span className="text-xl font-bold text-white">HealthCare Plus</span>
            </div>
            <p className="text-sm leading-relaxed">
              Providing compassionate, patient-centered healthcare services with a commitment to excellence and innovation in medical care.
            </p>
            <div className="flex space-x-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 p-2.5 rounded-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
              Quick Links
              <div className="ml-2 h-0.5 w-8 bg-blue-600 rounded"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-blue-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
              Our Services
              <div className="ml-2 h-0.5 w-8 bg-teal-500 rounded"></div>
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm hover:text-teal-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-teal-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center">
              Contact Us
              <div className="ml-2 h-0.5 w-8 bg-blue-600 rounded"></div>
            </h3>
            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-sm flex items-start space-x-3 hover:text-blue-400 transition-colors duration-300 group"
                  >
                    <item.icon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="leading-relaxed">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white font-semibold text-lg mb-2">Stay Informed About Your Health</h3>
            <p className="text-sm text-gray-400 mb-4">Subscribe to receive health tips, clinic updates, and wellness advice.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
              />
              <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-medium text-sm hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} HealthCare Plus Clinic. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                HIPAA Compliance
              </Link>
              <Link href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Patient Rights
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
