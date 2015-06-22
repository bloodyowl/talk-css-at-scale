import React, {Component, PropTypes} from "react"

class Slide extends Component {

  static propTypes = {
    enterAnimation: PropTypes.number,
    leaveAnimation: PropTypes.number,
    isRunningEnterAnimation: PropTypes.bool,
    isRunningLeaveAnimation: PropTypes.bool,
    comesFrom: PropTypes.oneOf([
      "left",
      "right",
    ])
  }

  render() {
    const {
      title,
      children,
      index,
      enterAnimation,
      leaveAnimation,
      isRunningEnterAnimation,
      isRunningLeaveAnimation,
      comesFrom,
    } = this.props
    return (
      <div
        style={{
          ...styles.slide,
          ...isRunningEnterAnimation && {
            transform:
              `translateX(` +
                `${ comesFrom === "left" ? "-" : "" }` +
                `${ (1 - enterAnimation) * 100 }%)`,
            WebkitTransform:
              `translateX(` +
                `${ comesFrom === "left" ? "-" : "" }` +
                `${ (1 - enterAnimation) * 100 }%)`,
          },
          ...isRunningLeaveAnimation && {
            opacity: (1 - leaveAnimation) * 1,
          },
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
    height: "100vh",
    width: "100vw",
    fontFamily: `Colfax, "Helvetica Neue", Helvetica, Arial, sans-serif`,
    padding: "1rem",
    overflowY: "auto",
    backgroundColor: "#eceff0",
  },
}

export default Slide
