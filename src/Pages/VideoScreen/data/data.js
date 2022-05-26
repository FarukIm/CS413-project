const comments = [
	{ content: "Wow amazing" },
	{ content: "Wow bad" },
	{ content: "We need more" },
	{ content: "We need less" },
];

const rec = [
	{ content: "Cool Video" },
	{ content: "Not cool video" },
	{ content: "You won't believe this" },
	{ content: "You will believe this" },
];

export default function getData() {
	return { comments, rec };
}
