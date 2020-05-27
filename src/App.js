import React from 'react';
import axios from 'axios';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {

  const cars = useSelector(state => state);
  const dispatch = useDispatch();

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

  React.useEffect(() => {
    axios.get("https://marketcheck-prod.apigee.net/v2/search/car/active?api_key=zbEFHw60c4Xa6NvJ7XPYyYhrKor4j8EF&rows=10&start=0&facet_sort=count&country=US&state=Fl&city=Orlando&photo_links=true")
      .then(response => {
        //console.log(response.data);
        response.data.listings.forEach(listing => {
          dispatch({
            type: "ADD_CARS_DATA",
            payload: {
              additionalPrice: 0,
              car: {
                price: listing.price ? listing.price : "Price Available Upon Request",
                name: listing.heading,
                image: listing.media.photo_links[0],
                miles: listing.miles ? listing.miles : "Unavailable",
                type: listing.build.body_type,
                features: []
              },
              additionalFeatures: []
            }
          });
        });
        
      })
      .catch(err => console.log(err.message))
  }, [dispatch]);

  return (
    <div className="boxes">
      <div className="box">
        <Header car={cars} />
        <AddedFeatures car={cars} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={cars.additionalFeatures} />
        <Total car={cars} additionalPrice={cars.additionalPrice} />
      </div>
    </div>
  );
};

export default App;
