import { useState } from "react";

const LikeButton = ({ isLiked, loading }) => {
	const [like, setLike] = useState(isLiked);

	return (
		<div className='content-center ml-3'>
			<button
				onClick={() => {
					setLike(!like);
				}}
				className={`border-solid border-2 rounded-md border-cyan-800
				shadow-sm shadow-black 
				w-16 mb-4 p-1 ${like ? "bg-cyan-800" : "bg-gray-700"}`}
			>
				Like
			</button>
		</div>
	);
};

export default LikeButton;
