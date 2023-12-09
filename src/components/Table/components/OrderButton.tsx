import { useState } from 'react';
import ChevronUp from './../../../../public/chevron-up.svg';
import { TOrderButtonProps } from '../Table.types';

const OrderButton: React.FC<TOrderButtonProps> = ({ onClick }) => {
	const [rotated, setRotated] = useState<boolean>(false);

	const handleClick = () => {
		onClick(rotated ? 'asc' : 'desc');
		setRotated(!rotated);
	};

	return (
		<img
			src={ChevronUp}
			alt="Chevron"
			className={`w-3 ml-2 cursor-pointer transition-transform ${rotated ? 'rotate-180' : 'rotate-0'}`}
			onClick={handleClick}
		/>
	);
};

export default OrderButton;
