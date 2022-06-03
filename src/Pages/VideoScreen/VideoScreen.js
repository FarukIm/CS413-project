//Components
import Header from "../../Layout/Header";
import Player from "../../Components/VideoScreen/Player";
import VideoInfo from "../../Components/VideoScreen/VideoInfo";
import Comments from "../../Components/VideoScreen/Comments";

//Wrappers
import MainWrapper from "../../Layout/MainWrapper";
import VideoRecommendedWrapper from "../../Components/VideoScreen/VideoRecommendedWrapper";
import RecommendedWrapper from "../../Components/VideoScreen/RecommendedWrapper";
import CommentsWrapper from "../../Components/VideoScreen/CommentsWrapper";

//data
import { useQuery, useQueryURL } from "../../lib/data";

//ui
import { commentToComponent, recToComponent } from "./ui/dataToComponent";
import Recommended from "../../Components/VideoScreen/Recommended";

//URLs
const recURL = "https://6294acf6a7203b3ed06e7dcb.mockapi.io/recommendations";
const commentsURL = "https://6294acf6a7203b3ed06e7dcb.mockapi.io/comments";

const VideoScreen = () => {
	const { data: rec, loading: loadingRec } = useQueryURL({
		getURL: recURL,
		method: "GET",
	});
	const { data: comments, loading: loadingComment } = useQueryURL({
		getURL: commentsURL,
		method: "GET",
	});

	return (
		<div className='bg-gray-700'>
			<Header />
			<MainWrapper>
				<VideoInfo position={true} />

				<VideoRecommendedWrapper>
					<Player />
					<RecommendedWrapper>
						{loadingRec && <Recommended content='Loading Recommended...' />}
						{!loadingRec && rec.map(recToComponent)}
					</RecommendedWrapper>
				</VideoRecommendedWrapper>

				<VideoInfo position={false} />
				<CommentsWrapper>
					{loadingComment && <Comments content='Loading Comments...' />}

					{!loadingComment && comments.map(commentToComponent)}
				</CommentsWrapper>
			</MainWrapper>
		</div>
	);
};

export default VideoScreen;
