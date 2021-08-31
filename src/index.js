//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
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
