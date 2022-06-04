import React from "react";

const LoginForm = () => {
	return (
		<div className='w-full shadow-lg'>
			<form className='bg-cyan-300 py-8 px-4 shadow-sm rounded flex flex-col'>
				<label for='username' className='text-gray-600 font-bold mb-1'>
					Username:
				</label>
				<input
					id='username'
					type='text'
					placeholder='username123'
					className='mb-2 h-10 pl-4'
				/>
				<label for='password' className='text-gray-600 font-bold mb-1'>
					Password:
				</label>
				<input
					id='password'
					type='password'
					placeholder='password'
					className='mb-4 h-10 pl-4'
				/>

				<div className='flex items-center space-x-12 justify-center mt-5'>
					<button
						type='submit'
						className='bg-gray-800 
                    hover:bg-gray-400 hover:text-bold transition
                    text-white shadow-md
                    rounded px-4 py-2 '
					>
						Sign in
					</button>
					<button
						href=''
						className='bg-gray-800 
                    hover:bg-gray-400 hover:text-bold transition
                    text-white shadow-md
                    rounded px-4 py-2'
					>
						Sign up
					</button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;
