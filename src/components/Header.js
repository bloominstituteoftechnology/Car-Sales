import React from 'react';
import {connect} from "react-redux";
import {changeCar} from "../actions/index"
import cars from "../data.js"
const Header = props => {
  return (
    <div>
    <strong> SELECT CAR BELOW </strong> 
    <span id="carsDisp">
    {cars.map( car => 
      <p id = "carNames" onMouseEnter =
       {() => props.changeCar(cars.indexOf( cars.filter( c => c.car.name == car.car.name)[0] ) )}>  <br/> <img src={car.car.image} alt={car.name} height='50'/></p> 
        

      )}
    </span>
<center>
    <strong>
    {props.car.name} 
    </strong>      
      
      <figure className="image is-128x128">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      </center>
      <h2>{props.car.name}</h2>
      <p>MSRP: ${props.car.price}</p>
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
export default connect(mapStateToProps, {changeCar})(Header)