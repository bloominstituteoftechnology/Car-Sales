import AdditionalFeatures from '../components/AdditionalFeatures';

export const addFeature = feature => {
    return { type: 'ADD_FEATURE', payload: feature }
}