import React, {Component} from "react"
import animate from "animate"

import Slide from "Slide"
import Code from "Code"

const htmlExample =
`<div class="Header">
  <div class="Header-nav">
    <div class="Nav">
      <a href="/" class="Nav-item Nav-item--active">
        Home
      </a>
      <a href="/about" class="Nav-item">
        About
      </a>
    </div>
  </div>
</div>
`

@animate()
export default class extends Component {
  render() {
    return (
      <Slide {...this.props}>
        <div style={styles.title}>
          {"BEM"}
        </div>
        <div style={styles.subtitle}>
          {"Block Element Modifier"}
        </div>
        <Code
          language="html"
          code={htmlExample} />
      </Slide>
    )
  }
}

const styles = {
  title: {
    fontSize: "3rem",
    textAlign: "center",
    fontWeight: 700,
  },
  subtitle: {
    fontSize: "2.5rem",
    textAlign: "center",
  },
}
