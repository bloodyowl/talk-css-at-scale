import React, {Component} from "react"
import transitionChild from "bloody-react-transition-child"

import Slide from "Slide"

@transitionChild()
export default class extends Component {
  render() {
    return (
      <Slide {...this.props}>
        <div style={styles.title}>
          {"Next steps"}
        </div>
        <div style={styles.subtitle}>
          {"Inline styles: bénéfices"}
        </div>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            {"Permet de prioriser les styles"}
          </li>
          <li style={styles.listItem}>
            {"Possède naturellement des fonctions comme "}
            <em>{"first class citizen"}</em>
          </li>
          <li style={styles.listItem}>
            {"JavaScript dispose déjà d'un outillage intéressant pour" +
              " l'analyse de code"}
          </li>
          <li style={styles.listItem}>
            {"Rend possible la cohabitation de style & markup dans le même" +
              " fichier (tout comme avec des WebComponents)"}
          </li>
          <li style={styles.listItem}>
            {"Abolit la spécificité des selecteurs"}
          </li>
          <li style={styles.listItem}>
            {"Évite au browser de parser la page pour dresser la" +
              " correspondance selector/element"}
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
