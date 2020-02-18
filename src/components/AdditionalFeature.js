import React, {useState} from 'react';
import { connect } from 'react-redux';
import AddFeature from './AddedFeature';

// import { addFeature } from '../actions';

const AdditionalFeature = props => {
  // console.log('!', props);
  // const [newAddedFeature, setNewAddedFeature] = useState();

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button"
        onClick={() => props.addFeature(props.feature)}
      >
        Add
        </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;



// const mapStatetoProps = state => {
//   // console.log(state.carReducer.car);
//   return {
//     features: state.carReducer.car.features,
    
//   }

// }
// export default connect(mapStatetoProps, { addFeature })(AdditionalFeature);

