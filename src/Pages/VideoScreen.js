//Components
import Header from "../Components/Shared/Header";
import Player from "../Components/VideoScreen/Player";
import VideoInfo from "../Components/VideoScreen/VideoInfo";
import Recommended from "../Components/VideoScreen/Recommended";
//Wrappers
import MainWrapper from "../Components/Shared/MainWrapper";
import VideoRecommendedWrapper from "../Components/VideoScreen/VideoRecommendedWrapper";
import RecommendedWrapper from "../Components/VideoScreen/RecommendedWrapper";

const VideoScreen = () => {
	return (
		<div>
			<Header />
			<MainWrapper>
				<VideoInfo position={true} />

				<VideoRecommendedWrapper>
					<Player />
					<RecommendedWrapper>
						<Recommended name={"rec1"} />
						<Recommended name={"rec2"} />
						<Recommended name={"rec3"} />
					</RecommendedWrapper>
				</VideoRecommendedWrapper>

				<VideoInfo position={false} />
			</MainWrapper>
		</div>
	);
};

export default VideoScreen;
