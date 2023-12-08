import { TTableCell } from '../Table.types';
import SortButton from './SortButton';


const TableCell: React.FC<TTableCell> = ({ text, as, hasSortIcon, children }) => {
	const CellComponent = as;
	const className = `border-gray-200 border-2 px-2 py-1 text-sm ${as === 'th' ? 'bg-gray-100' : ''}`;

	if (children) {
		return <CellComponent className={className}>{children}</CellComponent>;
	}

	return (
		<CellComponent className={className}>
			<div className="flex justify-between">
				<p>{text}</p>
				{hasSortIcon && <SortButton />}
			</div>
		</CellComponent>
	);
};

export default TableCell;
