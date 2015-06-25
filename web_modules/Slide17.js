import React, {Component} from "react"
import transitionChild from "bloody-react-transition-child"

import Slide from "Slide"
import Code from "Code"

const htmlExample =
`<!-- bad -->
<div class="Header">
  <div class="Header-nav Nav"><!-- ... --></div>
</div>
<!-- good -->
<div class="Header">
  <div class="Header-nav">
    <div class="Nav"><!-- ... --></div>
  </div>
</div>`

@transitionChild()
export default class extends Component {
  render() {
    return (
      <Slide {...this.props}>
        <div style={styles.title}>
          {"BEM"}
        </div>
        <div style={styles.subtitle}>
          {"Block Element Modifier: aller plus loin"}
        </div>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            {"Dans le cas où un block est enfant d'un autre block, " +
              "préférer le wrapping à la composition"}
            <Code
              language="html"
              code={htmlExample} />
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
