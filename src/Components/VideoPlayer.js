import React from "react";

const VideoPlayer = () => {
	return (
		<div className='w-full md:min-h-fit h-64 md:h-96 shadow-sm shadow-blue-700 mb-2'>
			<iframe
				width='100%'
				height='100%'
				src='https://www.youtube.com/embed/ThiCMd5kGbE'
				title='YouTube video player'
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowfullscreen
			></iframe>
		</div>
	);
};

export default VideoPlayer;
