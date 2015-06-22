import React, {Component} from "react"

import Slide from "Slide"

export default class extends Component {
  render() {
    return (
      <Slide {...this.props}>
        <div style={styles.title}>
          {"Les problèmes de CSS"}
        </div>
        <div style={styles.subtitle}>
          {"En résumé"}
        </div>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            {"Un language sans scope"}
          </li>
          <li style={styles.listItem}>
            {"qui transmet automatiquement toute propriété d'un selecteur" +
              " à ses descendants"}
          </li>
          <li style={styles.listItem}>
            {"qui priorise les selecteurs comme un ivrogne"}
          </li>
          <li style={styles.listItem}>
            {"qui est regression-friendly™"}
          </li>
          <li style={styles.listItem}>
            {"qui rend impossible la prédictabilité de priorisation" +
              " à grande échelle"}
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
