import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {addFeature} from '../components/actions/featureAction'
import {connect} from 'react-redux'

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} addFeature={addFeature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures
// const mapStateToProps = state => {
//   return {
//     additionalFeatures: state.additionalFeatures
//   }
// }

// export default connect(  mapStateToProps, {addFeature})(AdditionalFeatures);
