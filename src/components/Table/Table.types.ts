import { TLink } from 'src/utils/types/links';

export type TTableRow = 'name' | 'hash' | 'channel' | 'competition' | 'language' | 'sport' | 'video_quality';

export type TOrderType = 'asc' | 'desc';

export type TTableProps = {
	links: TLink[];
};

export type TTableCellProps = {
	text?: string;
	value?: TTableRow;
	as: 'th' | 'td';
	hasOrderIcon?: boolean;
	children?: React.ReactNode;
};

export type TOrderButtonProps = {
	onClick: (orderType: TOrderType) => void;
};
