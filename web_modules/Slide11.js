import React, {Component} from "react"

import Slide from "Slide"

export default class extends Component {
  render() {
    return (
      <Slide {...this.props}>
        <div style={styles.title}>
          {"Ce qui n'aide pas non plus"}
        </div>
        <div style={styles.subtitle}>
          {"2. OOCSS, SMACSS …"}
        </div>
        <p style={styles.paragraph}>
          {"Approches compliquées à apprendre à une équipe junior"}
        </p>
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
  paragraph: {
    fontSize: "2rem",
    margin: 0,
    padding: "1rem 0",
  },
}
