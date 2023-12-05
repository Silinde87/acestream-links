import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, get, ref, child } from 'firebase/database';
import Table from '../components/Table/Table';
import { validate } from '../utils/validation';
import { TLink } from '../types/links';

const LinksPage: React.FC = () => {
	const [links, setLinks] = useState<TLink[]>([]);

	useEffect(() => {
		const firebaseConfig = {
			databaseURL: 'https://acestream-links-a9a3e-default-rtdb.europe-west1.firebasedatabase.app',
		};
		const fetchLinks = async () => {
			const app = initializeApp(firebaseConfig);
			const dbRef = ref(getDatabase(app));
			const response = await get(child(dbRef, 'links'));
			setLinks(response.val());
		};

		validate() && fetchLinks();
	}, []);

	return (
		<section>
			<Table links={links} />
		</section>
	);
};

export default LinksPage;
