import React, {Component} from "react"
import animate from "animate"

import Slide from "Slide"
import Code from "Code"

const htmlExample =
`<button
  class="org-Button org-Button--small org-js-OpenLoginModal">
  Login
</button>
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
          {"Block Element Modifier: aller plus loin"}
        </div>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            {"Si votre stack vous impose des selecteurs pour les actions " +
              "JS, utilisez des classNames uniquement prévus à cet effet"}
            <Code
              language="html"
              code={htmlExample} />
          </li>
        </ul>
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
  list: {
    padding: "2rem",
  },
  listItem: {
    fontSize: "2rem",
    padding: ".5rem 0",
  },
}
