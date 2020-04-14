import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {connect} from 'react-redux';

// list of available features 
const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} addItem={props.addItem} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};



const mapStateToProps = state =>{
    console.log(state)

  return{ 
      additionalFeatures: state.featuresReducer.additionalFeatures

    }


}
export default connect(mapStateToProps, {}) (AdditionalFeatures)
