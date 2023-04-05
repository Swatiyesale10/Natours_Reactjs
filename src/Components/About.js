import React from "react";

function About(props) {
  console.log("ABOUT", props.data);
  return <p>{props.data} </p>;
}
export default About;
