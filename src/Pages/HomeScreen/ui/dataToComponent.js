import HomeRecommended from "../../../Components/HomeRecommended";

export const recToComponent = (rec) => {
	return <HomeRecommended title={rec.content} thumbnail={rec.thumbnail} />;
};
