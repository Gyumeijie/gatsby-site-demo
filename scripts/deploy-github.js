const ghpages = require("gh-pages")

ghpages.publish(
  "public",
  {
    branch: "gh-pages",
    repo: "git@github.com:Gyumeijie/gatsby-site-demo.git",
  },
  () => {
    console.log("Deploy Complete!")
  }
)

