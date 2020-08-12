import React from 'react';
import { connect } from 'react-redux';

function AddedFeature (props) {
  const {name} = props;

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {name}
    </li>
  );
};

function mapStateToProps (state) {
  return {
    name: state.car.features.name
  };
}
export default connect(mapStateToProps, {})(AddedFeature);
