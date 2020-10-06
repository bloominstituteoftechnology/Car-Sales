import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addFeature } from '../actions/actions'

const AdditionalFeature = props => {
  const features = useSelector(state => state.additionalFeatures)
  const dispatch = useDispatch();

  return (
    <>
      {features.map(feature => {
        return (
          <li>
            <button
              className="button"
              id={feature.id}
              onClick={e => dispatch(addFeature(e.target.id))}
            >Add</button>
            {feature.name} (+{feature.price})
          </li>
        );
      })}
    </>
  );
};

export default AdditionalFeature;
