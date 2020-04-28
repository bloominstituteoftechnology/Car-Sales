export const addFeature = item => {
	return {
		type:'ADD_ITEM',
		payload: item
	}
} 

export const removeFeature = item => {
	return{
		type: 'REMOVE_ITEM',
		payload: item
	}
} 