import React, {Component} from "react"

import Slide from "Slide"
import Code from "Code"

const scssExample =
`.blue {
  color: blue;
}

.red {
  color: red;
}

.my-selector {
  @extend .red;
  @extend .blue;
}
`

export default class extends Component {
  render() {
    return (
      <Slide {...this.props}>
        <div style={styles.title}>
          {"Ce qui n'aide pas non plus"}
        </div>
        <div style={styles.subtitle}>
          {"1. @extend"}
        </div>
        <Code
          language="scss"
          code={scssExample} />
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
}
