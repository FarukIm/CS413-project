import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className='w-full'>
			<div
				className='w-full  h-15 p-3 items-center 
			bg-cyan-600 text-white fixed top-0
			'
			>
				<Link to='/'>
					<li className='border-2 border-gray-800 px-2 w-fit hover:bg-cyan-300 hover:text-black transition'>
						Video Player Site
					</li>
				</Link>
			</div>
		</div>
	);
};

export default Header;
