import React from "react";

function Cardcom(props) {
  return (
    <div className="resc">
      <h3 className="resc"> {props.Id} </h3>
      <img className="resc" src={props.Img} />
      <p className="resc"> {props.Name} </p>
      <p className="resc"> {props.contact} </p>
    </div>
  );
}

export default Cardcom;
