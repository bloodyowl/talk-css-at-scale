import React, {Component} from "react"

import Slide from "Slide"

export default class extends Component {
  render() {
    return (
      <Slide {...this.props}>
        <div style={styles.title}>
          {"Next steps"}
        </div>
        <div style={styles.subtitle}>
          {"Inline styles"}
        </div>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            {"BEM résoud beaucoup de soucis, mais pas le contrôle de la " +
              "priorisation"}
          </li>
          <li style={styles.listItem}>
            {"JavaScript + la propriété style nous le permettent"}
          </li>
          <li style={styles.listItem}>
            {"+ variables, conditions, modules …"}
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
