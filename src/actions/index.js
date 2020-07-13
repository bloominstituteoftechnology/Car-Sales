	export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CHANGE_CAR= "CHANGE_CAR"

export function removeItem(item) {
  return {
    type: REMOVE_ITEM,
    payload: item
  };
  
}

export function addItem(item) {
  return {
    type: ADD_ITEM,
    payload: item
  };
}
//  new 
export function changeCar(index){ 
	return{ 
		type: CHANGE_CAR, 
		payload: index

	};
}