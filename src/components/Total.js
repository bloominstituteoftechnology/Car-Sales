import React from 'react';
import { connect } from 'react-redux'; // import to link the Total component with the store

const Total = props => {
    return (
        <div className="content">
            <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
        </div>
    );
};

// mapStateToProps takes state data price and additionalPrice and returns data that can be used as props in this component
const mapStateToProps = state => {
    return {
        car: state.car, // Now the state data for all car properties can be accessed via props in this component
        additionalPrice: state.additionalPrice // Now the state data for additionalPrice can be accessed via props in this component
    }
}

//  The connect function links the Total component with the store for retrieving data it needs from the store
export default connect(mapStateToProps, {})(Total);
