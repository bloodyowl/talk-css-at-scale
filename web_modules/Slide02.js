import React, {Component} from "react"
import transitionChild from "bloody-react-transition-child"

import Slide from "Slide"
import Code from "Code"

const cssExample =
`
.selector {
  font-size: 1rem;
}
`

const jsExample =
`
window.selector = {
  fontSize: "1rem",
}
`

@transitionChild()
export default class extends Component {
  render() {
    return (
      <Slide {...this.props}>
        <div style={styles.title}>
          {"Les problèmes de CSS"}
        </div>
        <div style={styles.subtitle}>
          {"1. Les selecteurs sont des variables globales"}
        </div>
        <Code
          language="css"
          code={cssExample} />
        <div style={styles.equal}>
          {"="}
        </div>
        <Code
          language="javascript"
          code={jsExample} />
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
  equal: {
    fontSize: "3rem",
    fontWeight: 700,
    textAlign: "center",
  },
}
