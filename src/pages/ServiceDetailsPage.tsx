import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Clock, 
  Bookmark, 
  Share2, 
  CheckCircle,
  MessageCircle,
  Shield,
  Award,
  Users,
  Calendar,
  X
} from 'lucide-react'
import { services } from '../data/servicesData'
import { useWishlist } from '../hooks/useWishlist'

const ServiceDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [activeTab, setActiveTab] = useState('overview')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)
  const [showBookmarkToast, setShowBookmarkToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  const {
    toggleBookmark,
    isBookmarked
  } = useWishlist()

  const service = services.find(s => s.id === parseInt(id || '0'))

  if (!service) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h2>
          <Link 
            to="/services" 
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            Back to Services
          </Link>
        </div>
      </div>
    )
  }

  const handleSubscribeClick = () => {
    setShowConfirmDialog(true)
  }

  const handleConfirmSubscribe = () => {
    setIsSubscribed(true)
    setShowConfirmDialog(false)
    setTimeout(() => {
      alert('Successfully subscribed to this service! The provider will contact you soon.')
    }, 500)
  }

  const handleCancelSubscribe = () => {
    setShowConfirmDialog(false)
  }

  const handleBookmarkClick = () => {
    toggleBookmark(service)
    const isNowBookmarked = !isBookmarked(service.id)
    setToastMessage(isNowBookmarked ? 'Service bookmarked!' : 'Bookmark removed')
    setShowBookmarkToast(true)
    setTimeout(() => setShowBookmarkToast(false), 3000)
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Toast Notifications */}
      {showBookmarkToast && (
        <div className="fixed top-20 right-4 z-50 animate-in slide-in-from-right duration-300">
          <div className="bg-white/90 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 shadow-lg">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium text-gray-900">{toastMessage}</span>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Confirm Subscription</h3>
              <button
                onClick={handleCancelSubscribe}
                className="p-2 hover:bg-gray-100/50 rounded-xl transition-colors"
              >
                <X className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                Are you sure you want to subscribe to <strong>{service.title}</strong>?
              </p>
              <div className="bg-blue-50/50 backdrop-blur-sm border border-blue-200/50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Service</span>
                  <span className="text-sm font-medium text-gray-900">{service.title}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">Provider</span>
                  <span className="text-sm font-medium text-gray-900">{service.provider.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Price</span>
                  <span className="text-sm font-semibold text-gray-900">{service.price.amount}</span>
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={handleCancelSubscribe}
                className="flex-1 px-4 py-2 bg-gray-100/50 backdrop-blur-sm border border-gray-200/50 text-gray-700 rounded-xl hover:bg-gray-200/50 transition-all font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmSubscribe}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all font-medium"
              >
                Yes, Subscribe
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/services" className="text-blue-600 hover:text-blue-700 flex items-center space-x-1">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Services</span>
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600 capitalize">{service.category}</span>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium truncate">{service.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Service Header */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    {service.featured && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        Featured
                      </span>
                    )}
                    <span className="bg-blue-100/50 backdrop-blur-sm text-blue-700 text-xs px-2 py-1 rounded-full capitalize">
                      {service.category}
                    </span>
                  </div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{service.provider.rating}</span>
                      <span>({service.provider.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{service.provider.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>Responds in {service.provider.responseTime}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <button 
                    onClick={handleBookmarkClick}
                    className={`p-2 backdrop-blur-sm border rounded-xl transition-all duration-200 ${
                      isBookmarked(service.id)
                        ? 'bg-blue-500/20 border-blue-300/50 text-blue-600'
                        : 'bg-white/20 border-white/30 text-gray-600 hover:bg-white/30'
                    }`}
                  >
                    <Bookmark className={`h-5 w-5 ${isBookmarked(service.id) ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl hover:bg-white/30 transition-all">
                    <Share2 className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
              </div>

              {/* Gallery */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <img
                  src={service.gallery[0]}
                  alt={service.title}
                  className="w-full h-64 object-cover rounded-xl col-span-2"
                />
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {service.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100/50 backdrop-blur-sm text-blue-700 text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden">
              <div className="flex border-b border-white/20">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'portfolio', label: 'Portfolio' },
                  { id: 'reviews', label: 'Reviews' },
                  { id: 'faq', label: 'FAQ' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-6 py-4 text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-700 hover:bg-white/20'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Description</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        This comprehensive service includes detailed planning, execution, and delivery of high-quality results. 
                        I work closely with clients to understand their specific needs and provide customized solutions that 
                        exceed expectations. With years of experience in the industry, I bring expertise and professionalism 
                        to every project.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Included</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                          'Initial consultation and planning',
                          'Regular progress updates',
                          'Professional execution',
                          'Quality assurance testing',
                          'Final delivery and handover',
                          '30-day support period'
                        ].map((item, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Process & Timeline</h3>
                      <div className="space-y-3">
                        {[
                          { step: 1, title: 'Discovery & Planning', duration: '1-2 days' },
                          { step: 2, title: 'Design & Development', duration: '5-7 days' },
                          { step: 3, title: 'Review & Refinement', duration: '2-3 days' },
                          { step: 4, title: 'Final Delivery', duration: '1 day' }
                        ].map((phase) => (
                          <div key={phase.step} className="flex items-center space-x-4 p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                              {phase.step}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900">{phase.title}</h4>
                              <p className="text-sm text-gray-600">{phase.duration}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'portfolio' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Work</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                          <img
                            src={`https://images.pexels.com/photos/${196644 + item}/pexels-photo-${196644 + item}.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1`}
                            alt={`Portfolio item ${item}`}
                            className="w-full h-32 object-cover rounded-lg mb-3"
                          />
                          <h4 className="font-medium text-gray-900 mb-1">Project {item}</h4>
                          <p className="text-sm text-gray-600">Sample project description showcasing the quality of work delivered.</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Client Reviews</h3>
                    <div className="space-y-4">
                      {[
                        { name: 'Sarah Johnson', rating: 5, comment: 'Excellent work! Delivered exactly what I needed on time and within budget.' },
                        { name: 'Mike Chen', rating: 5, comment: 'Professional, responsive, and high-quality results. Highly recommended!' },
                        { name: 'Emily Davis', rating: 4, comment: 'Great communication throughout the project. Very satisfied with the outcome.' }
                      ].map((review, index) => (
                        <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                          <div className="flex items-center space-x-3 mb-2">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold">
                              {review.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">{review.name}</h4>
                              <div className="flex items-center space-x-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-700">{review.comment}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'faq' && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
                    <div className="space-y-4">
                      {[
                        { q: 'How long does the project take?', a: 'Typical projects are completed within 7-14 business days, depending on complexity and requirements.' },
                        { q: 'Do you provide revisions?', a: 'Yes, I include up to 3 rounds of revisions to ensure you\'re completely satisfied with the final result.' },
                        { q: 'What if I need ongoing support?', a: 'I offer 30 days of free support after project completion, and ongoing maintenance packages are available.' }
                      ].map((faq, index) => (
                        <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                          <h4 className="font-medium text-gray-900 mb-2">{faq.q}</h4>
                          <p className="text-gray-700">{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Provider Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={service.provider.image}
                  alt={service.provider.name}
                  className="w-16 h-16 rounded-full border-2 border-white/30"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{service.provider.name}</h3>
                  <div className="flex items-center space-x-1 mb-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{service.provider.rating}</span>
                    <span className="text-sm text-gray-600">({service.provider.reviews} reviews)</span>
                  </div>
                  <p className="text-sm text-gray-600">{service.provider.location}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <div className="flex items-center justify-center mb-1">
                    <Users className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="text-lg font-semibold text-gray-900">{service.provider.reviews}</div>
                  <div className="text-xs text-gray-600">Projects</div>
                </div>
                <div className="text-center p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                  <div className="flex items-center justify-center mb-1">
                    <Clock className="h-5 w-5 text-green-500" />
                  </div>
                  <div className="text-lg font-semibold text-gray-900">{service.provider.responseTime}</div>
                  <div className="text-xs text-gray-600">Response</div>
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-4">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="text-sm text-gray-700">Verified Professional</span>
              </div>

              <button className="w-full bg-white/20 backdrop-blur-sm border border-white/30 text-gray-700 py-2 rounded-xl hover:bg-white/30 transition-all flex items-center justify-center space-x-2">
                <MessageCircle className="h-4 w-4" />
                <span>Contact Provider</span>
              </button>
            </div>

            {/* Pricing Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-6">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {service.price.amount}
                  {service.price.originalAmount && (
                    <span className="text-lg text-gray-500 line-through ml-2">
                      {service.price.originalAmount}
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-600 capitalize">
                  {service.price.type} rate
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Service fee</span>
                  <span className="text-gray-900">{service.price.amount}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Platform fee</span>
                  <span className="text-gray-900">$0</span>
                </div>
                <hr className="border-white/20" />
                <div className="flex items-center justify-between font-semibold">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">{service.price.amount}</span>
                </div>
              </div>

              <button
                onClick={handleSubscribeClick}
                disabled={isSubscribed}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                  isSubscribed
                    ? 'bg-green-500 text-white cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-blue-500/25'
                }`}
              >
                {isSubscribed ? (
                  <>
                    <CheckCircle className="h-5 w-5" />
                    <span>Subscribed</span>
                  </>
                ) : (
                  <>
                    <Calendar className="h-5 w-5" />
                    <span>Subscribe Now</span>
                  </>
                )}
              </button>

              {isSubscribed && (
                <p className="text-center text-sm text-green-600 mt-3">
                  ✓ You've successfully subscribed to this service
                </p>
              )}
            </div>

            {/* Trust & Safety */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Trust & Safety</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700">Identity verified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-blue-500" />
                  <span className="text-sm text-gray-700">Top rated seller</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm text-gray-700">Money back guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetailsPage
