import React, { Component } from "react";
import MultilineInput from "./component/MultilineInput";

class App extends Component {
  render() {
    return (
      <div>
        <div className="input-container">
        <MultilineInput />
        </div>
      </div>
    );
  }
}

export default App;
