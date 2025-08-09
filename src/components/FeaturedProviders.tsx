import React from 'react'
import { Star, MapPin, Clock, ArrowRight } from 'lucide-react'

const providers = [
  {
    id: 1,
    name: 'Sarah Chen',
    title: 'Senior UX Designer',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    rating: 4.9,
    reviews: 127,
    location: 'San Francisco, CA',
    responseTime: '2 hours',
    price: '$85/hour',
    skills: ['UI/UX Design', 'Figma', 'User Research'],
    description: 'Specialized in creating intuitive user experiences for SaaS products with 8+ years of experience.'
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    title: 'Full Stack Developer',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    rating: 4.8,
    reviews: 89,
    location: 'Austin, TX',
    responseTime: '1 hour',
    price: '$95/hour',
    skills: ['React', 'Node.js', 'AWS'],
    description: 'Building scalable web applications with modern technologies. Expert in React and cloud architecture.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    title: 'Digital Marketing Strategist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    rating: 5.0,
    reviews: 156,
    location: 'New York, NY',
    responseTime: '30 minutes',
    price: '$75/hour',
    skills: ['SEO', 'Google Ads', 'Analytics'],
    description: 'Helping businesses grow through data-driven marketing strategies and conversion optimization.'
  },
  {
    id: 4,
    name: 'David Kim',
    title: 'Brand Designer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80',
    rating: 4.9,
    reviews: 73,
    location: 'Los Angeles, CA',
    responseTime: '3 hours',
    price: '$65/hour',
    skills: ['Logo Design', 'Brand Identity', 'Illustration'],
    description: 'Creating memorable brand identities that connect with audiences and drive business growth.'
  }
]

const FeaturedProviders: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with top-rated professionals who deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {providers.map((provider) => (
            <div
              key={provider.id}
              className="group cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Profile Image */}
              <div className="relative">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-2 py-1 flex items-center space-x-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span className="text-xs font-semibold text-white">{provider.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {provider.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {provider.title}
                  </p>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {provider.description}
                  </p>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {provider.skills.slice(0, 2).map((skill, index) => (
                    <span
                      key={index}
                      className="bg-blue-100/50 backdrop-blur-sm text-blue-700 text-xs px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {provider.skills.length > 2 && (
                    <span className="text-xs text-gray-500">
                      +{provider.skills.length - 2} more
                    </span>
                  )}
                </div>

                {/* Stats */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-1 text-gray-600">
                      <MapPin className="h-3 w-3" />
                      <span>{provider.location}</span>
                    </div>
                    <span className="font-semibold text-gray-900">{provider.price}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Clock className="h-3 w-3" />
                      <span>Responds in {provider.responseTime}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span>{provider.reviews} reviews</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-2 px-4 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 flex items-center justify-center space-x-2 group">
                  <span>View Profile</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-gray-700 px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-200 flex items-center space-x-2 mx-auto">
            <span>View All Professionals</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProviders
