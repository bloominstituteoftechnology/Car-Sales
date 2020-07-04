import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {connect} from 'react-redux'
import {removeItem,addItem} from './actions'


const App = (props) => {
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  // const dispatch=useDispatch();
  const removeFeatures = (item) => {
    // dispatch an action here to remove an item
    props.dispatch({type:"REMOVE_ITEM" , payload:(item)})
  };

  const buyItems = item => {
    // dipsatch an action here to add an item
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header  />
        <AddedFeatures removeItem={removeFeatures}/>
        <Total />
      </div>
      <div className="box">
         <AdditionalFeatures   />
        
      </div>
    </div>
  );
};

// export default App
export default connect(null, null)(App)


