import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { addFeature } from "../actions/index";
import { connect } from "react-redux";

const AdditionalFeatures = props => {
  
  const purchaseFeature = (featuredItem) =>{ // this function incorporates the action addFeature from ../actions/index
    props.addFeature(featuredItem)
  }
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature addFeature={purchaseFeature} key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const  mapStateToProps = (state)=> {//selecting additionalFeatures from store 
  return {
    additionalFeatures:state.additionalFeatures
  }

}

export default connect (mapStateToProps,{addFeature})(AdditionalFeatures);
