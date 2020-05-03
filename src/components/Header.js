import React from 'react';
import {connect} from "react-redux"; 

const Header = props => {
  return (
    <div>
    <strong>
    {props.car.name} 
    </strong>
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <p>Amount: ${props.car.price}</p>
    </div>
  );
};

const mapStateToProps = state => {
	return{
		car:{
		image: state.featuresReducer.car.image, 
		name: state.featuresReducer.car.name,
		price: state.featuresReducer.car.price
		}
	}
			

	

}

// export default Header;
export default connect(mapStateToProps, {})(Header)