import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img alt="character" src={props.character.images.sm} />
    <h2>{props.character.name}</h2>
    <p>{props.character.appearance.gender}</p>
    <p>
      <b>{props.character.biography.fullName}</b>
    </p>
  </div>
);
