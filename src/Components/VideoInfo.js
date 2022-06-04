const VideoInfo = ({ position, title }) => {
	return (
		<div
			className={`md:mx-5 mt-2 text-md w-full block ${
				position ? "md:hidden" : "hidden md:block"
			} `}
		>
			<div className='w-full h-20 p-5 flex justify-start bg-gray-600'>
				<div className='w-full h-full  p-2 pl-6 bg-gray-800'>{title}</div>
			</div>
		</div>
	);
};

export default VideoInfo;
