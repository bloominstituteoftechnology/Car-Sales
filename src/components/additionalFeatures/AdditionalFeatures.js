import React from 'react';
// hook react up with redux
import {connect} from "react-redux"
import AdditionalFeature from './AdditionalFeature';

// action creator
import {addFeature} from "../../actions/action"

const AdditionalFeatures = ({additionalFeatures , addFeature}) => {
  console.log(`this is the function ${addFeature}` )

  const buyItem = item => {
    // dipsatch an action here to add an item
    addFeature(item)
  };
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item}  addFeature={addFeature}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};
const mapStateToProps = store => {
  return {
    additionalFeatures:store.additionalFeatures
  }
}

const mapDispatchToProps = {
  addFeature
}
export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeatures);
