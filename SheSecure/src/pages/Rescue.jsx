import React from "react";
import volunteer from "../volunteer";
import Cardcom from "../components/Cardcom";

function Rescue() {
  return (
    <div>
      <h1 className="resc1"> Rescue Volunteers </h1>
      <div className="resc-container">
        {volunteer.map((x) => (
          <Cardcom Img={x.img} Name={x.name} contact={x.contactno} />
        ))}
      </div>
    </div>
  );
}

export default Rescue;
