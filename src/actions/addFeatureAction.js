export const ADD_FEATURE = 'ADD_FEATURE'

export function addFeatureAction(item) {
  console.log('Add action: ', item);
  return { type: ADD_FEATURE, payload: item };
}
