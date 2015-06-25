import React, {Component} from "react"
import transitionChild from "bloody-react-transition-child"

import Slide from "Slide"
import Code from "Code"

const htmlExample =
`<div class="org-Header">
  <div class="org-Header-nav">
    <div class="org-Nav"><!-- ... --></div>
  </div>
</div>`

@transitionChild()
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
            {"Prefixer les classNames par le nom de l'organisation, " +
              "afin de prévenir les conflits avec le third-party"}
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
