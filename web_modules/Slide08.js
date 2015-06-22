import React, {Component} from "react"
import animate from "animate"

import Slide from "Slide"

@animate()
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
            {"Un langage sans scope"}
          </li>
          <li style={styles.listItem}>
            {"qui transmet automatiquement toute propriété d'un sélecteur" +
              " à ses descendants"}
          </li>
          <li style={styles.listItem}>
            {"qui priorise les sélecteurs comme un ivrogne"}
          </li>
          <li style={styles.listItem}>
            {"qui est régression-friendly™"}
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
