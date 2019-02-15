import React, { Component } from "react";
class nickname extends Component {
  state = { value: "" };
  handleSubmit = () => {
    alert("A name was submitted: " + this.state.value);
  };
  handleChange = () => {
    this.setState({ value: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter Nickname:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default nickname;
