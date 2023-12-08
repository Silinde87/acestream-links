import Table from '../components/Table/Table';
import useLinks from '../hooks/useLinks';

const LinksPage: React.FC = () => {
	const links = useLinks();

	return (
		<section>
			<h1 className="text-4xl font-bold underline text-center">Acestream Links</h1>
			{links.length > 0 ? <Table links={links} /> : <p>No links available</p>}
		</section>
	);
};

export default LinksPage;
