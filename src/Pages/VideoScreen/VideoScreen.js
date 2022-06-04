//Components
import Header from "../../Layout/Header";
import VideoPlayer from "../../Components/VideoPlayer";
import VideoInfo from "../../Components/VideoInfo";
import VideoComments from "../../Components/VideoComments";
import LikeButton from "../../Components/LikeButton";

//Wrappers
import MainWrapper from "../../Layout/MainWrapper";
import VideoRecommendedWrapper from "./wrappers/VideoRecommendedWrapper";
import RecommendedWrapper from "./wrappers/RecommendedWrapper";
import CommentsWrapper from "./wrappers/CommentsWrapper";

//data
import { useQueryURL } from "../../lib/data";
import { getData } from "./data";

//ui
import { commentToComponent, recToComponent } from "./ui/dataToComponent";
import Recommended from "../../Components/Recommended";
import VideoPlayerWrapper from "./wrappers/VideoPlayerWrapper";

//URLs
const recURL = "https://6294acf6a7203b3ed06e7dcb.mockapi.io/recommendations";
const commentsURL = "https://6294acf6a7203b3ed06e7dcb.mockapi.io/comments";
const likeURL = "https://6294acf6a7203b3ed06e7dcb.mockapi.io/like/1";

const VideoScreen = () => {
	const { data: rec, loading: loadingRec } = useQueryURL({
		getURL: recURL,
		method: "GET",
	});
	const { data: comments, loading: loadingComment } = useQueryURL({
		getURL: commentsURL,
		method: "GET",
	});
	// const { data: like, loading: loadingLike } = useQueryURL({
	// 	getURL: likeURL,
	// 	method: "GET",
	// });
	// console.log(like.isLiked);
	const like = getData();

	return (
		<div className='bg-gray-700'>
			<Header />
			<MainWrapper>
				<VideoInfo position={true} title='Infographic Example Video' />

				<VideoRecommendedWrapper>
					<VideoPlayerWrapper>
						<VideoPlayer />
						<LikeButton isLiked={like.isLiked} />
					</VideoPlayerWrapper>
					<RecommendedWrapper>
						{loadingRec && <Recommended content='Loading Recommended...' />}
						{!loadingRec && rec.map(recToComponent)}
					</RecommendedWrapper>
				</VideoRecommendedWrapper>

				<VideoInfo position={false} title='Infographic Example Video' />
				<CommentsWrapper>
					{loadingComment && <VideoComments content='Loading Comments...' />}

					{!loadingComment && comments.map(commentToComponent)}
				</CommentsWrapper>
			</MainWrapper>
		</div>
	);
};

export default VideoScreen;
