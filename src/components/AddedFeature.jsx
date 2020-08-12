import React from 'react';
import { connect } from 'react-redux';

import {removeFeature} from "../actions";

function AddedFeature (props) {
  const {feature, removeFeature} = props;

  return (
    <li>
      <button className="button" onClick={() => removeFeature(feature)}>
        X
      </button>
      {feature.name}
    </li>
  );
};

export default connect(null, {removeFeature})(AddedFeature);
