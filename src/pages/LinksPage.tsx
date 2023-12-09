import { useContext } from 'react';
import Table from '../components/Table/Table';
import { LinksContext } from '../providers/LinksProvider';

const LinksPage: React.FC = () => {
	const { links } = useContext(LinksContext);

	return (
		<section>
			<h1 className="text-4xl font-bold underline text-center">Acestream Links</h1>
			{links.length > 0 ? <Table links={links} /> : <p>No links available</p>}
		</section>
	);
};

export default LinksPage;
