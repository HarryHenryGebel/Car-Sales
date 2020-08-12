import React from 'react';
import { connect } from 'react-redux';

function Total (props) {
  const {price, additionalPrice} = props;

  return (
    <div className="content">
      <h4>Total Amount: ${price + additionalPrice}</h4>
    </div>
  );
};

function mapStateToProps (state) {
  return {
    price: state.car.price,
    additionalPrice: state.additionalPrice
  };
}
export default connect(mapStateToProps, {})(Total);
