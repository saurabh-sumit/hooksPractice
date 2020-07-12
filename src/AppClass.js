import "./App.css";

import React, { Component, Fragment } from "react";

class App extends Component {
  state = {
    count: 0,
    x1: null,
    y1: null,
    x2: null,
    y2: null,
  };
  changeTheValue = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  reduceTheValue = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };
  componentDidMount() {
    window.addEventListener("mouseup", this.handleMouseUp);
    window.addEventListener("mousedown", this.handleMouseDown);
  }
  handleMouseUp = (event) => {
    // const tx2 = this.state.x2;
    // const ty2 = this.state.y2;
    this.setState({ x2: event.pageX, y2: event.pageY });
  };
  handleMouseDown = (event) => {
    this.setState({
      x1: event.pageX,
      y1: event.pageY,
      x2: 0,
      y2: 0,
    });
  };
  render() {
    return (
      <Fragment>
        <div>Learn React</div>
        <div>
          <button onClick={this.changeTheValue}>click to add</button>
          <button onClick={this.reduceTheValue}>click to subtract</button>
        </div>
        <div>{this.state.count}</div>
        <div>
          <p>x1:{this.state.x1}</p>
          <p>y1:{this.state.y1}</p>
          <p>x2:{this.state.x2}</p>
          <p>y2:{this.state.y2}</p>
          <button
            onClick={() => {
              this.setState({ x1: null, y1: null, x2: null, y2: null });
            }}
          >
            Reset
          </button>
        </div>
      </Fragment>
    );
  }
}
export default App;
