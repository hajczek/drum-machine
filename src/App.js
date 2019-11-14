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
const charCodes = [81, 87, 69, 65, 83, 68, 90, 88, 67];
const sounds = [s1, s2, s3, s4, s5, s6, s7, s8, s9];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    // Listens for keydown event
    document.onkeydown = e => {
      e = e || window.event;
      var key = e.which || e.keyCode;
      charCodes.map(code => (key == code ? console.log(code) : false));
    };
  };

  soundPlay(e) {
    let activePad = e.target.firstChild;
    console.log(activePad);
    activePad.play();

    const textField = document.getElementById("text-field");
    // Display name of pad on text field
    textField.innerHTML = e.target.title;
  }

  render() {
    return (
      <div className="App">
        <h1> DRUM MACHINE PANEL </h1>
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
                  <audio className="clip" id={soundsName[i]}>
                    <source src={sounds[i]} type="audio/mpeg"></source>
                  </audio>
                  {soundsName[i]}
                </div>
              );
            })}
          </div>
          <div className="panel">
            <h2> PANEL </h2>
            <p className="display-text" id="text-field">
              Sound name
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
