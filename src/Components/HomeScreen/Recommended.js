import React from "react";

const Recommended = ({ name }) => {
	return (
		<div
			id='rec'
			className='p-2 mb-4 mx-3 md:mx-0 w-28 h-24 
			flex flex-row md:mb-4 md:w-full
            border-2 border-black'
		>
			{name}
		</div>
	);
};

export default Recommended;
