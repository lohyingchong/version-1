import React, { useState, useMemo } from 'react'
import { Search, Filter, Star, MapPin, Clock, ArrowRight, Grid, List, Loader2 } from 'lucide-react'
import ServiceCard from '../components/ServiceCard'
import { services, categories } from '../data/servicesData'

const SERVICES_PER_PAGE = 6

const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  // Filter services based on category and search
  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesCategory = activeCategory === 'all' || service.category === activeCategory
      const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           service.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  // Calculate pagination
  const totalServices = filteredServices.length
  const totalPages = Math.ceil(totalServices / SERVICES_PER_PAGE)
  const startIndex = 0
  const endIndex = currentPage * SERVICES_PER_PAGE
  const displayedServices = filteredServices.slice(startIndex, endIndex)
  const hasMoreServices = endIndex < totalServices
  const remainingServices = totalServices - endIndex

  // Reset pagination when filters change
  React.useEffect(() => {
    setCurrentPage(1)
  }, [activeCategory, searchQuery])

  const handleLoadMore = async () => {
    if (isLoading || !hasMoreServices) return
    
    setIsLoading(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800))
    
    setCurrentPage(prev => prev + 1)
    setIsLoading(false)
  }

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    setCurrentPage(1)
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Browse Professional Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover talented professionals ready to help you achieve your goals
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent"
                  placeholder="Search services, providers, or skills..."
                />
              </div>

              {/* View Toggle */}
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === 'grid' 
                      ? 'bg-blue-500 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === 'list' 
                      ? 'bg-blue-500 text-white shadow-lg' 
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>

              {/* Filter Button */}
              <button className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-3 rounded-xl text-gray-700 hover:bg-white/30 transition-all">
                <Filter className="h-4 w-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-16 z-20 bg-white/10 backdrop-blur-md border-b border-white/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white/20 text-gray-700 hover:bg-white/30'
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.name}</span>
                <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid/List */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <p className="text-gray-600">
                Showing {displayedServices.length} of {totalServices} services
                {activeCategory !== 'all' && (
                  <span> in {categories.find(c => c.id === activeCategory)?.name}</span>
                )}
              </p>
              {hasMoreServices && (
                <p className="text-sm text-blue-600 font-medium">
                  {remainingServices} more available
                </p>
              )}
            </div>
            
            <select className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500/50">
              <option>Sort by: Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Rating: High to Low</option>
              <option>Response Time</option>
            </select>
          </div>

          {/* Loading State for Initial Load */}
          {displayedServices.length === 0 && !isLoading ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No services found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          ) : (
            <>
              {/* Services Grid */}
              <div className={`grid gap-6 ${
                viewMode === 'grid' 
                  ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1'
              }`}>
                {displayedServices.map((service) => (
                  <ServiceCard 
                    key={service.id} 
                    service={service} 
                    viewMode={viewMode}
                  />
                ))}
              </div>

              {/* Load More Section */}
              {hasMoreServices && (
                <div className="text-center mt-12">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        More Services Available
                      </h3>
                      <p className="text-gray-600">
                        {remainingServices} more {remainingServices === 1 ? 'service' : 'services'} matching your criteria
                      </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200/50 rounded-full h-2 mb-6">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(displayedServices.length / totalServices) * 100}%` }}
                      ></div>
                    </div>

                    <button
                      onClick={handleLoadMore}
                      disabled={isLoading}
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 flex items-center space-x-2 mx-auto disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          <span>Loading...</span>
                        </>
                      ) : (
                        <>
                          <span>Load {Math.min(SERVICES_PER_PAGE, remainingServices)} More Services</span>
                          <ArrowRight className="h-5 w-5" />
                        </>
                      )}
                    </button>

                    {/* Pagination Info */}
                    <div className="mt-4 text-sm text-gray-600">
                      Page {currentPage} of {totalPages}
                    </div>
                  </div>
                </div>
              )}

              {/* All Services Loaded Message */}
              {!hasMoreServices && displayedServices.length > SERVICES_PER_PAGE && (
                <div className="text-center mt-12">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Star className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      You've seen all services!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      You've viewed all {totalServices} services matching your criteria. 
                      Try adjusting your filters to discover more options.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <button
                        onClick={() => {
                          setActiveCategory('all')
                          setSearchQuery('')
                          setCurrentPage(1)
                        }}
                        className="bg-white/20 backdrop-blur-sm border border-white/30 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-white/30 transition-all duration-200"
                      >
                        Clear Filters
                      </button>
                      <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
                      >
                        Back to Top
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
