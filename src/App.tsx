import { LinksPage } from './pages';
import { LinksProvider } from './providers';

const App = () => {
	return (
		<LinksProvider>
			<LinksPage />
		</LinksProvider>
	);
};

export default App;
