import { Link } from "react-router-dom";

const HomeRecommended = ({ title, thumbnail }) => {
	return (
		<div
			className='w-full h-64 md:w-64 p-2 flex flex-col
		 shadow-md shadow-black bg-slate-800 mx-2 my-4'
		>
			<Link to='/video'>
				<div className='flex flex-col justify-center p-1'>
					<div className='bg-gray-900 mb-1'>
						<img
							src={thumbnail}
							alt={title}
							className='object-scale-down h-48 w-full'
						/>
					</div>
					<div
						className='
					'
					>
						{title}
					</div>
				</div>
			</Link>
		</div>
	);
};

export default HomeRecommended;
