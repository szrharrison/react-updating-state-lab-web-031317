import React from 'react'

class DigitalClicker extends React.Component {
  constructor() {
    super()

    this.state = {
      timesClicked: 0
    }
    this.incrementClicker = this.incrementClicker.bind(this)
  }

  incrementClicker(event) {
    let clicked = this.state.timesClicked

    this.setState({
      timesClicked: clicked + 1
    })
  }

  render() {
    return (
      <button onClick={this.incrementClicker}>{this.state.timesClicked}</button>
    )
  }
}

export default DigitalClicker
