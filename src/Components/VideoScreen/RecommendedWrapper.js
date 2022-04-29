import React from "react";

const RecommendedWrapper = ({ children }) => {
	return (
		<div
			className='flex flex-wrap w-full min-h-fit
                        justify-start border-2 border-black'
		>
			{children}
		</div>
	);
};

export default RecommendedWrapper;
