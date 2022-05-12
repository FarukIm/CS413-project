import React from "react";

const RecommendedWrapper = ({ children }) => {
	return (
		<div
			className='flex flex-wrap w-full md:w-1/3 min-h-fit md:ml-5 my-4 md:my-0
                        justify-between md:justify-center border-2 border-black
						'
		>
			{children}
		</div>
	);
};

export default RecommendedWrapper;
