import React from 'react';
import { connect } from 'react-redux';
import { buyItem } from '../actions'

const AdditionalFeature = props => {

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.buyItem(item);
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
      className="button is-primary"
      onClick={() => buyItem(props.feature)}
      >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps,{buyItem})(AdditionalFeature);
