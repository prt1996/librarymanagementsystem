import React from "react";
import "./style.css";
import Books from "../Books/Books";
export class Header extends React.Component {
  render() {
    return (
      <div className="">
        <div className="header">
          <h1> Librarymanagementsystem </h1>
        </div>

        <Books />
      </div>
    );
  }
}
