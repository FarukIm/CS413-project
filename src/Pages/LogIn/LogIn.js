import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Components
import LoginForm from "../../Components/LoginForm";
import Header from "../../Layout/Header";
import FormInput from "../../Components/FormInput";

//Functions
import { createOnFormSubmitted } from "./functions";

const LogIn = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const onFormSubmit = createOnFormSubmitted({
		username,
		password,
		navigate,
	});
	return (
		<div className='bg-gray-700 h-screen w-full pt-20'>
			<Header />

			<div className='md:w-4/12 w-6/12 h-100 mx-auto mt-10'>
				<LoginForm onFormSubmit={onFormSubmit}>
					<FormInput
						field='username'
						onFieldChange={(value) => setUsername(value)}
					/>
					<FormInput
						field='password'
						onFieldChange={(value) => setPassword(value)}
					/>
				</LoginForm>
			</div>
		</div>
	);
};

export default LogIn;
