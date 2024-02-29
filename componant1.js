import React, { useState } from "react";
import "./funbuttons.css";
import { Examples } from "./Exapledata.js";
import Butons from "./Butons";
function Componant1() {
  const [delet, setDelet] = useState(false);
  const [content, setContent] = useState("jsx");

  function handalClick(selectedcontent) {
    setContent(selectedcontent);
  }
  function isDelet() {
    setDelet(true);
  }

  function proceed() {
    setDelet(false);
  }

  const butndiv = {};
  return (
    <div className="box">
      {delet && (
        <div className="alert-box">
          <p>Are you sure !</p>
          <button onClick={proceed}>Proceed</button>
        </div>
      )}
      <button onClick={isDelet}>Delete</button>

      <div className="butndiv">
        <Butons onSelect={() => handalClick("jsx")}> JSX</Butons>
        <Butons onSelect={() => handalClick("Hooks")}>HOOKS</Butons>
        <Butons onSelect={() => handalClick("Props")}>PROPS</Butons>
        <Butons onSelect={() => handalClick("Router")}>ROUTER</Butons>
        {content && (
          <div className="contentdiv">
            <h1>{Examples[content].title}</h1>

            <p>{Examples[content].discription}</p>
            <pre>
              <code>{Examples[content].code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default Componant1;
