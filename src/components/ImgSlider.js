import React from "react";
/*
        <button onClick={() => {
			this.setState({
				index: this.state.index - 1
			})
		}}>previous</button>

        <button onClick={() => {
			this.setState({
				index: this.state.index + 1 
			})
		}}>next</button>

*/
class ImgSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      img: [
        "https://www.oldpicsarchive.com/wp-content/uploads/2016/02/Bill-Brandt-Piccadilly-Circus-Before-the-Blackout-1940-799x1024.jpg",
        "https://www.oldpicsarchive.com/wp-content/uploads/2016/02/BT-Tower-London-under-construction-1960s.jpg",
        "https://www.oldpicsarchive.com/wp-content/uploads/2016/02/Boats-in-front-of-the-Battersea-Power-Station-London-England-1934.jpg"
      ],
      index: 0
    };
  }
  handleNext = () => {
    this.setState({
      index: this.state.index + 1
    });
  };
  handlePrevious = () => {
    this.setState({
      index: this.state.index - 1
    });
  };
  render() {
    let style = {
      width: 500,
      height: 500,
      padding: 10,
      background: "red"
    };
    return (
      <div>
        <img style={style} src={this.state.img[this.state.index]} />
        <br />
        <button onClick={this.handlePrevious}>previous</button>
        <button onClick={this.handleNext}>next</button>
      </div>
    );
  }
}

export default ImgSlider;
