/**
 * Public Firebase web client config for this project.
 * These values are safe to embed in frontend bundles (security is enforced via Firestore rules).
 * Override any field with matching VITE_FIREBASE_* env vars at build time.
 */
export const defaultFirebaseConfig = {
  apiKey: "AIzaSyBnsZvXmN5OZZME1IMhVTTmVnpoD8M1Lr4",
  authDomain: "sstool-fde3b.firebaseapp.com",
  databaseURL:
    "https://sstool-fde3b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "sstool-fde3b",
  storageBucket: "sstool-fde3b.appspot.com",
  messagingSenderId: "239680562483",
  appId: "1:239680562483:web:393f31510ed9feb6408a46",
} as const;
