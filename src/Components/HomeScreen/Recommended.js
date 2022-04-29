import React from "react";

const Recommended = ({ name }) => {
	return (
		<div
			id='rec'
			className='p-2 mb-2 w-24 h-24 
			flex flex-row md:mb-4 md:w-full
            border-2 border-black'
		>
			{name}
		</div>
	);
};

export default Recommended;
