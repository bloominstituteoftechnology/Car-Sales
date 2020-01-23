/// STEP III - build action creator functions to create and dispatch actions (dispatching happens under the hood 😫)

// 1 - actions objects- have a type property to tell the reducer how to update state. Sometimes have a payload property to pass data to the reducer

// 2 - action creators - functions that return action objects

// 3 action types - a variable to save us from horrible misspelling errors that are really hard to find and debug

// action creator
export const addFeat = feature => {
	// action object
	return { type: 'ADD_FEAT', payload: feature };
};

// STEP IIIa - import the action creator into your component
// STEP IIIb - pass the AC into the object in the connect function call
export const removeFeat = feature => {
	console.log('in action');
	return { type: 'REMOVE_FEAT', payload: feature };
};
