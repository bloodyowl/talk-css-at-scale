import React from "react"
import App from "App"

import "index.html"

const mountNode = document.createElement("div")
document.body.appendChild(mountNode)

React.render(
  <App />,
  mountNode
)
