import React, {Component, PropTypes} from "react"

class Slide extends Component {

  static propTypes = {
    index: PropTypes.number,
  }

  render() {
    const {title, children, index} = this.props
    return (
      <div
        style={{
          ...styles.slide,
          transform: `translateX(${ index * 100 }vw)`,
          WebkitTransform: `translateX(${ index * 100 }vw)`,
        }}>
        {children}
      </div>
    )
  }
}

const styles = {
  slide: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    fontFamily: `Colfax, "Helvetica Neue", Helvetica, Arial, sans-serif`,
    padding: "1rem",
    overflowY: "auto",
  },
}

export default Slide
