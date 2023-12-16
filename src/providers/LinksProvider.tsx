import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import _orderBy from 'lodash.orderby';
import { TOrderType, TTableRow } from 'src/components/Table/Table.types';
import { TLink } from 'src/utils/types/links';
import { validate } from 'src/utils/validation';
import LinksServices from 'src/services/links.services';

interface ILinksState {
	links: TLink[];
	orderBy: (row: TTableRow, orderType: TOrderType) => void;
}

export const LinksContext = createContext<ILinksState>({} as ILinksState);

export const LinksProvider: React.FC<PropsWithChildren<object>> = ({ children }) => {
	const [links, setLinks] = useState<TLink[]>([]);

	useEffect(() => {
		const fetchLinks = async () => {
			const links = await LinksServices.getLinks();
			setLinks(links);
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
