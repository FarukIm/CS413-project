import React from "react";

const RecommendedWrapper = ({ children }) => {
	return (
		<div
			className='flex flex-col 
		w-full md:w-1/3 md:ml-5 md:my-0
		md:border-l-2 border-b-2 border-cyan-800'
		>
			<div className='flex justify-center text-xl mb-1 border-t-2 md:border-t-0 border-cyan-800'>
				Recommended:{" "}
			</div>

			<div
				className='flex flex-wrap w-full h-96 
			justify-center bg-gray-700 overflow-y-auto 
			
			'
			>
				{children}
			</div>
		</div>
	);
};

export default RecommendedWrapper;
