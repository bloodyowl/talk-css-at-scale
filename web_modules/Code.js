import React, {Component, PropTypes} from "react"
import highlight from "highlight.js"

class Code extends Component {

  static propTypes = {
    code: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
  }

  render() {
    const {code, language} = this.props
    return (
      <pre
        style={styles.pre}
        dangerouslySetInnerHTML={{
          __html:
            highlight.highlight(language, code).value
              .replace(/class="hljs-class"/g, "style=\"color:#1294a2\"")
              .replace(/class="hljs-rules"/g, "style=\"color:#1294a2\"")
              .replace(/class="hljs-value"/g, "style=\"color:#a2231e\"")
              .replace(/class="hljs-attribute"/g, "style=\"color:#3e9a1d\"")
              .replace(/class="hljs-comment"/g, "style=\"color:#1348a3\"")
              .replace(/class="hljs-built_in"/g, "style=\"color:#a32661\"")
              .replace(/class="hljs-title"/g, "style=\"color:#b35b17\"")
              .replace(/class="hljs-string"/g, "style=\"color:#a2231e\""),
        }} />
    )
  }
}

const styles = {
  pre: {
    fontSize: "2rem",
    padding: "1rem",
  },
}

export default Code
