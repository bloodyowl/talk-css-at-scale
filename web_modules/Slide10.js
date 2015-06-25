import React, {Component} from "react"
import transitionChild from "bloody-react-transition-child"

import Slide from "Slide"
import Code from "Code"

const cssExample =
`.block { display: block; }
.inline-block { display: inline-block; }

.relative { position: relative; }
.absolute { position: absolute; }
.static { position: static; }

.padding-10 { padding: 10px; }
`

@transitionChild()
export default class extends Component {
  render() {
    return (
      <Slide {...this.props}>
        <div style={styles.title}>
          {"Ce qui n'aide pas non plus"}
        </div>
        <div style={styles.subtitle}>
          {"2. Les «CSS atomiques»"}
        </div>
        <Code
          language="css"
          code={cssExample} />
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
