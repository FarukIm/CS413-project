const VideoInfo = ({ position }) => {
	return (
		<div
			className={`md:mx-5 mt-2 w-full block ${
				position ? "md:hidden" : "hidden md:block"
			} `}
		>
			<div className='w-full h-20 p-5 flex justify-start bg-gray-600'>
				<div className='w-full h-full border-2 border-cyan-300 p-1 pl-3 bg-gray-800'>
					Video Name
				</div>
			</div>
		</div>
	);
};

export default VideoInfo;
