import { ReactNode } from 'react';
import { TTable } from './Table.types';

const Table: React.FC<TTable> = ({ links }) => {
	const renderRow = (): ReactNode => {
		return links.map((link, index) => (
			<tr key={`table-link-${index}`}>
				<td>{link.name}</td>
				<td>
					<a href={link.hash}>{'...' + link.hash.slice(-8)}</a>
				</td>
				<td>{link.channel || '-'}</td>
				<td>{link.competition || '-'}</td>
				<td>{link.language}</td>
				<td>{link.sport}</td>
				<td>{link.video_quality || '-'}</td>
			</tr>
		));
	};

	return (
		<table className="links-table">
			<thead>
				<tr>
					<th>Name</th>
					<th>Hash</th>
					<th>Channel</th>
					<th>Competition</th>
					<th>Language</th>
					<th>Sport</th>
					<th>Quality</th>
				</tr>
			</thead>
			<tbody>{renderRow()}</tbody>
		</table>
	);
};

export default Table;
