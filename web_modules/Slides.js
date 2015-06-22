import React, {Component, Children, cloneElement, addons} from "react/addons"
const {TransitionGroup} = addons

class Slides extends Component {

  state = {
    index: 0,
    from: null,
  }

  componentWillMount() {
    const hash = window.location.hash.slice(1)
    if(hash.length) {
      const initialSlide = parseInt(hash, 10)
      if(initialSlide) {
        this.setState({
          index: initialSlide,
        })
      }
    }
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
    const nextIndex = Math.min(Math.max(index, 0), count - 1)
    this.setState({
      index: nextIndex,
      comesFrom: this.state.index < nextIndex ? "right" : "left",
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

  componentDidUpdate() {
    window.location.hash = "#" + this.state.index
  }

  render() {
    const {children} = this.props
    const {index, comesFrom} = this.state
    return (
      <div style={styles.container}>
        <div style={styles.progressBar}>
          <div style={{
            ...styles.progress,
            width: `${ index / (Children.count(children) - 1) * 100 }%`,
          }} />
        </div>
        <TransitionGroup component="div">
          {cloneElement(children[index], {comesFrom})}
        </TransitionGroup>
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
  progressBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: ".25rem",
    backgroundColor: "#ccc",
    zIndex: 100,
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
