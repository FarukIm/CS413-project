import React from "react";

const RecommendedWrapper = ({ children }) => {
	return (
		<div
			className='flex flex-wrap w-full md:w-1/3 h-96 md:ml-5 my-4 md:my-0
                        justify-center bg-gray-700 overflow-y-auto border-l-2 border-b-2 border-black
						'
		>
			{children}
		</div>
	);
};

export default RecommendedWrapper;
