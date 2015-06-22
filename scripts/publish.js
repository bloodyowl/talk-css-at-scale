import ghpages from "gh-pages"
import path from "path"

ghpages.publish(
  path.join(__dirname, "../dist"),
  (err) => {
    if(err) {
      console.error(err)
      return
    }
    console.log("[publish] done!")
  }
)
