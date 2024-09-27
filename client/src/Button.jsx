import React from "react";

function Button(
  { name, color} = { name: "Button", color: "black"}
) {

  return (
    <button type="button" style={{color, fontSize: '40px', margin: '10px'}} >
      {name}
    </button> 
  );
}

export default Button;
