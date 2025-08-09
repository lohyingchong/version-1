import React from 'react'
import { Search, UserCheck, CreditCard, Star } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Browse & Discover',
    description: 'Search through our curated list of verified professionals across various categories and specialties.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: UserCheck,
    title: 'Connect & Consult',
    description: 'Review profiles, portfolios, and ratings. Schedule consultations to discuss your project requirements.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: CreditCard,
    title: 'Subscribe & Pay',
    description: 'Choose from flexible subscription plans or hourly rates. Secure payments with milestone-based releases.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Star,
    title: 'Collaborate & Review',
    description: 'Work directly with professionals through our platform. Leave reviews to help the community grow.',
    color: 'from-orange-500 to-orange-600'
  }
]

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes and connect with the right professional for your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-200 to-transparent transform translate-x-4 z-0" />
                )}
                
                <div className="relative z-10 text-center">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-8 h-8 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-bold text-gray-700 mb-4">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied customers who found their perfect professional match
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-200">
                Find a Professional
              </button>
              <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-200">
                Become a Provider
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
