import React from "react";

const Recommended = ({ name }) => {
	return (
		<div
			id='rec'
			className='p-2 mb-6 w-24 h-24 
            border-2 border-black'
		>
			{name}
		</div>
	);
};

export default Recommended;
