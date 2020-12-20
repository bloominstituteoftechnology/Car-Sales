// Action creators:
// function that return an action

export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = id => {
	return { type: ADD_FEATURE, payload: id };
};

export const removeFeature = () => {
	return { type: REMOVE_FEATURE };
};
