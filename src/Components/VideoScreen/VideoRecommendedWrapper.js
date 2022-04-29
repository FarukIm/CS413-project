import React from "react";

const VideoRecommendedWrapper = ({ children }) => {
	return (
		<div
			className='flex flex-col w-full min-h-fit
                        
                        border-2 border-black'
		>
			{children}
		</div>
	);
};

export default VideoRecommendedWrapper;
