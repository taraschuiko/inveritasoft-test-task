import React from "react";
import Controller from "../components/Controller";

export default function Page2(props) {
  return (
    <div className="page">
      <Controller currentPath={props.match.path} />
      <h1>Page2 content</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
        veritatis similique quod iste sunt explicabo in nesciunt quae officia
        enim odit debitis voluptatibus sed nulla, culpa maiores doloremque
        voluptate a.
      </p>
    </div>
  );
}
