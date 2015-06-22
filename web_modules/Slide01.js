import React, {Component} from "react"
import animate from "animate"

import Slide from "Slide"

@animate()
export default class extends Component {
  render() {
    return (
      <Slide {...this.props}>
        <div style={styles.title}>
          {"Matthias Le Brun"}
        </div>
        <div style={styles.subtitle}>
          {"Développeur front-end"}
        </div>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <a
              style={styles.link}
              href="https://twitter.com/bloodyowl">
              {"@bloodyowl"}
            </a>
          </li>
          <li style={styles.listItem}>
            <a
              style={styles.link}
              href="https://twitter.com/reactjsfrance">
              {"@reactjsfrance"}
            </a>
          </li>
          <li style={styles.listItem}>
            <a
              style={styles.link}
              href="https://putaindecode.fr">
              {"Putain de code !"}
            </a>
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
  link: {
    color: "#369",
  }
}
