//Components
import Header from "../../Layout/Header";
import Player from "../../Components/HomeScreen/Player";
import Menu from "../../Components/HomeScreen/Menu";
import PlayerInfo from "../../Components/HomeScreen/PlayerInfo";
import Comments from "../../Components/HomeScreen/Comments";

//Wrappers
import MainWrapper from "../../Layout/MainWrapper";
import PlayerWrapper from "../../Components/HomeScreen/PlayerWrapper";
import RecommendedWrapper from "../../Components/HomeScreen/RecommendedWrapper";
import CommentsWrapper from "../../Components/HomeScreen/CommentsWrapper";

//UI
import { recToComponent, commentToComponent } from "./ui/dataToComponent";

//Data
import { useQuery } from "../../lib/data";

const HomeScreen = () => {
	const { data: rec } = useQuery(
		{
			fetcher: async () => {
				const response = await fetch(
					"https://6294acf6a7203b3ed06e7dcb.mockapi.io/recommendations",
					{
						method: "GET",
					}
				);

				const rec_ = await response.json();
				return rec_;
			},
		},
		{ init: [] }
	);

	const { data: comments } = useQuery(
		{
			fetcher: async () => {
				const response = await fetch(
					"https://6294acf6a7203b3ed06e7dcb.mockapi.io/comments",
					{
						method: "GET",
					}
				);

				const comments_ = await response.json();
				return comments_;
			},
		},
		{ init: [] }
	);

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
