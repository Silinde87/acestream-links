import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import _orderBy from 'lodash.orderby';
import { initializeApp } from 'firebase/app';
import { getDatabase, get, ref, child } from 'firebase/database';
import { TOrderType, TTableRow } from 'src/components/Table/Table.types';
import { TLink } from 'src/utils/types/links';
import { FIREBASE_OPTIONS } from 'src/utils/firebase';
import { validate } from 'src/utils/validation';

interface ILinksState {
	links: TLink[];
	orderBy: (row: TTableRow, orderType: TOrderType) => void;
}

export const LinksContext = createContext<ILinksState>({} as ILinksState);

export const LinksProvider: React.FC<PropsWithChildren<object>> = ({ children }) => {
	const [links, setLinks] = useState<TLink[]>([]);

	useEffect(() => {
		const fetchLinks = async () => {
			const app = initializeApp(FIREBASE_OPTIONS);
			const dbRef = ref(getDatabase(app));
			const response = await get(child(dbRef, 'links'));
			setLinks(response.val());
		};
		validate() && fetchLinks();
	}, []);

	const orderBy = (row: TTableRow, orderType: TOrderType): void => {
		const orderedLinks = _orderBy(links, row, orderType);
		setLinks(orderedLinks);
	};

	const value = { links, orderBy };

	return <LinksContext.Provider value={value}>{children}</LinksContext.Provider>;
};
