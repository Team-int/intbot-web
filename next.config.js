const DotenvWebpackPlugin = require("dotenv-webpack")

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(new DotenvWebpackPlugin())
    return config
  },
  // images: {
  //  	 loader: "imgix",
	// 	 path: "https://cdn/",
  // }, 이거 뭐임?
}