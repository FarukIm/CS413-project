import { Link } from "react-router-dom";
import { isLoggedIn } from "../lib/functions";
const Header = () => {
	return (
		<div className='w-full'>
			<div
				className='w-full  h-15 p-3
							bg-cyan-600 text-white fixed top-0 
							flex flex-row justify-between
			'
			>
				<Link to='/'>
					<div
						className='border-2 border-gray-800 px-2 w-fit flex 
									hover:bg-cyan-300 hover:text-black transition'
					>
						Video Player Site
					</div>
				</Link>

				<div className={isLoggedIn() ? "block" : "hidden"}>
					<Link to='/login'>
						<button
							onClick={() => {
								localStorage.removeItem("DUMMY_JWT");
							}}
							class='border-2 border-gray-800 px-2 w-fit hover:bg-cyan-300 hover:text-black transition text-right'
						>
							Logout
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
