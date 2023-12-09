import { FirebaseOptions } from "firebase/app";

export const FIREBASE_OPTIONS: FirebaseOptions = {
	databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
};