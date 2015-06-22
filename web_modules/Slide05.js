import React, {Component} from "react"

import Slide from "Slide"
import Code from "Code"

import wat from "wat.jpg"

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
        <img
          style={styles.wat}
          src={`./${ wat }`}
          alt="wat" />
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
  wat: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    WebkitTransform: "translate(-50%, -50%)",
    borderRadius: "1rem",
  },
}
