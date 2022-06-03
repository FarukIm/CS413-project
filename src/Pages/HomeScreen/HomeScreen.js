//Components
import Header from "../../Layout/Header";
import HomePlayer from "../../Components/HomePlayer";
import Menu from "../../Components/Menu";
import PlayerInfo from "../../Components/PlayerInfo";

//Wrappers
import MainWrapper from "../../Layout/MainWrapper";
import PlayerWrapper from "./wrappers/PlayerWrapper";
import RecommendedWrapper from "./wrappers/RecommendedWrapper";
import CommentsWrapper from "./wrappers/CommentsWrapper";

//UI
import { recToComponent, commentToComponent } from "./ui/dataToComponent";

//Data
import { useQueryURL } from "../../lib/data";

//URLs
const recsURL = "https://6294acf6a7203b3ed06e7dcb.mockapi.io/recommendations";
const commentsURL = "https://6294acf6a7203b3ed06e7dcb.mockapi.io/comments";

const HomeScreen = () => {
	const { data: rec } = useQueryURL({ getURL: recsURL, method: "GET" });
	const { data: comments } = useQueryURL({
		getURL: commentsURL,
		method: "GET",
	});

	return (
		<div>
			<Header />
			<MainWrapper>
				<Menu />
				<PlayerWrapper>
					<HomePlayer />
					<PlayerInfo />
					<CommentsWrapper>{comments.map(commentToComponent)}</CommentsWrapper>
				</PlayerWrapper>
				<RecommendedWrapper>{rec.map(recToComponent)}</RecommendedWrapper>
			</MainWrapper>
		</div>
	);
};

export default HomeScreen;
