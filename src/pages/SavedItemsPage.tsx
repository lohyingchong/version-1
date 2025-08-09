import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Bookmark, 
  Trash2, 
  ArrowRight, 
  Calendar, 
  Star, 
  Activity,
  Plus,
  Minus,
  Clock,
  BarChart3,
  Trash
} from 'lucide-react'
import { useWishlist } from '../hooks/useWishlist'

const SavedItemsPage: React.FC = () => {
  const {
    bookmarkedItems,
    bookmarkActivities,
    removeFromBookmarks,
    clearAllBookmarks,
    getActivityStats,
    bookmarkCount
  } = useWishlist()

  const [activeTab, setActiveTab] = useState<'bookmarks' | 'activity'>('bookmarks')
  const [showClearConfirm, setShowClearConfirm] = useState(false)

  // Debug logging
  useEffect(() => {
    console.log('SavedItemsPage - bookmarkedItems:', bookmarkedItems)
    console.log('SavedItemsPage - bookmarkCount:', bookmarkCount)
    console.log('SavedItemsPage - bookmarkedItems.length:', bookmarkedItems.length)
  }, [bookmarkedItems, bookmarkCount])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    })
  }

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const handleRemoveBookmark = (itemId: number) => {
    console.log('Removing bookmark with ID:', itemId)
    removeFromBookmarks(itemId)
  }

  const handleClearAll = () => {
    clearAllBookmarks()
    setShowClearConfirm(false)
  }

  const activityStats = getActivityStats()

  const EmptyBookmarksState = () => (
    <div className="text-center py-16">
      <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
        <Bookmark className="h-12 w-12 text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        No Bookmarked Items
      </h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        Services you bookmark will appear here. Bookmark multiple services to save them for later viewing.
      </p>
      <Link
        to="/services"
        className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
      >
        <span>Browse Services</span>
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )

  const EmptyActivityState = () => (
    <div className="text-center py-16">
      <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
        <Activity className="h-12 w-12 text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        No Activity Yet
      </h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        Your bookmark activities will appear here. Start bookmarking services to see your activity history.
      </p>
    </div>
  )

  const ItemCard = ({ item, index }: { item: any; index: number }) => {
    console.log(`Rendering ItemCard ${index}:`, item)
    
    return (
      <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:bg-white/20 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
        <div className="flex flex-col sm:flex-row">
          {/* Image */}
          <div className="sm:w-48 flex-shrink-0">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 sm:h-full object-cover"
              onError={(e) => {
                console.log('Image load error for:', item.image)
                e.currentTarget.src = 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1'
              }}
            />
          </div>

          {/* Content */}
          <div className="flex-1 p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span>Provider: {item.provider}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Bookmarked {formatDate(item.addedAt)}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2 ml-4">
                <button
                  onClick={() => handleRemoveBookmark(item.id)}
                  className="p-2 bg-red-500/20 border border-red-300/50 text-red-600 rounded-xl hover:bg-red-500/30 transition-all duration-200"
                  title="Remove bookmark"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Price and CTA */}
            <div className="flex items-center justify-between">
              <div className="text-lg font-bold text-gray-900">
                {item.price}
              </div>
              
              <Link
                to={`/services/${item.id}`}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 flex items-center space-x-2 group"
              >
                <span>View Details</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const ActivityItem = ({ activity }: { activity: any }) => (
    <div className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
      <div className={`p-2 rounded-full ${
        activity.action === 'added' 
          ? 'bg-green-500/20 border border-green-300/50' 
          : 'bg-red-500/20 border border-red-300/50'
      }`}>
        {activity.action === 'added' ? (
          <Plus className="h-4 w-4 text-green-600" />
        ) : (
          <Minus className="h-4 w-4 text-red-600" />
        )}
      </div>
      
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">
          {activity.action === 'added' ? 'Bookmarked' : 'Removed bookmark from'} "{activity.serviceTitle}"
        </p>
        <div className="flex items-center space-x-1 text-xs text-gray-600">
          <Clock className="h-3 w-3" />
          <span>{formatDateTime(activity.timestamp)}</span>
        </div>
      </div>
    </div>
  )

  // Debug render
  console.log('Rendering SavedItemsPage with:', {
    bookmarkedItemsLength: bookmarkedItems.length,
    bookmarkCount,
    activeTab,
    bookmarkedItems
  })

  return (
    <div className="min-h-screen pt-16">
      {/* Clear All Confirmation Dialog */}
      {showClearConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/90 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Clear All Bookmarks</h3>
            </div>
            
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                Are you sure you want to remove all {bookmarkCount} bookmarked services? This action cannot be undone.
              </p>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowClearConfirm(false)}
                className="flex-1 px-4 py-2 bg-gray-100/50 backdrop-blur-sm border border-gray-200/50 text-gray-700 rounded-xl hover:bg-gray-200/50 transition-all font-medium"
              >
                Cancel
              </button>
              <button
                onClick={handleClearAll}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all font-medium"
              >
                Clear All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Bookmarked Services & Activity
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your saved services and complete bookmark activity history
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Debug Info */}
        <div className="mb-4 p-4 bg-yellow-100 border border-yellow-300 rounded-lg">
          <h4 className="font-semibold text-yellow-800">Debug Info:</h4>
          <p className="text-yellow-700">Bookmarked Items Count: {bookmarkedItems.length}</p>
          <p className="text-yellow-700">Bookmark Count: {bookmarkCount}</p>
          <p className="text-yellow-700">Active Tab: {activeTab}</p>
          <details className="mt-2">
            <summary className="cursor-pointer text-yellow-800 font-medium">View Bookmarked Items</summary>
            <pre className="mt-2 text-xs text-yellow-700 overflow-auto max-h-40">
              {JSON.stringify(bookmarkedItems, null, 2)}
            </pre>
          </details>
        </div>

        {/* Activity Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center mb-2">
              <Bookmark className="h-6 w-6 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{bookmarkCount}</div>
            <div className="text-sm text-gray-600">Active Bookmarks</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center mb-2">
              <BarChart3 className="h-6 w-6 text-green-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{activityStats.totalActivities}</div>
            <div className="text-sm text-gray-600">Total Activities</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center mb-2">
              <Plus className="h-6 w-6 text-blue-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{activityStats.totalAdded}</div>
            <div className="text-sm text-gray-600">Services Added</div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center mb-2">
              <Activity className="h-6 w-6 text-orange-500" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{activityStats.todayActivities}</div>
            <div className="text-sm text-gray-600">Today's Activity</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden mb-6">
          <div className="flex border-b border-white/20">
            <button
              onClick={() => setActiveTab('bookmarks')}
              className={`flex-1 px-6 py-4 text-sm font-medium transition-all flex items-center justify-center space-x-2 ${
                activeTab === 'bookmarks'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:bg-white/20'
              }`}
            >
              <Bookmark className="h-4 w-4" />
              <span>Bookmarks ({bookmarkCount})</span>
            </button>
            <button
              onClick={() => setActiveTab('activity')}
              className={`flex-1 px-6 py-4 text-sm font-medium transition-all flex items-center justify-center space-x-2 ${
                activeTab === 'activity'
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-700 hover:bg-white/20'
              }`}
            >
              <Activity className="h-4 w-4" />
              <span>Activity ({activityStats.totalActivities})</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'bookmarks' && (
          <div className="space-y-6">
            {bookmarkedItems.length === 0 ? (
              <EmptyBookmarksState />
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Your Bookmarks ({bookmarkCount} {bookmarkCount === 1 ? 'service' : 'services'})
                  </h2>
                  {bookmarkCount > 0 && (
                    <button
                      onClick={() => setShowClearConfirm(true)}
                      className="flex items-center space-x-2 px-4 py-2 bg-red-500/20 border border-red-300/50 text-red-600 rounded-xl hover:bg-red-500/30 transition-all duration-200"
                    >
                      <Trash className="h-4 w-4" />
                      <span>Clear All</span>
                    </button>
                  )}
                </div>
                
                <div className="space-y-4">
                  {bookmarkedItems.map((item, index) => {
                    console.log(`Mapping item ${index}:`, item)
                    return (
                      <ItemCard key={`bookmark-${item.id}-${index}`} item={item} index={index} />
                    )
                  })}
                </div>
              </>
            )}
          </div>
        )}

        {activeTab === 'activity' && (
          <div className="space-y-6">
            {bookmarkActivities.length === 0 ? (
              <EmptyActivityState />
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Bookmark Activity ({activityStats.totalActivities} {activityStats.totalActivities === 1 ? 'action' : 'actions'})
                  </h2>
                  <div className="text-sm text-gray-600">
                    Complete history of your bookmark actions
                  </div>
                </div>
                
                <div className="space-y-3">
                  {bookmarkActivities.map((activity) => (
                    <ActivityItem key={activity.id} activity={activity} />
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Quick Actions */}
        {(bookmarkedItems.length > 0 || bookmarkActivities.length > 0) && (
          <div className="mt-12 text-center">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Ready to explore more services?
              </h3>
              <p className="text-gray-600 mb-6">
                Discover new professionals and services that match your needs
              </p>
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
              >
                <span>Browse All Services</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SavedItemsPage
