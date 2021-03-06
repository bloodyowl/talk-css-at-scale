import React, {Component} from "react"
import transitionChild from "bloody-react-transition-child"

import Slide from "Slide"
import Code from "Code"

const cssExample =
`*             {}  /* specificity = 0,0,0,0 */
li            {}  /* specificity = 0,0,0,1 */
li:first-line {}  /* specificity = 0,0,0,2 */
ul li         {}  /* specificity = 0,0,0,2 */
ul ol+li      {}  /* specificity = 0,0,0,3 */
h1 + *[rel=up]{}  /* specificity = 0,0,1,1 */
ul ol li.red  {}  /* specificity = 0,0,1,3 */
li.red.level  {}  /* specificity = 0,0,2,1 */
#x34y         {}  /* specificity = 0,1,0,0 */
style=""          /* specificity = 1,0,0,0 */
!important        /* specificity = P,T,D,R */
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
          {"3. La spécificité"}
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
