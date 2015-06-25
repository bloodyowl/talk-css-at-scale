import React, {Component} from "react"
import transitionChild from "bloody-react-transition-child"

import Slide from "Slide"
import Code from "Code"

const cssExample =
`.blue { color: blue; }
.red { color: red; }
`

const htmlExample =
`<!-- aucun contrôle au niveau du markup -->
<div class="blue red">text</div>
<div class="red blue">text</div>
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
          {"5. La priorisation"}
        </div>
        <Code
          language="css"
          code={cssExample} />
        <Code
          language="html"
          code={htmlExample} />
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
