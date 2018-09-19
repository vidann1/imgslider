import React, { Component } from "react";

import "./styles/App.css";
import ImgSlider from "./components/ImgSlider";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>image slider</h1>
        </header>

        <ImgSlider />
      </div>
    );
  }
}

export default App;
