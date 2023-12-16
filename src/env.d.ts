/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_PASSWORD: string;
	readonly VITE_UPSTASH_REST_TOKEN: string;
	readonly VITE_UPSTASH_REST_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
