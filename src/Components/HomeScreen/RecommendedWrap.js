import React from "react";

const RecommendedWrap = ({ children }) => {
	return (
		<div
			id='recs'
			className='flex flex-row flex-wrap 
            md:flex-col justify-around md:justify-start 
            md:items-center p-5 md:w-56
            border-2 border-black'
		>
			{children}
		</div>
	);
};

export default RecommendedWrap;
