import { useState, useCallback, useEffect } from 'react'
import { 
  auth, 
  googleProvider, 
  signInWithPopup, 
  firebaseSignOut,
  User as FirebaseUser
} from '../firebase/firebase'

interface GoogleUser {
  id: string
  email: string
  name: string
  picture: string
  given_name: string
  family_name: string
}

interface UseGoogleAuthReturn {
  user: GoogleUser | null
  isLoading: boolean
  error: string | null
  signInWithGoogle: () => Promise<void>
  signOut: () => void
}

const mapFirebaseUser = (user: FirebaseUser | null): GoogleUser | null => {
  if (!user) return null

  return {
    id: user.uid,
    email: user.email || '',
    name: user.displayName || '',
    picture: user.photoURL || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1',
    given_name: user.displayName?.split(' ')[0] || 'User',
    family_name: user.displayName?.split(' ')[1] || ''
  }
}

export const useGoogleAuth = (): UseGoogleAuthReturn => {
  const [user, setUser] = useState<GoogleUser | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const signInWithGoogle = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    try {
      const result = await signInWithPopup(auth, googleProvider)
      const user = mapFirebaseUser(result.user)
      setUser(user)
      localStorage.setItem('firebase_user', JSON.stringify(user))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed')
    } finally {
      setIsLoading(false)
    }
  }, [])

  const signOut = useCallback(() => {
    firebaseSignOut(auth)
      .then(() => {
        setUser(null)
        localStorage.removeItem('firebase_user')
        setError(null)
      })
      .catch((err) => {
        setError(err.message)
      })
  }, [])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(mapFirebaseUser(firebaseUser))
    })

    return () => unsubscribe()
  }, [])

  return {
    user,
    isLoading,
    error,
    signInWithGoogle,
    signOut,
  }
}
