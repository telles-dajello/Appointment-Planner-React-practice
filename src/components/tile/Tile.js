import React from "react";

export const Tile = (props) => {
  const name = props.name;
  const description = props.description;
  return (
    <div className="tile-container">
      <p className="tile-title"> {name}</p>
      {
        Object.values(description).map((item, index) => {
          <p key={index} className="tile" >{item}</p>
        })
      }
    </div>
  );
};
