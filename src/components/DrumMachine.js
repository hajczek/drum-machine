import React, { Component } from "react";
import Display from './Display';
import Panel from './Panel';

class DrumMachine extends Component {

  render(props) {
    const { soundPlay, soundsName, pads, sounds, volume, changeVolume } = this.props;
    return (
      <div id="drum-machine" className="drums">
        <Display
          soundPlay={soundPlay}
          soundsName={soundsName}
          pads={pads}
          sounds={sounds}
        />
        <Panel
          volume={volume}
          changeVolume={changeVolume}
        />
        {/*<div className="panel">
          <h2>PANEL</h2>
          <p className="display-text" id="text-field">
            Display info ...
            </p>
          <h4>Volume control</h4>
          <input type="range" name="volume" min="0" max="1" step="0.1" value={volume} onChange={changeVolume}></input>
        </div> */}
      </div>

    )
  }
}

export default DrumMachine;