import React, { Component } from "react";
import Tag from "./Tag";
import languages from '../languages.json';


class MultilineInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      tags: ["vaibhv"]
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleKeyPress = event => {
    if (event.key === "Enter") {
      const { tags } = this.state;
      tags.push(this.state.value);

      this.setState({
        tags,
        value: ""
      });
    }
  };

  render() {
    const { value, tags } = this.state;

    return (
      <div>
          <label htmlFor="language">Select language</label>
          <select >
              {
                  languages.map((language, index) => (
                      <option key={index}>{ language.language }</option>
                  ))
              }
          </select>
        <div className="wrapper">
          <div>
            {tags.map((tag, index) => (
              <Tag key={index} name={tag} />
            ))}
          </div>
          <input
            type="text"
            className="input"
            value={value}
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        </div>
      </div>
    );
  }
}

export default MultilineInput;
