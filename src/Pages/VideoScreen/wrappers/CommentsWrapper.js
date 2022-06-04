const CommentsWrapper = ({ children }) => {
	return (
		<div
			className='flex flex-col w-full min-h-fit p-3
                        items-center'
		>
			{children}
		</div>
	);
};

export default CommentsWrapper;
