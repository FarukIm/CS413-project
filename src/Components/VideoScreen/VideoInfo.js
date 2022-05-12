const VideoInfo = ({ position }) => {
	return (
		<div
			className={`md:m-5 my-2 w-full block ${
				position ? "md:hidden" : "hidden md:block"
			} `}
		>
			<div className='w-full h-20 p-5 flex justify-start border-2 border-black'>
				<div className='w-4/12 h-full border-2 border-black'>Video Name</div>
			</div>
		</div>
	);
};

export default VideoInfo;
