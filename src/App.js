import React, { Component } from "react";
import s1 from "./assets/sounds/s1.mp3";
import s2 from "./assets/sounds/s2.mp3";
import s3 from "./assets/sounds/s3.mp3";
import s4 from "./assets/sounds/s4.mp3";
import s5 from "./assets/sounds/s5.mp3";
import s6 from "./assets/sounds/s6.mp3";
import s7 from "./assets/sounds/s7.mp3";
import s8 from "./assets/sounds/s8.mp3";
import s9 from "./assets/sounds/s9.mp3";

const soundsName = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
const sounds = [s1, s2, s3, s4, s5, s6, s7, s8, s9];
const pads = ["Pad 1", "Pad 2", "Pad 3", "Pad 4", "Pad 5", "Pad 6", "Pad 7", "Pad 8", "Pad 9"];
// const charCodes = [81, 87, 69, 65, 83, 68, 90, 88, 67];
const audio = document.querySelector('audio');

class App extends Component {
  state = {
    volume: 0.3
  }
  componentDidMount(e) {
    // Listens for keydown event
    document.onkeydown = e => {
      e = e || window.event;
      let key = e.which || e.keyCode;
      // Take name of key by keyCode
      let pad = String.fromCharCode(key);
      // Use name of key for find suitable element to active
      let activePad = document.getElementById(pad);
      // Display name of key on text field
      const textField = document.getElementById("text-field");
      textField.innerHTML = activePad.title;
    };
  }

  soundPlay(e) {
    // Define an active element
    let activePad = e.target.firstChild;
    // Play sound
    activePad.play();
    // Display name of pad on text field
    const textField = document.getElementById("text-field");
    textField.innerHTML = e.target.title;
  }

  changeVolume = (e) => {
    this.setState({
      volume: e.target.value
    });
    let qVol = document.getElementById('Q');
    let wVol = document.getElementById('W');
    let eVol = document.getElementById('E');
    let aVol = document.getElementById('A');
    let sVol = document.getElementById('S');
    let dVol = document.getElementById('D');
    let zVol = document.getElementById('Z');
    let xVol = document.getElementById('X');
    let cVol = document.getElementById('C');
    qVol.volume = this.state.volume;
    wVol.volume = this.state.volume;
    eVol.volume = this.state.volume;
    aVol.volume = this.state.volume;
    sVol.volume = this.state.volume;
    dVol.volume = this.state.volume;
    zVol.volume = this.state.volume;
    xVol.volume = this.state.volume;
    cVol.volume = this.state.volume;
    const textField = document.getElementById("text-field");
    textField.innerHTML = `Volume: ${this.state.volume}`;
  }

  render() {
    return (
      <div className="App">
        <h1>DRUM MACHINE PANEL</h1>
        <div id="drum-machine" className="drums">
          <div id="display" className="container">
            {sounds.map((sound, i) => {
              return (
                <div
                  className="drum-pad"
                  onClick={this.soundPlay}
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
          <div className="panel">
            <h2>PANEL</h2>
            <p className="display-text" id="text-field">
              Display info ...
            </p>
            <h4>Volume control</h4>
            <input type="range" name="volume" min={0} max={1} step={0.1} value={this.state.volume} onChange={this.changeVolume}></input>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
