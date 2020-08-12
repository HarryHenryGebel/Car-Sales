import React from 'react';
import { connect } from 'react-redux';

import {removeFeature} from "../actions";

function AddedFeature (props) {
  const {feature, removeFeature} = props;

  return (
    <li>
      onClick={() => removeFeature(feature)}
      <button className="button">X</button>
      {feature.name}
    </li>
  );
};

export default connect(null, {removeFeature})(AddedFeature);
