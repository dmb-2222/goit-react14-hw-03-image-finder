import React, { Component } from "react";
import Loader from "react-loader-spinner";

export default class App extends Component {
  //other logic
  render() {
    return (
      <div className='loader'>
        <Loader
          type="BallTriangle"
          color="#00BFFF"
          height={100}
          width={100}
          // timeout={3000} //3 secs
        />
      </div>
    );
  }
}
