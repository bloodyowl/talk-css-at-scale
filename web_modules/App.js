import React, {Component} from "react"

var context = require.context(
  "./",
  true, // **/*
  /Slide\d+\.js$/
)

const keys = context.keys()
const slides = keys.sort().map(context)

import Slides from "Slides"

class App extends Component {
  render() {
    return (
      <Slides>
        {slides.map((Slide, index) => <Slide key={index} />)}
      </Slides>
    )
  }
}

export default App
