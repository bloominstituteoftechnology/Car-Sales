import { ADD_FEATURES } from '../actions';

export const initialState = {
  features: []
}

export const featuresReducer = (state = initialState, action) => {
  console.log('reducers: index: ', state, action);
  switch (action.type) {
    case ADD_FEATURES:
      return {
        ...state, 
        features: action.payload
      }
  }
}