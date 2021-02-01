//  ?? Action Suite:

// ?? 1. Action type(s)
export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

// ?? 2. Action Creator (1)
export const addFeature = (featureToAdd) => {
	console.log("FEATURE TO ADD FROM ACTION CREATOR =====> ", featureToAdd);
	return {
		// ?? 3. Action (1)
		type: ADD_FEATURE,
		payload: featureToAdd,
	};
};

// ?? 2. Action Creator (2)
export const removeFeature = (featureToRemove) => {
	console.log("FEATURE TO ADD FROM ACTION CREATOR =====> ", featureToRemove);
	return {
		// ?? 3. Action (2)
		type: REMOVE_FEATURE,
		payload: featureToRemove,
	};
};
