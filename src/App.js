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
  constructor(props){
    super(props);
    this.state = {
      
    };
  }

  playSound(){
    console.log('It was clicked');
  }

  render() {
    return (
      <div className="App">
        <div id="drum-machine" className="drums">
          <div id="display" className="container">
            <div className="drum-pad" onClick={this.playSound}>
              <audio className="clip" id="Q">
                <source src={s1} type="audio/mpeg"></source>
              </audio>
              Q
            </div>
            <div className="drum-pad" onClick={this.playSound}>
              <audio className="clip" id="W">
                <source src={s2} type="audio/mpeg"></source>
              </audio>
              W
            </div>
            <div className="drum-pad" onClick={this.playSound}>
              <audio className="clip" id="E">
               <source src={s3} type="audio/mpeg"></source>
              </audio>
              E
            </div>
            <div className="drum-pad" onClick={this.playSound}>
              <audio className="clip" id="A">
                <source src={s4} type="audio/mpeg"></source>
              </audio>
              A
            </div>
            <div className="drum-pad" onClick={this.playSound}>
              <audio className="clip" id="S">
                <source src={s5} type="audio/mpeg"></source>
              </audio>
              S
            </div>
            <div className="drum-pad" onClick={this.playSound}>
              <audio className="clip" id="D">
                <source src={s6} type="audio/mpeg"></source>
              </audio>
              D
            </div>
            <div className="drum-pad" onClick={this.playSound}>
              <audio className="clip" id="Z">
                <source src={s7} type="audio/mpeg"></source>
              </audio>
              Z
            </div>
            <div className="drum-pad" onClick={this.playSound}>
              <audio className="clip" id="X">
                <source src={s8} type="audio/mpeg"></source>
              </audio>
              X
            </div>
            <div className="drum-pad" onClick={this.playSound}>
              <audio className="clip" id="C">
                <source src={s9} type="audio/mpeg"></source>
              </audio>
              C
            </div>
          </div>
        </div>
      </div>
    );
  }  
}

export default App;
