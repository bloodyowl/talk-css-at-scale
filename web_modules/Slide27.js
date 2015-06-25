import React, {Component} from "react"
import transitionChild from "bloody-react-transition-child"

import Slide from "Slide"
import Code from "Code"

@transitionChild()
export default class extends Component {
  render() {
    return (
      <Slide {...this.props}>
        <div style={styles.title}>
          {"Questions ?"}
        </div>
      </Slide>
    )
  }
}

const styles = {
  title: {
    fontSize: "4rem",
    textAlign: "center",
    fontWeight: 700,
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    transform: "translateY(-50%)",
    WebkitTransform: "translateY(-50%)",
  },
}
