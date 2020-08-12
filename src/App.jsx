import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

export default function App (props) {
  const {car, additionalPrice} = props;

  return (
    <div className="boxes">
      <div className="box">
        <Header/>
        <AddedFeatures/>
      </div>
      <div className="box">
        <AdditionalFeatures/>
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};

//  LocalWords:  mgl AddedFeatures
