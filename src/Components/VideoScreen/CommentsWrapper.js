const CommentsWrapper = ({ children }) => {
	return (
		<div
			className='flex flex-col w-full min-h-fit p-4
                        items-center border-2 border-black'
		>
			{children}
		</div>
	);
};

export default CommentsWrapper;
