import React, { Component } from "react";

class Display extends Component {
  render(props) {
    const { soundPlay, soundsName, pads, sounds } = this.props;
    return (
      <div id="display" className="container">
        {sounds.map((sound, i) => {
          return (
            <div
              className="drum-pad"
              onClick={soundPlay}
              title={"Sound " + soundsName[i]}
              key={i}
            >
              <audio className="clip" id={soundsName[i]} title={pads[i]}>
                <source src={sounds[i]} type="audio/mpeg"></source>
                Your browser does not support the audio!
                  </audio>
              {soundsName[i]}
            </div>
          );
        })}
      </div>
    )
  }
}

export default Display;