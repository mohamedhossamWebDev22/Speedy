import React from "react";

const Plan = (props) => {
  return (
    <>
      <div className="plan">
        <div className="glassBox">
          <h1>{props.title}</h1>
          <h3>${props.price}/month</h3>

          <hr />

          <ul>
            <li>{props.quote} megaByte</li>
            <li>{props.speed} mb/s</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Plan;
