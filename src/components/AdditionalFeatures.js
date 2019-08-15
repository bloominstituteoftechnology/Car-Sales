import React from 'react';
import {connect} from 'react-redux'
import AdditionalFeature from './AdditionalFeature';
import {addingFeatures} from '../actions'


const AdditionalFeatures = props => {

 

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.store.length ? (
        <ol type="1">
          {props.store.map(item => (
            <AdditionalFeature key={item.id} feature={item} addButton={props.addingFeatures} addPrice={props.addPrice}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    store: state.store,
  }
}

export default connect(
  mapStateToProps, 
  { addingFeatures}
  )(AdditionalFeatures);