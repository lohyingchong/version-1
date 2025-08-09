import React from 'react'
import { Code, Palette, TrendingUp, Camera, Pen, Headphones, Calculator, Globe } from 'lucide-react'

const categories = [
  {
    icon: Code,
    title: 'Development',
    description: 'Web & mobile development services',
    count: '120+ providers',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Palette,
    title: 'Design',
    description: 'UI/UX, graphic design, branding',
    count: '85+ providers',
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: TrendingUp,
    title: 'Marketing',
    description: 'Digital marketing & SEO',
    count: '95+ providers',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'Professional photography services',
    count: '60+ providers',
    color: 'from-pink-500 to-pink-600'
  },
  {
    icon: Pen,
    title: 'Writing',
    description: 'Content writing & copywriting',
    count: '75+ providers',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Headphones,
    title: 'Audio',
    description: 'Music production & voice over',
    count: '40+ providers',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Calculator,
    title: 'Consulting',
    description: 'Business & financial consulting',
    count: '55+ providers',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Globe,
    title: 'Translation',
    description: 'Language & localization services',
    count: '30+ providers',
    color: 'from-cyan-500 to-cyan-600'
  }
]

const ServiceCategories: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore Service Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the perfect professional for your project across various industries and specialties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="group cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-3">
                  {category.description}
                </p>
                
                <div className="text-xs text-gray-500 font-medium">
                  {category.count}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServiceCategories
