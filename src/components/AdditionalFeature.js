import React from 'react';
import { addFeature } from '../actions/rootActions';
import { connect } from 'react-redux'


const AdditionalFeature = props => {
  return (
    <div>
      <h2> Additional Features </h2>
      {props.addFeature.length ? (
        <ol type="1">
          {props.addFeature.map(feature => (
            <AddedFeature key={feature.id} feature={feature} />
          ))}
        </ol> 
       ) : (
          <p>Nice Car!</p>
       )}
    </div>
  )
}

function mapStateToProps(state) {
  AdditionalFeature: state.addFeature
}

export default connect(null, {addFeature})(AdditionalFeature);
