// Action creators:
// function that return an action

export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = () => {
	return { type: ADD_FEATURE };
};

export const removeFeature = () => {
	return { type: REMOVE_FEATURE };
};
