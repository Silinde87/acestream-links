import { TLink } from 'src/utils/types/links';
import instance from './instance';

interface LinksAPI {
	getLinks: () => Promise<TLink[]>;
}

const LinksService = (): LinksAPI => {
	const getLinks = async (): Promise<TLink[]> => {
		return instance
			.get('/get/links')
			.then(({ data }) => {
				if (data) {
					return JSON.parse(data.result).links;
				}
			})
			.catch((err) => {
				throw new Error(err);
			});
	};
	return { getLinks };
};

export default LinksService();
