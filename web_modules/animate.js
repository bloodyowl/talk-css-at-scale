import React, {Component} from "react"

const DURATION = 300

export default () => {
  return (AnimatedComponent) => {
    class AnimationWrapper extends Component {

      state = {
        startAnimation: 0,
        leaveAnimation: 0,
        isRunningEnterAnimation: false,
        isRunningLeaveAnimation: false,
      }

      componentWillEnter(callback) {
        const start = Date.now()
        this.setState({
          isRunningEnterAnimation: true,
        })
        const tick = () => {
          const enterAnimation = (Date.now() - start) / DURATION
          const isLastFrame = enterAnimation >= 1
          this.setState({
            enterAnimation: isLastFrame ? 1 : enterAnimation,
          })
          if(!isLastFrame) {
            requestAnimationFrame(tick)
          } else {
            this.setState({
              isRunningEnterAnimation: false,
            })
            callback()
          }
        }
        tick()
      }

      componentWillLeave(callback) {
        const start = Date.now()
        this.setState({
          isRunningLeaveAnimation: true,
        })
        const tick = () => {
          const leaveAnimation = (Date.now() - start) / DURATION
          const isLastFrame = leaveAnimation >= 1
          this.setState({
            leaveAnimation: isLastFrame ? 1 : leaveAnimation,
          })
          if(!isLastFrame) {
            requestAnimationFrame(tick)
          } else {
            this.setState({
              isRunningLeaveAnimation: false,
            })
            callback()
          }
        }
        tick()
      }

      render() {
        return (
          <AnimatedComponent
            {...this.props}
            {...this.state} />
        )
      }
    }

    return AnimationWrapper
  }
}
