import React, {Component} from "react"
import animate from "animate"

import Slide from "Slide"

@animate()
export default class extends Component {
  render() {
    return (
      <Slide {...this.props}>
        <div style={styles.title}>
          {"Ce qui n'aide pas non plus"}
        </div>
        <div style={styles.subtitle}>
          {"2. OOCSS, SMACSS …"}
        </div>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            {"Approches compliquées à apprendre à une équipe junior"}
          </li>
          <li style={styles.listItem}>
            {"Différents niveaux non adaptés à un découpage en composants" +
              " (layout, module, theme …)"}
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
