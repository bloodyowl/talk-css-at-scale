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
          {"Block Element Modifier: cas possibles"}
        </div>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <code>{"Block"}</code>
          </li>
          <li style={styles.listItem}>
            <code>{"Block--modifier"}</code>
          </li>
          <li style={styles.listItem}>
            <code>{"Block-element"}</code>
          </li>
          <li style={styles.listItem}>
            <code>{"Block-element--modifier"}</code>
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
