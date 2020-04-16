export const removeFeature = item => {
	//console.log("RemoveFeature ~ ", item);

	return{
		type: 'REMOVE_ITEM',
		payload: item
	}
}