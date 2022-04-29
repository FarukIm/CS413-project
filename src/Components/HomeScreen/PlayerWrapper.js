import React from "react";

const PlayerWrapper = ({ children }) => {
	return (
		<div
			id='player-wrapper'
			className='flex flex-col justify-around items-center 
            w-10/12 min-h-fit px-6 py-2 mb-4 border-2 border-black mx-auto'
		>
			{children}
		</div>
	);
};

export default PlayerWrapper;
