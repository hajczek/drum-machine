import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">
          <div class="drum-pad">
            <audio class="clip" id="Q">
              <source src="" type=""></source>
              Q
            </audio>
          </div>
          <div class="drum-pad">
            <audio class="clip" id="W">
              <source src="" type=""></source>
              W
            </audio>
          </div>
          <div class="drum-pad">
            <audio class="clip" id="E">
             <source src="" type=""></source>
              E
            </audio>
          </div>
          <div class="drum-pad">
            <audio class="clip" id="A">
              <source src="" type=""></source>
              A
            </audio>
          </div>
          <div class="drum-pad">
            <audio class="clip" id="S">
              <source src="" type=""></source>
              S
            </audio>
          </div>
          <div class="drum-pad">
            <audio class="clip" id="D">
              <source src="" type=""></source>
              D
            </audio>
          </div>
          <div class="drum-pad">
            <audio class="clip" id="Z">
              <source src="" type=""></source>
              Z
            </audio>
          </div>
          <div class="drum-pad">
            <audio class="clip" id="X">
              <source src="" type=""></source>
              X
            </audio>
          </div>
          <div class="drum-pad">
            <audio class="clip" id="C">
              <source src="" type=""></source>
              C
            </audio>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
