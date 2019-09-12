import React from 'react';



const AddedFeature = props => {
  console.log('props in AddedFeature: ', props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeItem(props.feature, props.car)} className="button">X</button>
      {props.feature.name}
    </li>
  );
};
// const mapStateToProps = state => {
//   return {
//     features: state.car.features
//   }
// }

// export default connect(mapStateToProps, {})(AddedFeature);
export default AddedFeature;
