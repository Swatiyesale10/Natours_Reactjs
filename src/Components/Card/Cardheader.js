import React, { Fragment } from "react";

function Cardheader(props) {
  console.log("Cardheader", props.header.name);
  return (
    <Fragment>
      <div class="card__picture">
        <div class="card__picture-overlay">&nbsp;</div>
        <img
          class="card__picture-img"
          src="/img/tours/tour-2-cover.jpg"
          alt="The Sea Explorer"
        />
      </div>
      <h3 class="heading-tertirary">
        <span>{props.header.name}</span>
      </h3>
    </Fragment>
  );
}
export default Cardheader;
