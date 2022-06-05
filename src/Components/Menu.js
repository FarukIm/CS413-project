import { useState } from "react";

const Menu = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div
			id='menu'
			className='w-48 md:h-screen border bg-cyan-600 md:block md:flex 
			border-2 border-black 
			fixed left-0 mt-2'
		>
			<div
				className='flex flex-col align-left
							text-left text-md 
							md:pl-4 min-w-36'
			>
				<div className='text-center text-xl border-black border-b-2'>
					<button onClick={() => setIsExpanded(!isExpanded)}>Menu</button>
				</div>
				<div
					className={`${isExpanded ? "block" : "hidden md:block"} pt-2 pl-4`}
				>
					<li>Favourites</li>
					<li>Library</li>
					<li>Settings</li>
					<li>Preferences</li>
				</div>
			</div>
		</div>
	);
};

export default Menu;
