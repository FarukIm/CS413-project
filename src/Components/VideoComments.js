const VideoComments = ({ user, content }) => {
	return (
		<>
			<div
				className='w-11/12 h-fit shadow-sm shadow-cyan-600
			 mx-2 my-4 p-3 bg-gray-600'
			>
				<div className='flex flex-col'>
					<div className='border-b-2 border-gray-800 mb-2 pl-2'>{user}</div>
					<div>{content}</div>
				</div>
			</div>
		</>
	);
};

export default VideoComments;
