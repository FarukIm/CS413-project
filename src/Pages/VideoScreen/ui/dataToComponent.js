//Components
import Comments from "../../../Components/VideoScreen/Comments";
import Recommended from "../../../Components/VideoScreen/Recommended";

export const commentToComponent = (comment) => {
	return <Comments content={comment.content} />;
};

export const recToComponent = (rec) => {
	return <Recommended title={rec.content} />;
};
