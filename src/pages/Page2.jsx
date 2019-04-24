import React from "react";
import Controller from "../components/Controller";
import UsersList from "../components/UsersList";

export default class Page2 extends React.Component {
  render() {
    return (
      <div className="page container">
        <Controller currentPath={this.props.match.path} />
        <h1>Page 2</h1>
        <p>
          Build encapsulated components that manage their own state, then
          compose them to make complex UIs. Since component logic is written in
          JavaScript instead of templates, you can easily pass rich data through
          your app and keep state out of the DOM.
        </p>
        <UsersList />
      </div>
    );
  }
}
