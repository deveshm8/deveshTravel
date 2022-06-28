import React from "react";
import Places from "./json";
import "./cards.css";
import {
  BsFillPersonFill,
  BsFillStopwatchFill,
  BsCurrencyDollar
} from "react-icons/bs";
import Like from "./like";
function FillDetails(props) {
  return (
    <>
      <img src={props.img} />
      <h4>{props.name}</h4>
      <p>
        <BsFillPersonFill /> {props.description}
      </p>
      <p>
        <BsFillStopwatchFill /> {props.days} days
      </p>
      <h5>
        <BsCurrencyDollar /> {props.price}
      </h5>
    </>
  );
}
function Cards() {
  return (
    <>
      <div className="Wrap">
        <h2 id="midtext">
          <span>Required </span>to visit
        </h2>
        <div className="innerCard">
          <div className="bigCard">
            <FillDetails
              img={Places[0].img}
              name={Places[0].name}
              description={Places[0].description}
              days={Places[0].days}
              price={Places[0].price}
            />
            <Like />
          </div>
          {/* <div className="smallCard"> */}
          <div className="smallCard">
            <FillDetails
              img={Places[1].img}
              name={Places[1].name}
              description={Places[1].description}
              days={Places[1].days}
              price={Places[1].price}
            />
            <Like />
          </div>
          <div className="smallCard">
            <FillDetails
              img={Places[2].img}
              name={Places[2].name}
              description={Places[2].description}
              days={Places[2].days}
              price={Places[2].price}
            />
            <Like />
          </div>
          <div className="smallCard">
            <FillDetails
              img={Places[3].img}
              name={Places[3].name}
              description={Places[3].description}
              days={Places[3].days}
              price={Places[3].price}
            />
            <Like />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
export default Cards;
