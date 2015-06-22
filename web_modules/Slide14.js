import React, {Component} from "react"

import Slide from "Slide"
import Code from "Code"

export default class extends Component {
  render() {
    return (
      <Slide {...this.props}>
        <div style={styles.title}>
          {"BEM"}
        </div>
        <div style={styles.subtitle}>
          {"Element"}
        </div>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            {"L'"}
            <code>{"Element"}</code>
            {" est un bloc appartenant au "}
            <em>{"private tree"}</em>
            {" de son ancêtre Block"}
          </li>
          <li style={styles.listItem}>
            {"Il peut avoir un état local (e.g. "}
            <code>{".Nav-item--active"}</code>
            {")"}
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
