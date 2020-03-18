import React from 'react';
import { connect } from 'react-redux';
//Components
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
//Actions
import { addFeature } from './action/AddFeature';
import { removeFeature } from './action/RemoveFeature';

const App = props => {
    //These props contain the state, and actions for reducer, passed in using connect
    //console.log("App.js ~ ", props);

    return (
        <div className="boxes">
            <div className="box">
                <Header car={props.car} />
                {/* AddedFeatures: the state of the car with features, only need to be able to remove if added */}
                <AddedFeatures car={props.car} removeFeature={props.removeFeature} />
            </div>
            <div className="box">
                {/* AdditionalFeatures: The options you have to add to the car, only need to be able to add these */}
                <AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeature={props.addFeature} />
                {/* Total: The state of the car with or without the features */}
                <Total car={props.car} additionalPrice={props.additionalPrice} />
            </div>
        </div>
    );
};

// Convert state to props, and connect with actions to be used inside App.js
const stateToProps = state => {
    return {
        additionalPrice: state.additionalPrice,
        car: state.car,
        additionalFeatures: state.additionalFeatures
    }
}

// Export actions(action folder) and props(state) as one props unit inside App.js
export default connect (
    stateToProps,
    { addFeature, removeFeature }
)(App);