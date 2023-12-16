import axios from 'axios';
import { UPSTASH_CONFIG } from 'src/utils/upstash';

const instance = axios.create({
	baseURL: UPSTASH_CONFIG.url,
	headers: { Authorization: `Bearer ${UPSTASH_CONFIG.token}` },
});

export default instance;
