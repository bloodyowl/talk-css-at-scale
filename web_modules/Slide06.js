import React, {Component} from "react"
import transitionChild from "bloody-react-transition-child"

import Slide from "Slide"
import Code from "Code"

const cssExample =
`.item {
  display: block;
  font-size: 1rem;
  color: blue;
  /* un dev vient de rajouter la propriété \`border\` */
  border: 1px solid red;
}

.some-context .item {
  display: inline-block;
  color: red;
  /* regression dans .some-context */
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
          {"4. L'annulation de propriétés"}
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
