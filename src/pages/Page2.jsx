import React from "react";
import Controller from "../components/Controller";
import UsersList from "../components/UsersList";

export default class Page2 extends React.Component {
  render() {
    return (
      <div className="page container">
        <Controller currentPath={this.props.match.path} />
        <h1>Page2 content</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          veritatis similique quod iste sunt explicabo in nesciunt quae officia
          enim odit debitis voluptatibus sed nulla, culpa maiores doloremque
          voluptate a.
        </p>
        <UsersList />
      </div>
    );
  }
}
