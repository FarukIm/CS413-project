import React from "react";

const RecommendedWrapper = ({ children }) => {
	return (
		<div
			id='recs'
			className='flex flex-row flex-wrap 
			p-4 w-full
			justify-around 
			md:justify-start 
			md:items-center 
			md:flex-col md:w-2/12
			md:content-start
            border-2 border-black'
		>
			{children}
		</div>
	);
};

export default RecommendedWrapper;
