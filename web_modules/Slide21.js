import React, {Component} from "react"
import transitionChild from "bloody-react-transition-child"

import Slide from "Slide"
import Code from "Code"

const cssExample =
`.Nav {}

  .Nav-item { font-size: 2rem; }

    @media(--maxM) {
      .Nav-item { font-size: 1.5rem; }
    }
`

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
            {"Ne groupez jamais les media queries, gardez les toujours près " +
             "des déclarations qu'elles complètent/override"}
            <Code
              language="css"
              code={cssExample} />
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
