import React, { Component } from "react";

class Panel extends Component {
  render(props) {
    const { volume, changeVolume } = this.props;
    return (
      <div className="panel">
        <h2>PANEL</h2>
        <p className="display-text" id="text-field">
          Display info ...
        </p>
        <h4>Volume control</h4>
        <input type="range" name="volume" min="0" max="1" step="0.1" value={volume} onChange={changeVolume}></input>
      </div>
    )
  }
}

export default Panel;