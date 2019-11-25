import React, { Component } from "react";
import Display from './Display';
import Panel from './Panel';

class DrumMachine extends Component {

  render(props) {
    const { soundPlay, soundsName, pads, sounds, volume, changeVolume } = this.props;
    return (
      <div id="drum-machine" className="drums">
        <Panel
          volume={volume}
          changeVolume={changeVolume}
        />
        <Display
          soundPlay={soundPlay}
          soundsName={soundsName}
          pads={pads}
          sounds={sounds}
        />
      </div>

    )
  }
}

export default DrumMachine;