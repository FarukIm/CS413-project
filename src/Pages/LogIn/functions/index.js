export function createOnFormSubmitted({ username, password, navigate }) {
	return async (e) => {
		e.preventDefault();
		console.log("Submitting to the server", { username, password });

		// submit to the server and get a response
		const response = await fetch(
			"https://6294acf6a7203b3ed06e7dcb.mockapi.io/users",
			{
				method: "POST",
				body: { username, password },
			}
		);
		console.log({ response });

		try {
			const data = await response.json();

			let { success, jwt } = data;

			console.log(jwt);
			if (!success) {
				localStorage.setItem("DUMMY_JWT", jwt);
				navigate("/");
			} else {
				console.log("error");
			}

			console.log({ data });
		} catch (error) {
			console.log({ error });
		}
	};
}
