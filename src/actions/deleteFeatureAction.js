export const DELETE_FEATURE = 'DELETE_FEATURE'

export function deleteFeatureAction(item) {
  console.log('Delete action: ', item)
  return { type: DELETE_FEATURE, payload: item };
};
