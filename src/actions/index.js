import { types } from '../reducers/carReducer'

export const removeFeature = feature => dispatch => { 
	return dispatch({type: types.REMOVE_FEATURE, payload: feature });
};

export const addFeature = feature => dispatch => { 
	return dispatch({type: types.ADD_FEATURE, payload: feature });
};