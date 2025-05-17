import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCzsyfDt1kNPpDk-OSkNv6r9qkFoBAuSDw",
  authDomain: "the-note-app-46603.firebaseapp.com",
  projectId: "the-note-app-46603",
  storageBucket: "the-note-app-46603.firebasestorage.app",
  messagingSenderId: "26816955640",
  appId: "1:26816955640:web:db4714d02e6b313cf6670d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
