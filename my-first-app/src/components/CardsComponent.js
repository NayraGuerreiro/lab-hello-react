import React from "react";

function Cards(props) {
  return (
    <div className="cards">
      <img alt={props.title} src={props.image} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Cards;
