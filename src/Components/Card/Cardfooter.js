import React, { Fragment } from "react";

function Cardfooter(props) {
  console.log("Cardfooter", props.footer);
  return (
    <Fragment>
      <p>
        <span class="card__footer-value">${props.footer.price}</span>{" "}
        <span class="card__footer-text">per person</span>
      </p>
      <p class="card__ratings">
        <span class="card__footer-value">{props.footer.ratingsAverage}</span>{" "}
        <span class="card__footer-text">
          rating({props.footer.ratingsQuantity})
        </span>
      </p>
    </Fragment>
  );
}
export default Cardfooter;
