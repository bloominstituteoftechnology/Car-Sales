import React from 'react';
import { Provider, connect } from "react-redux";
import { buyItem, removeItem } from "../actions/index";

const Header = props => {

let featurePrices = 0;
let featurePricesTotal=0;
const sumPrices =(totalPrice, price) =>{
  return totalPrice+price;
}

  if (props.car.features.length){
    featurePrices = props.car.features.map(feature=>feature.price);
    console.log(featurePrices);
    featurePricesTotal=featurePrices.reduce(sumPrices, 0);
  }
  else{
    featurePrices=0
  }
console.log("Feature Price: ", featurePricesTotal)
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(mapStateToProps, { buyItem, removeItem })(Header);
