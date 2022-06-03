import HomeComments from "../../../Components/HomeComments";
import Recommended from "../../../Components/Recommended";

export const recToComponent = (rec) => {
	return <Recommended name={rec.content} />;
};

export const commentToComponent = (comment) => {
	return <HomeComments content={comment.content} />;
};
