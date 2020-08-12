import React from 'react';
import { connect } from 'react-redux';

import AdditionalFeature from './AdditionalFeature';

function AdditionalFeatures (props) {
  const {numberOfFeatures, additionalFeatures} = props;

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {numberOfFeatures ? (
        <ol type="1">
          {additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

function mapStateToProps (state) {
  return {
    additionalFeatures: state.additionalFeatures,
    numberOfFeatures: state.additionalFeatures.length
  };
}
export default connect(mapStateToProps, {})(AdditionalFeatures);

//  LocalWords:  AdditionalFeature
