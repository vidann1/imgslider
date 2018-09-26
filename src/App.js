import React, { Component } from "react";

import "./styles/App.css";
import ImgSlider from "./components/ImgSlider";

class App extends Component {
  state = {
    visible: true
  };
  render() {
    const btnText = this.state.visible ? "hide" : "show";
    return (
      <div className="App">
        <header className="App-header">
          <h1>image slider</h1>
        </header>

        {this.state.visible ? <ImgSlider /> : <small>hidden</small>}
        <button
          onClick={() => {
            this.setState({
              visible: !this.state.visible
            });
          }}
        >
          {btnText}
        </button>
      </div>
    );
  }
}

export default App;
