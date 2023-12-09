import LinksPage from './pages/LinksPage';
import { LinksProvider } from './providers';

const App = () => {
	return (
		<LinksProvider>
			<LinksPage />
		</LinksProvider>
	);
};

export default App;
