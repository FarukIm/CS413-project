import Form from "../../Components/LogIn/Form";
import Header from "../../Components/Shared/Header";

const LogIn = () => {
	return (
		<>
			<Header />
			<div className='md:w-4/12 w-6/12 h-100 mx-auto mt-12'>
				<Form />
			</div>
		</>
	);
};

export default LogIn;
