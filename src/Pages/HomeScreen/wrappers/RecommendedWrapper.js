import React from "react";

const RecommendedWrapper = ({ children }) => {
	return (
		<div
			id='recs'
			className='
			bg-gray-700
			flex flex-wrap 
			justify-center
			mt-2
			mx-auto
			p-4 w-full
		    md:w-10/12
			static
			'
		>
			{children}
		</div>
	);
};

export default RecommendedWrapper;
