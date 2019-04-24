import React from "react";
import Controller from "../components/Controller";
import AddUser from "../components/AddUser";

export default function Page1(props) {
  return (
    <div className="page container">
      <Controller currentPath={props.match.path} />
      <h1>Page1 content</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        veritatis similique quod iste sunt explicabo in nesciunt quae officia
        enim odit debitis voluptatibus sed nulla, culpa maiores doloremque
        voluptate a.
      </p>
      <AddUser />
    </div>
  );
}
