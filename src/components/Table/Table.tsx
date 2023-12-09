import { ReactNode } from 'react';
import { TABLE_ROW } from 'src/utils/table';
import { TTableProps } from './Table.types';
import TableCell from './components/TableCell';

const Table: React.FC<TTableProps> = ({ links }) => {
	const renderRow = (): ReactNode => {
		return links.map((link, index) => (
			<tr key={`table-link-${index}`}>
				<TableCell text={link.name} as="td" />
				<TableCell as="td">
					<a href={link.hash}>{'...' + link.hash.slice(-8)}</a>
				</TableCell>
				<TableCell text={link.channel || '-'} as="td" />
				<TableCell text={link.competition || '-'} as="td" />
				<TableCell text={link.language || '-'} as="td" />
				<TableCell text={link.sport || '-'} as="td" />
				<TableCell text={link.video_quality || '-'} as="td" />
			</tr>
		));
	};

	return (
		<table className="max-w-4xl min-w-[56rem] border-collapse mt-8 mx-auto">
			<thead>
				<tr>
					<TableCell text={TABLE_ROW.NAME} value="name" as="th" hasOrderIcon />
					<TableCell text={TABLE_ROW.HASH} value="hash" as="th" hasOrderIcon />
					<TableCell text={TABLE_ROW.CHANNEL} value="channel" as="th" hasOrderIcon />
					<TableCell text={TABLE_ROW.COMPETITION} value="competition" as="th" hasOrderIcon />
					<TableCell text={TABLE_ROW.LANGUAGE} value="language" as="th" hasOrderIcon />
					<TableCell text={TABLE_ROW.SPORT} value="sport" as="th" hasOrderIcon />
					<TableCell text={TABLE_ROW.VIDEO_QUALITY} value="video_quality" as="th" hasOrderIcon />
				</tr>
			</thead>
			<tbody>{renderRow()}</tbody>
		</table>
	);
};

export default Table;
