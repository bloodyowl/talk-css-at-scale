import React, {Component} from "react"

import Slide from "Slide"

export default class extends Component {
  render() {
    return (
      <Slide {...this.props}>
        <div style={styles.title}>
          {"BEM"}
        </div>
        <div style={styles.subtitle}>
          {"Block Element Modifier: les avantages"}
        </div>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            {"Rend trivial la compréhension du markup et du style"}
          </li>
          <li style={styles.listItem}>
            {"Crée rapidement des automatismes"}
          </li>
          <li style={styles.listItem}>
            {"Apporte naturellement l'isolation des styles"}
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
