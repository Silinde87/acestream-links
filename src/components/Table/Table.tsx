import { ReactNode } from 'react';
import { TTable } from './Table.types';
import TableCell from './components/TableCell';

const Table: React.FC<TTable> = ({ links }) => {
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
					<TableCell text="Name" as="th" hasSortIcon />
					<TableCell text="Hash" as="th" hasSortIcon />
					<TableCell text="Channel" as="th" hasSortIcon />
					<TableCell text="Competition" as="th" hasSortIcon />
					<TableCell text="Language" as="th" hasSortIcon />
					<TableCell text="Sport" as="th" hasSortIcon />
					<TableCell text="Quality" as="th" hasSortIcon />
				</tr>
			</thead>
			<tbody>{renderRow()}</tbody>
		</table>
	);
};

export default Table;
