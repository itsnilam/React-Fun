import React from "react";
import { useState } from "react";
import Buttons2 from "./Buttons2";
import { Example2 } from "./Example2";
import "./Buttons2.css";

function Componant2() {
  const [curuntstate, setState] = useState("React");

  function handalClick(selectedvalue) {
    setState(selectedvalue);
  }
  return (
    <div className="cards">
      <Buttons2 isSelected={() => handalClick("React")}>React</Buttons2>
      <Buttons2 isSelected={() => handalClick("java")}>Java</Buttons2>
      <Buttons2 isSelected={() => handalClick("sql")}>Sql</Buttons2>
      <Buttons2 isSelected={() => handalClick("css")}>CSS</Buttons2>
      {curuntstate && (
        <div className="info">
          <h2 className="title">{Example2[curuntstate]. heading}</h2>
          <p className="discription">{Example2[curuntstate].discription}</p>
        </div>
      )}
    </div>
  );
}

export default Componant2;
