import { connect } from "react-redux";
import React, { useEffect } from 'react';
import AddedFeature from './AddedFeature';

const AddedFeatures = props => {

  useEffect(() => {
    console.log("re render PLEASE")
  }, [props.car]);

  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => {
            console.log("Looping over empty list? ", item); if (item) {
              return (
                <AddedFeature key={item.id} feature={item} />
              )
            } else return (<></>)
          })}
        </ol>
      ) : (
          <p>You can purchase items from the store.</p>
        )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car
  };
};

export default connect(
  mapStateToProps  // same as { updateTitle: updateTitle }
)(AddedFeatures);
