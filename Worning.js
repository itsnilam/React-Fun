import React from "react";
import { useState } from "react";
function Worning() {
  const [state, setState] = useState(false);
  const [deleted, setdeleted] = useState(false);
  function Delete() {
    setState(true);
    setdeleted(false);
  }
  function Procide() {
    setdeleted(true);
  }
  return (
    <div className="procide">
      {state && (
        <div>
          {" "}
          <h1>Are you shoure !</h1>
          <button onClick={Procide}>Procide</button>
          {deleted && <h2>Deleted</h2>}
        </div>
      )}

      <button onClick={Delete}>Delete</button>
    </div>
  );
}

export default Worning;
