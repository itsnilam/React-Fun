import React from "react";
import "./Buttons2.css";
function Buttons2({ children, isSelected }) {
  return (
    <div >
      <button className="selectbtn"onClick={isSelected}>{children}</button>
    </div>
  );
}

export default Buttons2;
