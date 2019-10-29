import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
          <div class="drum-pad">
            <audio class="clip" src="" id="Q">Q</audio>
          </div>
          <div class="drum-pad">
          <audio class="clip" src="" id="W">W</audio>
          </div>
          <div class="drum-pad">
            <audio class="clip" src="" id="E">E</audio>
          </div>
          <div class="drum-pad">
            <audio class="clip" src="" id="A">A</audio>
          </div>
          <div class="drum-pad">
            <audio class="clip" src="" id="S">S</audio>
          </div>
          <div class="drum-pad">
            <audio class="clip" src="" id="D">D</audio>
          </div>
          <div class="drum-pad">
            <audio class="clip" src="" id="Z">Z</audio>
          </div>
          <div class="drum-pad">
            <audio class="clip" src="" id="X">X</audio>
          </div>
          <div class="drum-pad">
            <audio class="clip" src="" id="C">C</audio>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
