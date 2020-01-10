import React from 'react';
import { connect } from 'react-redux';

import { addFeature, removeFeature, updateTotal } from './actions/index';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const App = (props) => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item);
    props.updateTotal(-item.price)

  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item);
    props.updateTotal(item.price)
  };

  return (

    <div className="boxes">
      <div className="box"> 

        <Header car={props.car} additionalFeatures = {props.additionalPrice} />
        <AddedFeatures car={props.car}  removeFeature = {removeFeature}/>
      </div>
      
      <div className="box">
       
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem= {buyItem}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};


function mapStateToProps (state) {

  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

export default connect (mapStateToProps, { addFeature, removeFeature, updateTotal}) (App); 


// import React from 'react';

// import Header from './components/Header';
// import AddedFeatures from './components/AddedFeatures';
// import AdditionalFeatures from './components/AdditionalFeatures';
// import Total from './components/Total';

// const App = () => {
//   const state = {
//     additionalPrice: 0,
//     car: {
//       price: 26395,
//       name: '2019 Ford Mustang',
//       image:
//         'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
//       features: []
//     },
//     additionalFeatures: [
//       { id: 1, name: 'V-6 engine', price: 1500 },
//       { id: 2, name: 'Racing detail package', price: 1500 },
//       { id: 3, name: 'Premium sound system', price: 500 },
//       { id: 4, name: 'Rear spoiler', price: 250 }
//     ]
//   };

//   const removeFeature = item => {
//     // dispatch an action here to remove an item
//   };

//   const buyItem = item => {
//     // dipsatch an action here to add an item
//   };

//   return (
//     <div className="boxes">
//       <div className="box">
//         <Header car={state.car} />
//         <AddedFeatures car={state.car} />
//       </div>
//       <div className="box">
//         <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
//         <Total car={state.car} additionalPrice={state.additionalPrice} />
//       </div>
//     </div>
//   );
// };

// export default App;
