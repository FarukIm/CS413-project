import React from "react";

const MainWrapper = ({ children }) => {
	return (
		<div className='w-full md:w-10/12 p-3 mx-auto'>
			<div
				id='main'
				className='flex flex-col md:flex-row md:flex-wrap 
                justify-start p-4 w-full min-h-screen border-2 border-black'
			>
				{children}
			</div>
		</div>
	);
};

export default MainWrapper;
