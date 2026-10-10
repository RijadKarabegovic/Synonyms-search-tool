import { FirebaseApp, initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
import { defaultFirebaseConfig } from "./firebase.defaults";

function pickConfigValue(
  envValue: string | undefined,
  fallback: string
): string {
  return typeof envValue === "string" && envValue.trim().length > 0
    ? envValue.trim()
    : fallback;
}

const firebaseConfig = {
  apiKey: pickConfigValue(
    import.meta.env.VITE_FIREBASE_API_KEY,
    defaultFirebaseConfig.apiKey
  ),
  authDomain: pickConfigValue(
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    defaultFirebaseConfig.authDomain
  ),
  databaseURL: pickConfigValue(
    import.meta.env.VITE_FIREBASE_DATABASE_URL,
    defaultFirebaseConfig.databaseURL
  ),
  projectId: pickConfigValue(
    import.meta.env.VITE_FIREBASE_PROJECT_ID,
    defaultFirebaseConfig.projectId
  ),
  storageBucket: pickConfigValue(
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    defaultFirebaseConfig.storageBucket
  ),
  messagingSenderId: pickConfigValue(
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    defaultFirebaseConfig.messagingSenderId
  ),
  appId: pickConfigValue(
    import.meta.env.VITE_FIREBASE_APP_ID,
    defaultFirebaseConfig.appId
  ),
};

const REQUIRED_ENV_VARS = [
  "VITE_FIREBASE_API_KEY",
  "VITE_FIREBASE_AUTH_DOMAIN",
  "VITE_FIREBASE_PROJECT_ID",
  "VITE_FIREBASE_STORAGE_BUCKET",
  "VITE_FIREBASE_MESSAGING_SENDER_ID",
  "VITE_FIREBASE_APP_ID",
] as const;

const REQUIRED_CONFIG_KEYS = [
  "apiKey",
  "authDomain",
  "projectId",
  "storageBucket",
  "messagingSenderId",
  "appId",
] as const satisfies ReadonlyArray<keyof typeof firebaseConfig>;

let app: FirebaseApp | null = null;
let firestore: Firestore | null = null;

export function isFirebaseConfigured(): boolean {
  return REQUIRED_CONFIG_KEYS.every((key) => {
    const value = firebaseConfig[key];
    return typeof value === "string" && value.length > 0;
  });
}

export function getDb(): Firestore {
  if (!isFirebaseConfigured()) {
    throw new Error("Firebase is not configured");
  }

  if (!firestore) {
    app = initializeApp(firebaseConfig);
    firestore = getFirestore(app);
  }

  return firestore;
}

export { REQUIRED_ENV_VARS as FIREBASE_ENV_VARS };
