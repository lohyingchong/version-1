import { initializeApp } from 'firebase/app'
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut as firebaseSignOut,
  User
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB5mVDBgq44SVm7nL88FKLjYHpkBHqAMVY",
  authDomain: "devmatchotsym.firebaseapp.com",
  projectId: "devmatchotsym",
  storageBucket: "devmatchotsym.appspot.com",
  messagingSenderId: "416204049864",
  appId: "1:416204049864:web:ee36423801ac76360184fd",
  measurementId: "G-H5FKV1J6HY"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

export { 
  auth, 
  googleProvider, 
  signInWithPopup, 
  firebaseSignOut,
  type User 
}
