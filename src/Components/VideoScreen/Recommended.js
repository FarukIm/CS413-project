import React from "react";

const Recommended = ({ name }) => {
	return (
		<div className='w-5/12 md:w-full h-14 border-2 border-black mx-2 my-4'>
			{name}
		</div>
	);
};

export default Recommended;
