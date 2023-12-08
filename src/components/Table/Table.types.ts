import { TLink } from '../../types/links';

export type TTable = {
	links: TLink[];
};

export type TTableCell = {
	text?: string;
	as: 'th' | 'td';
	hasSortIcon?: boolean;
	children?: React.ReactNode;
};
