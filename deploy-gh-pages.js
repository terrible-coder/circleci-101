const ghpages = require("gh-pages");

ghpages.publish("docs", {
	dotfiles: true,
	silent: false,
	repo: `https://${process.env.GH_TOKEN}@github.com/terrible-coder/circleci-101.git`,
	user: {
		name: "Ayanava De",
		email: "ayanavade01@gmail.com"
	},
	message: "Deploy to gh-pages"
});