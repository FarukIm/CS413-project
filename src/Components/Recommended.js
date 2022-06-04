import React from "react";
import { Link } from "react-router-dom";

const Recommended = ({ title, thumbnail }) => {
	return (
		<div
			className='w-full h-48 md:h-36 max-w-md p-2 
		 shadow-md shadow-black bg-slate-800 mx-2 my-4'
		>
			<Link to='/video'>
				<div className='flex flex-col justify-center p-1'>
					<div className='bg-gray-900 mb-1'>
						<img
							src={thumbnail}
							alt={title}
							className='object-scale-down h-36 md:h-24 w-full'
						/>
					</div>
					<div>{title}</div>
				</div>
			</Link>
		</div>
	);
};

export default Recommended;
