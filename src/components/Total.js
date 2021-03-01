import React from 'react';
import {useSelector} from 'react-redux';

const Total = () => {
  const {car: {price}, additionalPrice} = useSelector(state => state);

  return (
    <div className="content">
      <h4>Total Amount: ${price + additionalPrice}</h4>
    </div>
  );
};

export default Total;










// import React from 'react';

// const Total = props => {
//   return (
//     <div className="content">
//       <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
//     </div>
//   );
// };

// export default Total;
