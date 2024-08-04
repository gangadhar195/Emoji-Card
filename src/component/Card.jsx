import React from "react";
import './Card.css';

function Card(props){
    return(
     <div className="term">
       <dt>
        <span className="emoji img-fluid" role="img" aria-label="Tense Biceps" >
          {props.emoji}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.description}</dd>
    </div>
    );
}

export default Card;