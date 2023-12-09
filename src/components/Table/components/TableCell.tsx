import { useContext } from 'react';
import { LinksContext } from 'src/providers/LinksProvider';
import { TOrderType, TTableCellProps } from '../Table.types';
import OrderButton from './OrderButton';

const TableCell: React.FC<TTableCellProps> = ({ text, value, as, hasOrderIcon, children }) => {
	const CellComponent = as;
	const className = `border-gray-200 border-2 px-2 py-1 text-sm ${as === 'th' ? 'bg-gray-100' : ''}`;

	const { orderBy } = useContext(LinksContext);

	const onClickOrderButton = (orderType: TOrderType) => value && orderBy(value, orderType);

	if (children) {
		return <CellComponent className={className}>{children}</CellComponent>;
	}

	return (
		<CellComponent className={className}>
			<div className="flex justify-between">
				<p>{text}</p>
				{hasOrderIcon && <OrderButton onClick={onClickOrderButton} />}
			</div>
		</CellComponent>
	);
};

export default TableCell;
