import React, { Component } from "react";

export class radio extends Component {
  state = {
    courses: [{ value: "odin", name: "jkj" }],
  };
  onChange = (e) => {
    this.setState({ courses: [{ value: e.target.value }] });
  };
  onclick = (e) => {
    e.preventDefault();
    const { name } = this.state.courses[0];
    console.log(name);
  };
  render() {
    const { value } = this.state.courses[0];

    return (
      <form>
        <h1>current is : {value}</h1>
        <label>odin</label>
        <input
          type="radio"
          value="odin"
          onChange={this.onChange}
          checked={value === "odin"}
          name="gender"
        />
        <label>thor</label>
        <input
          type="radio"
          value="thor"
          onChange={this.onChange}
          checked={value === "thor"}
          name="gender"
        />
        <button onClick={this.onclick}>ارسال</button>
      </form>
    );
  }
}

export default radio;
