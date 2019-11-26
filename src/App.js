import React, { Component } from "react";
import DrumMachine from './components/DrumMachine';
import s1 from "./assets/sounds/s1.mp3";
import s2 from "./assets/sounds/s2.mp3";
import s3 from "./assets/sounds/s3.mp3";
import s4 from "./assets/sounds/s4.mp3";
import s5 from "./assets/sounds/s5.mp3";
import s6 from "./assets/sounds/s6.mp3";
import s7 from "./assets/sounds/s7.mp3";
import s8 from "./assets/sounds/s8.mp3";
import s9 from "./assets/sounds/s9.mp3";

class App extends Component {
  state = {
    volume: 0.3,
    soundsName: ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
    sounds: [s1, s2, s3, s4, s5, s6, s7, s8, s9],
    pads: ["Pad 1", "Pad 2", "Pad 3", "Pad 4", "Pad 5", "Pad 6", "Pad 7", "Pad 8", "Pad 9"],
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
      // Play sound
      activePad.play();
      // Change color of pad
      let parent = activePad.parentNode;
      parent.classList.add('active');
      setTimeout(() => {
        parent.classList.remove('active');
        parent.classList.add('drum-pad');
      }, 300);
      // Display name of key on text field
      const textField = document.getElementById("text-field");
      textField.innerHTML = activePad.title;
    };
  }

  soundPlay = (e) => {
    // Change color of pad
    e.persist();
    e.target.classList.add('active');
    setTimeout(() => {
      e.target.classList.remove('active');
      e.target.classList.add('drum-pad');
    }, 300);
    // Define an active element
    let activePad = e.target.firstChild;
    // Play sound
    activePad.play();
    // Display name of pad on text field  
    const textField = document.getElementById("text-field");
    textField.innerHTML = e.target.title;
  }

  changeVolume = (e) => {
    const textField = document.getElementById("text-field");
    textField.innerHTML = `Volume: ${e.target.value}`;

    this.setState({
      volume: e.target.value
    });

    // Set level of volume for each pad
    for (let i = 0; i < this.state.soundsName.length; i++) {
      document.getElementById(this.state.soundsName[i]).volume = this.state.volume;
    }
  }

  render() {
    return (
      <div className="App">
        <h1>DRUM MACHINE</h1>
        <DrumMachine
          sounds={this.state.sounds}
          soundPlay={this.soundPlay}
          soundsName={this.state.soundsName}
          pads={this.state.pads}
          changeVolume={this.changeVolume}
          volume={this.state.volume}
        />
      </div>
    );
  }
}

export default App;
