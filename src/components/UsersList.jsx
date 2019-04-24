import React from "react";

export default class UsersList extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch("http://localhost:8081/api/users", { method: "GET" })
      .then(r => r.json())
      .then(json => {
        this.setState(() => ({ users: json }));
      });
  }

  render() {
    return (
      <div className="UsersList">
        <h2>Users:</h2>
        <ul>
          {this.state.users.map(user => (
            <li key={user._id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
