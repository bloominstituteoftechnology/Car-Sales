export const TOGGLE_FEATURE = 'TOGGLE_FEATURE'

export const toggleFeature = featureName => {
  return {type: TOGGLE_FEATURE, text: featureName}
}