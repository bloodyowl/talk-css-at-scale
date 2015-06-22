import React, {Component} from "react"
import animate from "animate"

import Slide from "Slide"
import Code from "Code"

const cssExample =
`.nav {
  font-size: 0;
}

  .nav .item {
    display: inline-block;
    /* font-size is 0 */
  }
`

@animate()
export default class extends Component {
  render() {
    return (
      <Slide {...this.props}>
        <div style={styles.title}>
          {"Les problèmes de CSS"}
        </div>
        <div style={styles.subtitle}>
          {"2. La cascade"}
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
