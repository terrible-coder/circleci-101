const ghpages = require("gh-pages");
const token = process.env.GH_TOKEN;

ghpages.publish("docs", {
	dotfiles: true,
	silent: false,
	repo: `https://${token}@github.com/terrible-coder/circleci-101.git`,
	user: {
		name: "Ayanava De",
		email: "ayanavade01@gmail.com"
	},
	message: "Deploy to gh-pages"
}, err => {
	console.log("Something went wrong");
	console.error(err);
});