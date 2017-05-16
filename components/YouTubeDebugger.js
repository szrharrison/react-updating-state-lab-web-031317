import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor() {
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }

    this.setBitrate = this.setBitrate.bind(this)
    this.setResolution = this.setResolution.bind(this)
  }

  setBitrate() {
    let settings = Object.assign({}, this.state.settings, { bitrate: 12 })
    this.setState({
      settings: settings
    })
  }
  setResolution() {
    let settings = Object.assign({}, this.state.settings, { video: Object.assign({}, this.state.settings.video, { resolution: '720p' }) })
    this.setState({
      settings: settings
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.setBitrate}>Set Bitrate</button>
        <button className="resolution" onClick={this.setResolution}>Set Resolution</button>
      </div>
    )
  }
}

export default YouTubeDebugger
