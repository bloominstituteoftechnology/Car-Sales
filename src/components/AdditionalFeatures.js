import React from 'react';
import { connect } from 'react-redux';
import AdditionalFeature from './AdditionalFeature';
import { buyCarPart } from '../actions'
import xibit from '../img/xibit.jpg'

const AdditionalFeatures = props => {
  const buyPart = item => {
    props.buyCarPart(item)
  }
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyPart={buyPart} />
          ))}
        </ol>
      ) : (
        <p>Sweet Ride!!
        <img src={xibit} alt="Xibit" />
        </p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    store: state.store,
  };
};

export default connect(
  mapStateToProps,
  { buyCarPart }
)(AdditionalFeatures);
