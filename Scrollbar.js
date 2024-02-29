import {React,useEffect,useState} from "react";
import "./App.css";

function Scrollbar({ city, landmark_title, landmark_address }) {

  
  return (


    <div className="contactmaindiv">
      
      
      <div className="address1">
        <div className="add-city"><h2>{city}</h2></div>
        <div className="add-landmark">
          <ul>
            <li className="li-addrestile">
              <h3>{landmark_title}</h3>
            </li>
            <li className="ltext">{landmark_address}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Scrollbar;
