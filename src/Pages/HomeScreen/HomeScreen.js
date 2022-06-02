//Components
import Header from "../../Layout/Header";
import Player from "../../Components/HomeScreen/Player";
import Menu from "../../Components/HomeScreen/Menu";
import PlayerInfo from "../../Components/HomeScreen/PlayerInfo";

//Wrappers
import MainWrapper from "../../Layout/MainWrapper";
import PlayerWrapper from "../../Components/HomeScreen/PlayerWrapper";
import RecommendedWrapper from "../../Components/HomeScreen/RecommendedWrapper";
import CommentsWrapper from "../../Components/HomeScreen/CommentsWrapper";

//UI
import { recToComponent, commentToComponent } from "./ui/dataToComponent";

//Data
import { useQuery, fetcher } from "../../lib/data";

//URLs
const recsURL = "https://6294acf6a7203b3ed06e7dcb.mockapi.io/recommendations";
const commentsURL = "https://6294acf6a7203b3ed06e7dcb.mockapi.io/comments";

const HomeScreen = () => {
	const { data: rec } = useQuery(fetcher(recsURL), { init: [] });
	const { data: comments } = useQuery(fetcher(commentsURL), { init: [] });

	return (
		<div>
			<Header />
			<MainWrapper>
				<Menu />
				<PlayerWrapper>
					<Player />
					<PlayerInfo />
					<CommentsWrapper>{comments.map(commentToComponent)}</CommentsWrapper>
				</PlayerWrapper>
				<RecommendedWrapper>{rec.map(recToComponent)}</RecommendedWrapper>
			</MainWrapper>
		</div>
	);
};

export default HomeScreen;
