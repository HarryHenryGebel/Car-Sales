import React from "react";
import { connect } from 'react-redux';

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

function App (props) {
  const {car, additionalFeatures, additionalPrice} = props;

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

function mapStateToProps (state) {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice
  };
}
export default connect(mapStateToProps, {})(App);

//  LocalWords:  mgl AddedFeatures
