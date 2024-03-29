import React, { Component } from "react";
import { pads } from "./assets/data/pads";
import { soundsName } from "./assets/data/soundsName";
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
    soundsName: soundsName,
    sounds: [s1, s2, s3, s4, s5, s6, s7, s8, s9],
    pads: pads,
    className: 'active',
    textInfo: 'Info ...'
  }

  componentDidMount(e) {
    // Listen for keydown event
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
      parent.classList.add(this.state.className);
      setTimeout(() => {
        parent.classList.remove(this.state.className);
      }, 300);

      // Display name of key on text field
      this.setState({
        textInfo: activePad.title
      })
    };
  }

  soundPlay = (e) => {
    e.persist();
    // Change color of pad    
    e.target.classList.add(this.state.className);
    setTimeout(() => {
      e.target.classList.remove(this.state.className);
    }, 300);

    // Define an active element
    let activePad = e.target.firstChild;
    // Play sound
    activePad.play();

    // Display name of pad on text field
    this.setState({
      textInfo: e.target.title
    })
  }

  changeVolume = (e) => {
    this.setState({
      volume: e.target.value,
      textInfo: e.target.value
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
          textInfo={this.state.textInfo}
        />
      </div>
    );
  }
}

export default App;
