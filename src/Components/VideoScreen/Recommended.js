import React from "react";

const Recommended = ({ title }) => {
	return (
		<div
			className='w-36 md:w-9/12 h-24 md:h-28 max-w-xs p-2 
		 shadow-md shadow-black bg-slate-800 mx-2 my-4'
		>
			{title}
		</div>
	);
};

export default Recommended;
