import React, {Component, Children, cloneElement} from "react"

class Slides extends Component {

  state = {
    index: 0,
  }

  componentDidMount() {
    document.addEventListener("keyup", (event) => {
      switch(event.which) {
        case 37:
          this.goToPreviousSlide()
          break
        case 39:
          this.goToNextSlide()
          break
      }
    })
  }

  goToSlide(index) {
    const {children} = this.props
    const count = Children.count(children)
    this.setState({
      index: Math.min(Math.max(index, 0), count - 1),
    })
  }

  goToNextSlide() {
    this.goToSlide(
      this.state.index + 1
    )
  }

  goToPreviousSlide() {
    this.goToSlide(
      this.state.index - 1
    )
  }

  render() {
    const {children} = this.props
    const {index} = this.state
    return (
      <div style={styles.container}>
        <div style={styles.progressBar}>
          <div style={{
            ...styles.progress,
            width: `${ index / (Children.count(children) - 1) * 100 }%`,
          }} />
        </div>
        <div
          style={{
            ...styles.slides,
            transform: `translateX(${ -100 * index }vw)`,
            WebkitTransform: `translateX(${ -100 * index }vw)`,
          }}>
          {Children.map(children, (child, index) =>
            cloneElement(child, { index }))}
        </div>
      </div>
    )
  }

}

const styles = {
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
    backgroundColor: "#eceff0",
    color: "#5f5f5f",
  },
  slides: {
    position: "relative",
    height: "100vh",
    transition: "300ms ease-in-out transform",
    WebkitTransition: "300ms ease-in-out -webkit-transform",
  },
  progressBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: ".25rem",
    backgroundColor: "#ccc",
  },
  progress: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#693",
    transition: "200ms ease-in-out width",
    WebkitTransition: "200ms ease-in-out width",
  },
}

export default Slides
