import React from "react";

import Boy from "../Images/boy dummy data.jpg";
import Girl from "../Images/cartoon girl dummy data.jpg";

export function Boys({text}) {
  const boyStyle = {
    width: "150px",
    height: "150px",
    backgroundImage: "url(" + Boy + ")",
    backgroundSize: "150px 150px",
    border: "none",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    borderRadius: "5px",
  };
    return (
      <div style={boyStyle}>
        {text}
    </div>    
    )
}

export function Girls({text}) {

  const girlStyle = {
    width: "150px",
    height: "150px",
    backgroundImage: "url(" + Girl + ")",
    backgroundSize: "150px 150px",
    border: "none",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    borderRadius:'5px'
  };
    return (
      <div style={girlStyle}>
        {text}
     </div>
    )
}