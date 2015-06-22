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
          {"Block Element Modifier"}
        </div>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            {"Une façon de structurer sainement son app/site"}
          </li>
          <li style={styles.listItem}>
            {"Des règles minimales"}
            <ul style={styles.list}>
              <li style={styles.listItem}>
                {"Un nœud pouvant exister sans dépendre d'un ancêtre" +
                 " est un Block "}<code>.Block</code>
              </li>
              <li style={styles.listItem}>
                {"Un nœud pouvant n'exister qu'en tant que descendant" +
                 " d'un ancêtre N est un element du Block N "}
                 <code>.Block-element</code>
              </li>
              <li style={styles.listItem}>
                {"Un état local pour un Block ou un Element est défini" +
                  " par un modifier de ce Block ou Element"}
                 <code>.Block--modifier</code>
                 {" ou "}
                 <code>.Block-element--modifier</code>
              </li>
            </ul>
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
