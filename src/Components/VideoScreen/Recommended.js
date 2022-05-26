import React from "react";

const Recommended = ({ title }) => {
	return (
		<div className='w-5/12 md:w-9/12 h-28 max-w-xs p-2 border-2 border-black mx-2 my-4'>
			{title}
		</div>
	);
};

export default Recommended;
