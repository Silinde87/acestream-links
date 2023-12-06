export const validate = (): boolean => {
	const answer = window.prompt('Password:');
	return answer === import.meta.env.VITE_APP_PASSWORD;
};
