import React from "react";

function Butons({ children, onSelect }) {
  return (
    <div>
      <button onMouseEnter={onSelect}>{children}</button>
    </div>
  );
}

export default Butons;
