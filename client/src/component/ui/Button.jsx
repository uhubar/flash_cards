import React from "react";

function Button(
  { name, color, myobj } = { name: "Button", color: "black", myobj: {} }
) {
  // const style = {
  //     color,
  //     fontSize: "10px"
  // }

  return (
    <button style={{ color, fontSize: "10px" }} type="button">
      {name}
    </button>
  );
}

export default Button;
