import React from 'react';
import { connect } from 'react-redux'; // import to link the AddedFeature component with the store
import { removeFeature } from '../actions/actions'; // imported removeFeature action creator

const AddedFeature = props => {
    return (
        <li>
            {/* Add an onClick to run a function to remove a feature */}
            <button className="button"
                    onClick={()=>
                    {props.removeFeature(props.feature)}}>
                X
            </button>
            {props.feature.name} (+{props.feature.price})
        </li>
    );
};

// mapStateToProps takes state data for features so its properties can be accessed via props in this component
const mapStateToProps = state => {
    return {
        features: state.features // Now the state data for all the feature object's properties can be accessed via props
    }
}

// The connect function links the AddedFeature component with the store for retrieving data it needs from the store
// connect dispatches the removeFeature action action creator to the reducer and allows removeFeature to be accessed via props
export default connect(mapStateToProps, { removeFeature }) (AddedFeature);