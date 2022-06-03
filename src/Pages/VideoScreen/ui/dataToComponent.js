//Components
import Comments from "../../../Components/VideoComments";
import Recommended from "../../../Components/Recommended";

export const commentToComponent = (comment) => {
	return <Comments content={comment.content} user={comment.user} />;
};

export const recToComponent = (rec) => {
	return <Recommended title={rec.content} thumbnail={rec.thumbnail} />;
};
