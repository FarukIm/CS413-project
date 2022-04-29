//Components
import Header from "../Components/Shared/Header";
import Player from "../Components/HomeScreen/Player";
import Menu from "../Components/HomeScreen/Menu";
import PlayerInfo from "../Components/HomeScreen/PlayerInfo";
import Recommended from "../Components/HomeScreen/Recommended";
import Comments from "../Components/HomeScreen/Comments";
//Wrappers
import MainWrapper from "../Components/Shared/MainWrapper";
import PlayerWrapper from "../Components/HomeScreen/PlayerWrapper";
import RecommendedWrapper from "../Components/HomeScreen/RecommendedWrapper";

const HomeScreen = () => {
	return (
		<div>
			<Header />
			<MainWrapper>
				<Menu />
				<PlayerWrapper>
					<Player />
					<PlayerInfo />
					<Comments />
				</PlayerWrapper>
				<RecommendedWrapper>
					<Recommended name={"Rec1"} />
					<Recommended name={"Rec2"} />
					<Recommended name={"Rec3"} />
					<Recommended name={"Rec4"} />
				</RecommendedWrapper>
			</MainWrapper>
		</div>
	);
};

export default HomeScreen;
