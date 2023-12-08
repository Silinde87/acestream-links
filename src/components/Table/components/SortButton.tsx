import { useState } from 'react';
import ChevronUp from './../../../../public/chevron-up.svg';

const SortButton: React.FC = () => {
	const [rotated, setRotated] = useState<boolean>(false);

	return (
		<img
			src={ChevronUp}
			alt="Chevron"
			className={`w-3 ml-2 cursor-pointer transition-transform ${rotated ? 'rotate-180' : 'rotate-0'}`}
			onClick={() => setRotated(!rotated)}
		/>
	);
};

export default SortButton;
