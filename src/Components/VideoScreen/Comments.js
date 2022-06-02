const Comments = ({ user, content }) => {
	return (
		<>
			<div
				className='w-11/12 h-20 shadow-sm shadow-cyan-600
			 mx-2 my-4 p-3 bg-gray-600'
			>
				{content}
			</div>
		</>
	);
};

export default Comments;
