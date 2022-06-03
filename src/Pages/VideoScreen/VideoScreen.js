//Components
import Header from "../../Layout/Header";
import VideoPlayer from "../../Components/VideoPlayer";
import VideoInfo from "../../Components/VideoInfo";
import VideoComments from "../../Components/VideoComments";

//Wrappers
import MainWrapper from "../../Layout/MainWrapper";
import VideoRecommendedWrapper from "./wrappers/VideoRecommendedWrapper";
import RecommendedWrapper from "./wrappers/RecommendedWrapper";
import CommentsWrapper from "./wrappers/CommentsWrapper";

//data
import { useQueryURL } from "../../lib/data";

//ui
import { commentToComponent, recToComponent } from "./ui/dataToComponent";
import Recommended from "../../Components/Recommended";

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
					<VideoPlayer />
					<RecommendedWrapper>
						{loadingRec && <Recommended content='Loading Recommended...' />}
						{!loadingRec && rec.map(recToComponent)}
					</RecommendedWrapper>
				</VideoRecommendedWrapper>

				<VideoInfo position={false} />
				<CommentsWrapper>
					{loadingComment && <VideoComments content='Loading Comments...' />}

					{!loadingComment && comments.map(commentToComponent)}
				</CommentsWrapper>
			</MainWrapper>
		</div>
	);
};

export default VideoScreen;
