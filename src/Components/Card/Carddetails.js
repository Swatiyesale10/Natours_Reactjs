import React, { Fragment } from "react";

function Carddetails(props) {
  console.log("Carddetails", props.details.startLocation.description);
  return (
    <Fragment>
      <h4 class="card__sub-heading">{props.details.difficulty}</h4>
      <p class="card__text">{props.details.summary}</p>
      <div class="card__data">
        <svg class="card__icon">
          <use href="/img/icons.svg#icon-map-pin"></use>
        </svg>
        <span>{props.details.startLocation.description}</span>
      </div>
      <div class="card__data">
        <svg class="card__icon">
          <use href="/img/icons.svg#icon-calendar"></use>
        </svg>
        <span>{props.details.startDates[0]}</span>
      </div>
      <div class="card__data">
        <svg class="card__icon">
          <use href="/img/icons.svg#icon-flag"></use>
        </svg>
        <span>{props.details.locations.length} stops</span>
      </div>
      <div class="card__data">
        <svg class="card__icon">
          <use href="/img/icons.svg#icon-user"></use>
        </svg>
        <span>{props.details.maxGroupSize} people</span>
      </div>
    </Fragment>
  );
}
export default Carddetails;
