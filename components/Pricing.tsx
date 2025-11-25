'use client';

import { Check, Sparkles, Shield, Zap } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Limited Time Pre-Order</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Secure Your Spot Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join early adopters and get exclusive pre-order pricing with lifetime benefits
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-lg mx-auto">
          <div className="relative">
            {/* Popular Badge */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                🎉 Best Value
              </div>
            </div>

            {/* Main Card */}
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-blue-200 overflow-hidden hover:shadow-3xl transition-all duration-300 hover:scale-105">
              {/* Card Header */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Pre-Order Special</h3>
                <p className="text-blue-100 mb-6">Limited availability - Act fast!</p>
                
                {/* Price */}
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-5xl md:text-6xl font-bold">$29</span>
                </div>
                <p className="text-blue-100 text-sm">One-time payment</p>
              </div>

              {/* Card Body */}
              <div className="p-8">
                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {[
                    'Full access to all features',
                    'Priority customer support',
                    'Lifetime updates included',
                    'Early access to new releases',
                    '30-day money-back guarantee',
                    'Exclusive community access',
                    'Premium onboarding session',
                    'No recurring fees ever'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center mt-0.5">
                        <Check className="w-4 h-4 text-teal-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Stripe Button */}
                <button
                  onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
                  className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg mb-4"
                >
                  Pre-Order Now - $29
                </button>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <Shield className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-xs text-gray-600">Secure Payment</p>
                  </div>
                  <div className="text-center">
                    <Zap className="w-6 h-6 text-teal-500 mx-auto mb-2" />
                    <p className="text-xs text-gray-600">Instant Access</p>
                  </div>
                  <div className="text-center">
                    <Check className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                    <p className="text-xs text-gray-600">Money Back</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm mb-4">
              🔒 Secured by Stripe • 256-bit SSL encryption
            </p>
            <p className="text-gray-500 text-xs">
              Regular price $49 • Save $20 with pre-order pricing
            </p>
          </div>
        </div>

        {/* FAQ Highlight */}
        <div className="mt-16 max-w-3xl mx-auto bg-blue-50 rounded-2xl p-8 border border-blue-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Why Pre-Order Now?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">💰</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Save $20</h4>
              <p className="text-sm text-gray-600">Lock in early bird pricing forever</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">🚀</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">First Access</h4>
              <p className="text-sm text-gray-600">Be among the first to experience it</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">🎁</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Bonus Content</h4>
              <p className="text-sm text-gray-600">Exclusive perks for early supporters</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
