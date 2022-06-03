import { useState } from "react";
import { useNavigate } from "react-router-dom";
//Components
import LoginForm from "../../Components/LoginForm";
import Header from "../../Layout/Header";

const LogIn = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const loginApi = "tralala";
	const onFormSubmit = async (e) => {
		try {
			e.preventDefault();

			console.log({ email, password });

			const result = await loginApi({ email, password });
			console.log({ result });

			const { success, jwt } = result;
			console.log({ success });

			if (success) {
				localStorage.setItem("UPSTART_JWT", jwt);
				navigate("/");
			} else {
				navigate("/login");
			}
		} catch (error) {
			console.log("[LoginPage/onFormSubmit]", { error });
		}
	};
	return (
		<>
			<Header />
			<div className='md:w-4/12 w-6/12 h-100 mx-auto mt-12'>
				<LoginForm />
			</div>
		</>
	);
};

export default LogIn;
