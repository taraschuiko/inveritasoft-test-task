import React from "react";

export default class AddUser extends React.Component {
  state = {
    name: ""
  };

  addUser() {
    fetch("http://localhost:8081/api/user", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
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
          onKeyPress={e => e.key === "Enter" && this.addUser()}
        />
        <button onClick={() => this.addUser()}>Add</button>
      </div>
    );
  }
}
