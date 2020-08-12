import React from "react";
import { connect } from 'react-redux';

import {addFeature} from "../actions";

function AdditionalFeature (props) {
  const {feature, addFeature} = props,
        {name, price} = feature;
  console.log(props, feature);

  return (
    <li>
      <button className="button"
              onClick={() => addFeature(feature)}>
        Add
      </button>
      {name} (+{price})
    </li>
  );
};

export default connect(null, {addFeature})(AdditionalFeature);
