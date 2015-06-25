import React, {Component} from "react"
import transitionChild from "bloody-react-transition-child"

import Slide from "Slide"

@transitionChild()
export default class extends Component {
  render() {
    return (
      <Slide {...this.props}>
        <div style={styles.title}>
          {"CSS at scale"}
        </div>
      </Slide>
    )
  }
}

const styles = {
  title: {
    fontSize: "5rem",
    fontWeight: 700,
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: 0,
    right: 0,
    transform: "translateY(-50%)",
    WebkitTransform: "translateY(-50%)",
  },
}
