/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_PASSWORD: string;
	readonly VITE_FIREBASE_DB_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
