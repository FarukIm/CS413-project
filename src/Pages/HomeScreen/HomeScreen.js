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

//URLs
const recsURL = "https://6294acf6a7203b3ed06e7dcb.mockapi.io/recommendations";
const commentsURL = "https://6294acf6a7203b3ed06e7dcb.mockapi.io/comments";

const HomeScreen = () => {
	const { data: rec } = useQueryURL({ getURL: recsURL, method: "GET" });
	return (
		<div className='bg-gray-700'>
			<Header />
			<MainWrapper className='relative'>
				<Menu />

				<RecommendedWrapper>{rec.map(recToComponent)}</RecommendedWrapper>
			</MainWrapper>
		</div>
	);
};

export default HomeScreen;
