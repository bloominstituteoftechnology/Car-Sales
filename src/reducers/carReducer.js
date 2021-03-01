import {ActionTypes} from '../actions';

const initialCar = {
  price: 26395,
  name: '2019 Ford Mustang',
  image:
    'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  features: []
};
export const carReducer = (car = initialCar, action) => {
  switch(action.type){
    case ActionTypes.ADD_FEATURE: {
      return {
        ...car, 
        features: [...car.features, action.payload]
      };
    }
    case ActionTypes.REMOVE_FEATURE: {
      return {
        ...car,
        features: car.features.filter(feature => feature.id !== action.payload.id)
      }
    }
    default: {
      return car;
    }
  }
}