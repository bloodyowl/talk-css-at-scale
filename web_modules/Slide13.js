import React, {Component} from "react"
import animate from "animate"

import Slide from "Slide"
import Code from "Code"

@animate()
export default class extends Component {
  render() {
    return (
      <Slide {...this.props}>
        <div style={styles.title}>
          {"BEM"}
        </div>
        <div style={styles.subtitle}>
          {"Block"}
        </div>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            {"le "}<code>{"Block"}</code>{" représente un composant"}
          </li>
          <li style={styles.listItem}>
            {"Il peut être utilisé sans contexte particulier"}
          </li>
          <li style={styles.listItem}>
            {"Il peut avoir son "}<em>private tree</em>
          </li>
          <li style={styles.listItem}>
            {"Il peut avoir un état local (e.g. "}
            <code>{".Button--small"}</code>
            {")"}
          </li>
          <li style={styles.listItem}>
            {"Cet état est appliqué par un «Modifier»"}
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
