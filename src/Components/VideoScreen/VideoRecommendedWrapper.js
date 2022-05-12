import React from "react";

const VideoRecommendedWrapper = ({ children }) => {
	return (
		<div
			className='flex flex-col w-full min-h-fit p-6
                        md:flex-row
                        border-2 border-black'
		>
			{children}
		</div>
	);
};

export default VideoRecommendedWrapper;
