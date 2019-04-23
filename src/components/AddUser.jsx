import React from "react";

const BASE_URL = "http://localhost:8081/api";

export default class AddUser extends React.Component {
  state = {
    name: ""
  };

  addUser() {
    fetch(`${BASE_URL}/user`, {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name
      })
    }).then(() => {
      this.setState(() => ({ name: "" }));
    });
  }

  inputHandler(name) {
    this.setState(() => ({ name }));
  }

  render() {
    return (
      <div>
        <h2>Add user</h2>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.inputHandler(e.target.value)}
        />
        <button onClick={() => this.addUser()}>Add</button>
      </div>
    );
  }
}
