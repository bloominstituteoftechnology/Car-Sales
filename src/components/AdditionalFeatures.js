import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { addNewFeature } from "../actions/actions";
import { connect } from 'react-redux';


const AdditionalFeatures = props => {


  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature add={props.addNewFeature} key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return{
    additionalFeatures: state.additionalFeatures
  }
};

export default connect(mapStateToProps, {addNewFeature})(AdditionalFeatures);
