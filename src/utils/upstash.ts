import { RedisConfigNodejs } from '@upstash/redis';

export const UPSTASH_CONFIG: RedisConfigNodejs = {
	url: import.meta.env.VITE_UPSTASH_REST_URL,
	token: import.meta.env.VITE_UPSTASH_REST_TOKEN,
};
