import React from "react";
import { Link } from "react-router-dom";

export default class Controller extends React.Component {
  state = {
    currentPagePath: this.props.currentPath,
    previousPagePath: "",
    nextPagePath: ""
  };

  componentDidMount() {
    const maxPageNumber = 3;
    const currentPageNumber = parseInt(this.state.currentPagePath.slice(5));
    var previousPagePath;
    var nextPagePath;

    if (currentPageNumber - 1 < 1) {
      previousPagePath = `/page${3}`;
    } else {
      previousPagePath = `/page${currentPageNumber - 1}`;
    }

    if (currentPageNumber + 1 > maxPageNumber) {
      nextPagePath = `/page${1}`;
    } else {
      nextPagePath = `/page${currentPageNumber + 1}`;
    }

    this.setState(() => ({
      previousPagePath,
      nextPagePath
    }));
  }

  render() {
    const { previousPagePath, nextPagePath } = this.state;
    return (
      <div className="Controller">
        <Link to={previousPagePath}>
          <button>Previous</button>
        </Link>
        <Link to={nextPagePath}>
          <button>Next</button>
        </Link>
      </div>
    );
  }
}
