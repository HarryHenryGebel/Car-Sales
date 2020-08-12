import React from 'react';
import { connect } from 'react-redux';

import AddedFeature from './AddedFeature';

function AddedFeatures (props) {
  const {features} = props;

  return (
    <div className="content">
      <h6>Added features:</h6>
      {features.length ? (
        <ol type="1">
          {features.map(item => (
            <AddedFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

function mapStateToProps (state) {
  return {
    features: state.car.features
  };
}
export default connect(mapStateToProps, {})(AddedFeatures);
