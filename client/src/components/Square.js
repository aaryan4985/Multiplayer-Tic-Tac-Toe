import React from "react";

function square(chooseSquare, val) {
  return (
    <div className="square" onClick={chooseSquare}>
      {val}
    </div>
  );
}

export default square;
