import React from "react";

const VideoRecommendedWrapper = ({ children }) => {
	return (
		<div
			className='flex flex-col w-full min-h-fit pt-6 md:mb-0
                        md:flex-row
                        '
		>
			{children}
		</div>
	);
};

export default VideoRecommendedWrapper;
