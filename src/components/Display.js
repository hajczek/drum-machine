import React, { Component } from "react";
import Audio from './Audio';

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
              <Audio
                pads={pads[i]}
                sounds={sounds[i]}
                soundsName={soundsName[i]}
              />
              {soundsName[i]}
            </div>
          );
        })}
      </div>
    )
  }
}

export default Display;