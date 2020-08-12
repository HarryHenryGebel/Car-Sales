import React from 'react';
import { connect } from 'react-redux';

function Header (props) {
  const {image, name, price} = props;

  return (
    <>
      <figure className="image is-128x128">
        <img src={image} alt={name} />
      </figure>
      <h2>{name}</h2>
      <p>Amount: ${price}</p>
    </>
  );
};

function mapStateToProps (state) {
  return {
    image: state.car.image,
    name: state.car.name,
    price: state.car.price
  };
}

export default connect(mapStateToProps, {})(Header);
