import axios from "axios";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Carddetails from "./Card/Carddetails";
import Cardheader from "./Card/Cardheader";
import Cardfooter from "./Card/Cardfooter";
import Tourinfo from "./Card/Tourinfo";
function Home() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    getTours();
  }, []);

  const getTours = async () => {
    try {
      let res = await axios({
        method: "Get",
        url: "http://127.0.0.1:3000/api/v1/tours",
      });

      console.log("resGetAllTours", res.data.data.data);
      setTours(res.data.data.data);
    } catch (err) {
      console.log(err.response.data.message);
      alert(err.response.data.message);
    }
  };
  console.log("tours", tours);
  return (
    <Fragment>
      <link rel="stylesheet" href="/css/style.css" />
      <div class="card-container">
        {tours.map((item, index) => (
          <div class="card">
            <div class="card__header">
              <Cardheader header={item}></Cardheader>
            </div>
            <div class="card__details">
              <Carddetails details={item}></Carddetails>
            </div>
            <div class="card__footer">
              <Cardfooter footer={item}></Cardfooter>
              <Tourinfo></Tourinfo>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
export default Home;
