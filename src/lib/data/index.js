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
		} catch (e) {
			setIsError(true);
			setError(e);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		effect();
	}, []);

	return { data, loading, isError, error };
};
