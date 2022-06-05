const LoginForm = ({ onFormSubmit = () => {}, children }) => {
	return (
		<div className='w-full shadow-lg'>
			<form
				onSubmit={onFormSubmit}
				className='bg-cyan-300 py-8 px-4 shadow-sm rounded flex flex-col'
			>
				<div className='mx-auto'>{children}</div>

				<div className='flex items-center space-x-12 justify-center mt-5'>
					<button
						id='submitForm'
						type='submit'
						className='bg-gray-800 
                    hover:bg-gray-400 hover:text-bold transition
                    text-white shadow-md
                    rounded px-4 py-2 '
					>
						Sign in
					</button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
