import { ReactNode } from 'react';
import { TTable } from './Table.types';

const Table: React.FC<TTable> = ({ links }) => {
	const renderRow = (): ReactNode => {
		return links.map((link, index) => (
			<tr key={`table-link-${index}`}>
				<td>{link.name}</td>
				<td>
					<a href={link.hash}>{link.hash}</a>
				</td>
			</tr>
		));
	};

	return (
		<table className="links-table">
			<thead>
				<tr>
					<th>Name</th>
					<th>Hash</th>
				</tr>
			</thead>
			<tbody>{renderRow()}</tbody>
		</table>
	);
};

export default Table;
