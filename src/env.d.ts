/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_PASSWORD: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
