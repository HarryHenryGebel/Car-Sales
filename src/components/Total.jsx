import React from 'react';
import { connect } from 'react-redux';

function Total (props) {
  const {features, price} = props,
        additionalPrice = features.reduce((acc, cv) => acc + cv.price, 0);

  return (
    <div className="content">
      <h4>Total Amount: ${price + additionalPrice}</h4>
    </div>
  );
};

function mapStateToProps (state) {
  return {
    price: state.car.price,
    features: state.car.features
  };
}
export default connect(mapStateToProps, {})(Total);
