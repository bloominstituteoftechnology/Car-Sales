import React from 'react';
import { connect } from 'react-redux'; // import to link the AdditionalFeature component with the store
import { buyItem } from "../actions/actions"; // imported buyItem action creator

const AdditionalFeature = props => {
    return (
        <li>
            {/* Add an onClick that will let you add a feature to your car */}
            <button
                onClick={()=> {props.buyItem(props.feature)}}
                className="button"
            >
                Add
            </button>
            {props.feature.name} (+{props.feature.price})
        </li>
    );
};

// mapStateToProps takes state data for price and features and returns data that can be used as props in this component
const mapStateToProps = state => {
    return {
        features: state.features // Now the state data for all the feature object's properties can be accessed via props
    }
}

// The connect function links the AdditionalFeature component with the store for retrieving data it needs from the store
// connect dispatches the buyItem action creator to the reducer and allows buyItem to be accessed via props
export default connect(mapStateToProps, { buyItem })(AdditionalFeature);
