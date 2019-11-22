import React, { Component } from "react";

class Audio extends Component {
  render(props) {
    const { soundsName, pads, sounds } = this.props;
    return (
      <audio className="clip" id={soundsName} title={pads}>
        <source src={sounds} type="audio/mpeg"></source>
        Your browser does not support the audio!
      </audio>
    )
  }
}

export default Audio;