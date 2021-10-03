
import React from "react";
import ReactDom from "react-dom";

let Root = document.getElementById("root");
const time = new Date().getHours();
// const time = 11;
var colors = { color: "" };

let greetings;
if (time < 12) {
  greetings = "Good Morning";
  colors.color = "red";
} else if (time < 18) {
  greetings = "Good AfterNoon";
  colors.color = "green";
} else {
  greetings = "Good Evening";
  colors.color = "blue";
}
ReactDom.render(
  <div>
    <h1 className="heading" style={colors}>
      {greetings}
    </h1>
  </div>,
  Root
);
