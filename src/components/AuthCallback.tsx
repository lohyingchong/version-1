import React, { useEffect } from 'react'

const AuthCallback: React.FC = () => {
  useEffect(() => {
    // Handle OAuth callback
    const handleCallback = () => {
      // In a real implementation, this would handle the OAuth callback
      // For now, just redirect to home
      window.location.href = '/'
    }

    handleCallback()
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600">Processing authentication...</p>
      </div>
    </div>
  )
}

export default AuthCallback
