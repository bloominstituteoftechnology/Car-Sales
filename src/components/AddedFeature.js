import React from 'react';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={(e) => props.removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;


// import { connect } from 'react-redux';

// function mapStateToProps(state) {
//   return {
//     enabled: state.add.remove
//   }
// }

// const mapDispatchToProps = {
//   remove: removeFeatures
// }
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )()