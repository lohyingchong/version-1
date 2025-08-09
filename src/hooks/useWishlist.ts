import { useState, useEffect } from 'react'

interface BookmarkItem {
  id: number
  title: string
  provider: string
  price: string
  image: string
  addedAt: string
}

interface BookmarkActivity {
  id: string
  serviceId: number
  serviceTitle: string
  action: 'added' | 'removed'
  timestamp: string
  sessionId: string
}

export const useWishlist = () => {
  const [bookmarkedItems, setBookmarkedItems] = useState<BookmarkItem[]>([])
  const [bookmarkActivities, setBookmarkActivities] = useState<BookmarkActivity[]>([])
  const [sessionId] = useState(() => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`)

  // Load from localStorage on mount
  useEffect(() => {
    console.log('useWishlist - Loading from localStorage...')
    const savedBookmarks = localStorage.getItem('marketplace-bookmarks')
    const savedActivities = localStorage.getItem('marketplace-bookmark-activities')
    
    if (savedBookmarks) {
      try {
        const parsed = JSON.parse(savedBookmarks)
        console.log('useWishlist - Loaded bookmarks:', parsed)
        setBookmarkedItems(parsed)
      } catch (error) {
        console.error('Error parsing saved bookmarks:', error)
        setBookmarkedItems([])
      }
    }
    
    if (savedActivities) {
      try {
        const parsed = JSON.parse(savedActivities)
        console.log('useWishlist - Loaded activities:', parsed)
        setBookmarkActivities(parsed)
      } catch (error) {
        console.error('Error parsing saved activities:', error)
        setBookmarkActivities([])
      }
    }
  }, [])

  // Save bookmarks to localStorage whenever items change
  useEffect(() => {
    console.log('useWishlist - Saving bookmarks to localStorage:', bookmarkedItems)
    localStorage.setItem('marketplace-bookmarks', JSON.stringify(bookmarkedItems))
  }, [bookmarkedItems])

  // Save activities to localStorage whenever activities change
  useEffect(() => {
    console.log('useWishlist - Saving activities to localStorage:', bookmarkActivities)
    localStorage.setItem('marketplace-bookmark-activities', JSON.stringify(bookmarkActivities))
  }, [bookmarkActivities])

  const logActivity = (serviceId: number, serviceTitle: string, action: 'added' | 'removed') => {
    const activity: BookmarkActivity = {
      id: `activity_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      serviceId,
      serviceTitle,
      action,
      timestamp: new Date().toISOString(),
      sessionId
    }

    console.log('useWishlist - Logging activity:', activity)
    setBookmarkActivities(prev => [activity, ...prev].slice(0, 100)) // Keep last 100 activities
  }

  const addToBookmarks = (service: any) => {
    console.log('useWishlist - Adding to bookmarks:', service)
    
    const bookmarkItem: BookmarkItem = {
      id: service.id,
      title: service.title,
      provider: service.provider.name,
      price: service.price.amount,
      image: service.gallery[0],
      addedAt: new Date().toISOString()
    }

    setBookmarkedItems(prev => {
      const exists = prev.find(item => item.id === service.id)
      if (exists) {
        console.log('useWishlist - Service already bookmarked:', service.id)
        return prev
      }
      
      // Log the activity
      logActivity(service.id, service.title, 'added')
      
      const newItems = [...prev, bookmarkItem]
      console.log('useWishlist - New bookmarked items:', newItems)
      return newItems
    })
  }

  const removeFromBookmarks = (serviceId: number) => {
    console.log('useWishlist - Removing from bookmarks:', serviceId)
    
    setBookmarkedItems(prev => {
      const serviceToRemove = prev.find(item => item.id === serviceId)
      if (serviceToRemove) {
        // Log the activity
        logActivity(serviceId, serviceToRemove.title, 'removed')
      }
      const newItems = prev.filter(item => item.id !== serviceId)
      console.log('useWishlist - Items after removal:', newItems)
      return newItems
    })
  }

  const isBookmarked = (serviceId: number) => {
    const result = bookmarkedItems.some(item => item.id === serviceId)
    console.log(`useWishlist - Is service ${serviceId} bookmarked?`, result)
    return result
  }

  const toggleBookmark = (service: any) => {
    console.log('useWishlist - Toggling bookmark for:', service)
    if (isBookmarked(service.id)) {
      removeFromBookmarks(service.id)
    } else {
      addToBookmarks(service)
    }
  }

  const clearAllBookmarks = () => {
    console.log('useWishlist - Clearing all bookmarks')
    const currentBookmarks = [...bookmarkedItems]
    
    // Log removal activity for all bookmarks
    currentBookmarks.forEach(bookmark => {
      logActivity(bookmark.id, bookmark.title, 'removed')
    })
    
    setBookmarkedItems([])
  }

  const getActivityStats = () => {
    const today = new Date().toDateString()
    const todayActivities = bookmarkActivities.filter(
      activity => new Date(activity.timestamp).toDateString() === today
    )
    
    const stats = {
      totalActivities: bookmarkActivities.length,
      todayActivities: todayActivities.length,
      totalAdded: bookmarkActivities.filter(a => a.action === 'added').length,
      totalRemoved: bookmarkActivities.filter(a => a.action === 'removed').length,
      recentActivities: bookmarkActivities.slice(0, 10)
    }
    
    console.log('useWishlist - Activity stats:', stats)
    return stats
  }

  // Debug current state
  console.log('useWishlist - Current state:', {
    bookmarkedItemsLength: bookmarkedItems.length,
    bookmarkActivitiesLength: bookmarkActivities.length,
    bookmarkedItems,
    sessionId
  })

  return {
    bookmarkedItems,
    bookmarkActivities,
    addToBookmarks,
    removeFromBookmarks,
    isBookmarked,
    toggleBookmark,
    clearAllBookmarks,
    getActivityStats,
    bookmarkCount: bookmarkedItems.length,
    sessionId
  }
}
