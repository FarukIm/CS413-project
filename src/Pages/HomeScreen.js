//Components
import Header from "../Components/Shared/Header";
import Player from "../Components/HomeScreen/Player";
import Menu from "../Components/HomeScreen/Menu";
import PlayerInfo from "../Components/HomeScreen/PlayerInfo";
import Recommended from "../Components/HomeScreen/Recommended";
//Wrappers
import MainWrapper from "../Components/Shared/MainWrapper";
import PlayerWrapper from "../Components/HomeScreen/PlayerWrapper";
import RecommendedWrap from "../Components/HomeScreen/RecommendedWrap";

const HomeScreen = () => {
	return (
		<div>
			<Header />
			<MainWrapper>
				<Menu />
				<PlayerWrapper>
					<Player />
					<PlayerInfo />
				</PlayerWrapper>
				<RecommendedWrap>
					<Recommended name={"Rec1"} />
					<Recommended name={"Rec2"} />
					<Recommended name={"Rec3"} />
					<Recommended name={"Rec4"} />
				</RecommendedWrap>
			</MainWrapper>
		</div>
	);
};

export default HomeScreen;
