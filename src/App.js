import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { addFeatures, removeFeatures }   from "./actions/allActions.js";


const App = ({ car, additionalFeatures, additionalPrice,addFeatures, removeFeatures }) => {
  

  

  return (
    <>
    <section className="section">
    <div className="container ">
      
      <h1 className="center">
        My Car Sales Redux with Bulma
      </h1>
      
    </div>
    
  </section>

  <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="notification is-link ">
        <Header car={car} />
        <AddedFeatures car={car} removeFeatures={removeFeatures} />
        </div>
        </div>
        <div className="column">
        <div className="notification is-primary ">
        <AdditionalFeatures
          additionalFeatures={additionalFeatures} addFeatures={addFeatures} />
        </div>
        </div>
        </div>
        </div>
        </section>
          <div className=" notification is-warning">
        <Total car={car} additionalPrice={additionalPrice} />
          </div>
      
      
    

    {/* <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} removeFeatures={removeFeatures} />
      </div>
      <div className="box">
        <AdditionalFeatures
          additionalFeatures={additionalFeatures} addFeatures={addFeatures}
          
        />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div> */}
    </>
  );
};
  

function mapStateToProps(state) {
  return {
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures,
    car: state.car
  };
}
export default connect(mapStateToProps, {addFeatures,removeFeatures})(App);

  
