import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from "react-redux";
import {add} from '../actions/actions'

const AdditionalFeatures = props => {

  const buyItem = item => {
    props.add(item)
  };

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature add={buyItem} key={item.id} feature={item} />
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
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(  mapStateToProps, {add})(AdditionalFeatures);

