import { useEffect, useState } from "react";

export const useQuery = ({ fetcherFunc, init = [] }) => {
	const [data, setData] = useState(init);
	const [loading, setLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState();

	const effect = async () => {
		try {
			const data_ = await fetcherFunc();
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

export async function fetcher(getURL) {
	const response = await fetch(getURL, {
		method: "GET",
	});

	const data_ = await response.json();
	return data_;
}
