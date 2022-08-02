import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB1tBmgqMesAeewS1O2K9vhSKmH_sxvle8',
  authDomain: 'netflix-bae3a.firebaseapp.com',
  projectId: 'netflix-bae3a',
  storageBucket: 'netflix-bae3a.appspot.com',
  messagingSenderId: '302322767599',
  appId: '1:302322767599:web:dc5829560e842e46736d1a',
  measurementId: 'G-CRBKP3X5BH',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
