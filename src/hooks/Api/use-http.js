import { useCallback, useState } from 'react';

const useHttp = () => {
	const [ isSubmiting, setIsSubmiting ] = useState(false);
	const [ didSubmit, setDidSubmit ] = useState(false);
	const [ isLoading, setIsLoading ] = useState(true);
	const [ hasError, setHasError ] = useState(null);

	const sendRequest = useCallback(async (requestConfig, applyData) => {
		setIsSubmiting(true);
		try {
			const response = await fetch(requestConfig.url, {
				method: requestConfig.method ? requestConfig.method : 'GET',
				body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
				headers: {
					'Content-Type': 'application/json'
				}
			});

			if (!response.ok) {
				throw Error('Request Failed!');
			}

			const data = await response.json();

			setIsSubmiting(false);
			setDidSubmit(true);
			setIsLoading(false);

			applyData(data);
		} catch (err) {
			setIsLoading(false);
			setHasError(err.message);
			return err.message || 'Something went wrong!';
		}
	}, []);

	return {
		func: sendRequest,
		isSubmiting,
		didSubmit,
		isLoading,
		hasError
	};
};

export default useHttp;
