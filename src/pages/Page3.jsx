import React from "react";
import Controller from "../components/Controller";

export default function Page3(props) {
  return (
    <div className="page container">
      <Controller currentPath={props.match.path} />
      <h1>Page 3</h1>
      <p>
        JavaScript is a high-level, interpreted programming language that
        conforms to the ECMAScript specification. JavaScript has curly-bracket
        syntax, dynamic typing, prototype-based object-orientation, and
        first-class functions.
      </p>
    </div>
  );
}
