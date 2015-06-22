import React, {Component} from "react"

import Slide from "Slide"
import Code from "Code"

const jsExample =
`import React, {Component} from "react"
import {lighten, darken} from "color"
import styleVariables from "stylesVariables"

const styles = {
  button: {
    display: "block",
    font-weight: 700,
  },
  buttonDefault: {
    backgroundColor: styleVariables.colorBlue,
  },
  buttonHover: {
    backgroundColor: lighten(styleVariables.colorBlue, .1),
  },
  buttonPressed: {
    backgroundColor: darken(styleVariables.colorBlue, .1),
  },
}

class extends Component {

  state = {
    hover: false,
    pressed: false,
  }

  handleMouseEnter() {
    this.setState({
      hover: true,
    })
  }

  handleMouseLeave() {
    this.setState({
      hover: false,
    })
  }

  handleMouseDown() {
    this.setState({
      pressed: true,
    })
  }

  handleMouseUp() {
    this.setState({
      pressed: false,
    })
  }

  render() {
    const {text} = this.props
    const {hover, pressed} = this.state
    return (
      <div
        onMouseEnter={() => this.handleMouseEnter()}
        onMouseLeave={() => this.handleMouseLeave()}
        onMouseDown={() => this.handleMouseDown()}
        onMouseUp={() => this.handleMouseUp()}
        style={{
          ...styles.button,
          ...styles.buttonDefault,
          ...hover && styles.buttonHover,
          ...pressed && styles.buttonPressed,
        }}>
        {text}
      </div>
    )
  }
}
`

export default class extends Component {
  render() {
    return (
      <Slide {...this.props}>
        <div style={styles.title}>
          {"Next steps"}
        </div>
        <div style={styles.subtitle}>
          {"Inline styles: events"}
        </div>
        <Code
          language="javascript"
          code={jsExample} />
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
