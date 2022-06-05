import { Link } from "react-router-dom";

//Components
import Header from "../../Layout/Header";
import Menu from "../../Components/Menu";

//Wrappers
import MainWrapper from "../../Layout/MainWrapper";
import RecommendedWrapper from "./wrappers/RecommendedWrapper";

//UI
import { recToComponent } from "./ui/dataToComponent";

//Data
import { useQueryURL } from "../../lib/data";

//Functions
import { isLoggedIn } from "../../lib/functions";

//URLs
const recsURL = "https://6294acf6a7203b3ed06e7dcb.mockapi.io/recommendations";

const HomeScreen = () => {
	const { data: rec } = useQueryURL({ getURL: recsURL, method: "GET" });
	if (isLoggedIn()) {
		return (
			<div className='bg-gray-700'>
				<Header />
				<MainWrapper className='relative'>
					<Menu />

					<RecommendedWrapper>{rec.map(recToComponent)}</RecommendedWrapper>
				</MainWrapper>
			</div>
		);
	} else {
		return (
			<div>
				You are not logged in, go to{" "}
				<Link to='/login' className='text-cyan-300'>
					{" "}
					login{" "}
				</Link>
			</div>
		);
	}
};

export default HomeScreen;
