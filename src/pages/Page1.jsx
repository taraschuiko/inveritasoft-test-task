import React from "react";
import Controller from "../components/Controller";
import AddUser from "../components/AddUser";

export default function Page1(props) {
  return (
    <div className="page container">
      <Controller currentPath={props.match.path} />
      <h1>Page 1</h1>
      <p>
        React makes it painless to create interactive UIs. Design simple views
        for each state in your application, and React will efficiently update
        and render just the right components when your data changes. Declarative
        views make your code more predictable and easier to debug.
      </p>
      <AddUser />
    </div>
  );
}
