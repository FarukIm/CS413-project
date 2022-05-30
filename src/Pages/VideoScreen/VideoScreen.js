//Components
import Header from "../../Layout/Header";
import Player from "../../Components/VideoScreen/Player";
import VideoInfo from "../../Components/VideoScreen/VideoInfo";

//Wrappers
import MainWrapper from "../../Layout/MainWrapper";
import VideoRecommendedWrapper from "../../Components/VideoScreen/VideoRecommendedWrapper";
import RecommendedWrapper from "../../Components/VideoScreen/RecommendedWrapper";
import CommentsWrapper from "../../Components/VideoScreen/CommentsWrapper";

//data
import getData from "./data/data";

//ui
import { commentToComponent, recToComponent } from "./ui/dataToComponent";

const VideoScreen = () => {
	const data = getData();
	const { comments, rec } = data;

	return (
		<div>
			<Header />
			<MainWrapper>
				<VideoInfo position={true} />

				<VideoRecommendedWrapper>
					<Player />
					<RecommendedWrapper>{rec.map(recToComponent)}</RecommendedWrapper>
				</VideoRecommendedWrapper>

				<VideoInfo position={false} />
				<CommentsWrapper>{comments.map(commentToComponent)}</CommentsWrapper>
			</MainWrapper>
		</div>
	);
};

export default VideoScreen;
