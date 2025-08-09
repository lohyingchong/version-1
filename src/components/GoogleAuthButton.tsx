import React from 'react'
import { useGoogleAuth } from '../hooks/useGoogleAuth'

interface GoogleAuthButtonProps {
  onSuccess?: (user: any) => void
  onError?: (error: string) => void
  className?: string
}

const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({ 
  onSuccess, 
  onError, 
  className = "" 
}) => {
  const { signInWithGoogle, isLoading, error, user } = useGoogleAuth()

  React.useEffect(() => {
    if (user && onSuccess) {
      onSuccess(user)
    }
  }, [user, onSuccess])

  React.useEffect(() => {
    if (error && onError) {
      onError(error)
    }
  }, [error, onError])

  return (
    <button
      onClick={signInWithGoogle}
      disabled={isLoading}
      className={`flex items-center justify-center px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-gray-700 hover:bg-white/30 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {isLoading ? (
        <div className="w-5 h-5 mr-2 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
      ) : (
        <img 
          src="https://www.google.com/favicon.ico" 
          alt="Google" 
          className="w-5 h-5 mr-2" 
        />
      )}
      {isLoading ? 'Signing in...' : 'Google'}
    </button>
  )
}

export default GoogleAuthButton
