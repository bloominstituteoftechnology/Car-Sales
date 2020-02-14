import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';

const AdditionalFeatures = props => {
  console.log(props);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures[0].map(item => (
            console.log(item),
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

  const mapStateToProps = state => {
    return {
      additionalPrice: state.additionalPrice,
      car: {
        price: state.car.price,
        name: state.car.name,
        image: state.car.image,
        features: state.car.features
      },
      additionalFeatures: [state.additionalFeatures]
    };
  };

export default connect(mapStateToProps, {})(AdditionalFeatures)
