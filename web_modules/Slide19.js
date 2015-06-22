import React, {Component} from "react"

import Slide from "Slide"
import Code from "Code"

const cssExample =
`/* bad */
.Nav { font-size: 2rem; }
.Nav-item { padding: .5rem; }
/* good */
.Nav {}
.Nav-item { font-size: 2rem; padding: .5rem; }
`

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
            {"Éviter les side effects de la cascade en définissant, " +
              "les propriétés au niveau le plus bas possible"}
            <Code
              language="css"
              code={cssExample} />
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
