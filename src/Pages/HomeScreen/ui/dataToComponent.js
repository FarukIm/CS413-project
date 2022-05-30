import Comments from "../../../Components/HomeScreen/Comments";
import Recommended from "../../../Components/HomeScreen/Recommended";

export const recToComponent = (rec) => {
	return <Recommended name={rec.content} />;
};

export const commentToComponent = (comment) => {
	return <Comments content={comment.content} />;
};
