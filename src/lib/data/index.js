import { useEffect, useState } from "react";

export const useQuery = ({ fetcher, init = [] }) => {
	const [data, setData] = useState(init);
	const [loading, setLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState();

	const effect = async () => {
		try {
			const data_ = await fetcher();
			setData(data_);
		} catch (error) {
			setIsError(true);
			setError(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		effect();
	}, []);

	return { data, loading, isError, error };
};

export const useQueryURL = ({ getURL, method, init = [] }) => {
	return useQuery({
		fetcher: async () => {
			try {
				const response = await fetch(getURL, { method });
				const data_ = await response.json();
				return data_;
			} catch (error) {
				console.log("[fetcher]", { error });
			}
		},

		init,
	});
};
