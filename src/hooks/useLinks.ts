import { useEffect, useState } from 'react';
import { TLink } from '../types/links';
import { validate } from '../utils/validation';
import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getDatabase, get, ref, child } from 'firebase/database';

const FIREBASE_OPTIONS: FirebaseOptions = {
	databaseURL: import.meta.env.VITE_FIREBASE_DB_URL,
};

const useLinks = () => {
	const [links, setLinks] = useState<TLink[]>([]);

	useEffect(() => {
		const fetchLinks = async () => {
			const app = initializeApp(FIREBASE_OPTIONS);
			const dbRef = ref(getDatabase(app));
			const response = await get(child(dbRef, 'links'));
			setLinks(response.val());
		};
		// validate() && fetchLinks();
		fetchLinks();
	}, []);

	return links;
};

export default useLinks;
