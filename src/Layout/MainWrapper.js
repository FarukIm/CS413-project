import React from "react";

const MainWrapper = ({ children }) => {
	return (
		<div className='container mx-auto text-white'>
			<div
				id='main'
				className='flex flex-col md:flex-row md:flex-wrap 
                justify-start p-0 md:p-1 w-full min-h-screen'
			>
				{children}
			</div>
		</div>
	);
};

export default MainWrapper;
