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
import { useQuery, fetcher } from "../../lib/data";

//ui
import { commentToComponent, recToComponent } from "./ui/dataToComponent";

//URLs
const recURL = "https://6294acf6a7203b3ed06e7dcb.mockapi.io/recommendations";
const commentsURL = "https://6294acf6a7203b3ed06e7dcb.mockapi.io/comments";
const VideoScreen = () => {
	const { data: rec } = useQuery(fetcher(recURL), { init: [] });
	const { data: comments } = useQuery(fetcher(commentsURL), { init: [] });

	return (
		<div className='bg-gray-700'>
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
