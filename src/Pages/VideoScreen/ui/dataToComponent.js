//Components
import Comments from "../../../Components/VideoComments";
import Recommended from "../../../Components/Recommended";

export const commentToComponent = (comment) => {
	return <Comments content={comment.content} />;
};

export const recToComponent = (rec) => {
	return <Recommended title={rec.content} />;
};
