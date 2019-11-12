import React, { Component } from 'react';
import s1 from './assets/sounds/s1.mp3';
import s2 from './assets/sounds/s2.mp3';
import s3 from './assets/sounds/s3.mp3';
import s4 from './assets/sounds/s4.mp3';
import s5 from './assets/sounds/s5.mp3';
import s6 from './assets/sounds/s6.mp3';
import s7 from './assets/sounds/s7.mp3';
import s8 from './assets/sounds/s8.mp3';
import s9 from './assets/sounds/s9.mp3';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  playSound(e) {
    const textField = document.getElementById('text-field');
    // Display name of pad on text field
    textField.innerHTML = e.target.title;
  }

  render() {
    const sounds = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
    return (
      <div className="App">
        <h1>DRUM MACHINE PANEL</h1>
        <div id="drum-machine" className="drums">
          <div id="display" className="container">
            {sounds.map((sound, i) => {
              return <div className="drum-pad" onClick={this.playSound} title={"Sound " + sound} key={i}>
                <audio className="clip" id={sound}>
                  <source src={"s" + ++i} type="audio/mpeg"></source>
                </audio>
                {sound}
              </div>;
            })}
          </div>
          <div className="panel">
            <h2>PANEL</h2>
            <p className="display-text" id="text-field">Sound name</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
