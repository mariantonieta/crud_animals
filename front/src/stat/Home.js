import React from "react";
import one from "../img/two.jpg";

export const Home = () => {
  return (
    <div className="row">
      <div className="col-3">
        <h2>
          A dog is the only thing on earth that loves you more than he loves
          himself.
        </h2>
      </div>
      <div className="col-4">
        <img src={one} alt="one" />
      </div>
    </div>
  );
};
