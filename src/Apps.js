import  React from "react"
import { connect } from "react-redux"
import { totalup } from "./actions/totalupAction"
import Header from "./components/Header"
import AddedFeatures from "./components/AddedFeatures"
import Total from "./components/Total"
import AdditionalFeatures from "./components/AdditionalFeatures"
function Apps(props){
        // constructor(props){
        //     super(props)
        //     this.state ={
                
        //         total: 0,
        //         additionalPrice: 0,
        //         car: {
        //         price: 26395,
        //         name: '2019 Ford Mustang',
        //         image:
        //             'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        //         features: []
        //         },
        //         additionalFeatures: [
        //         { id: 1, name: 'V-6 engine', price: 1500 },
        //         { id: 2, name: 'Racing detail package', price: 1500 },
        //         { id: 3, name: 'Premium sound system', price: 500 },
        //         { id: 4, name: 'Rear spoiler', price: 250 }
        //         ]
               
        
        //     };
        // }

    

        return(
        <React.Fragment>
          <div className="box">
            <Header car={props.car} />
            {/* { <AddedFeatures car={props.car} /> } */}
          </div>
          {/* {<div className="box">
            <AdditionalFeatures additionalFeatures={this.state.additionalFeatures} />
            <Total car={this.state.car} additionalPrice={this.state.additionalPrice} />
          </div>  */}
          
          
          
        </React.Fragment>
        );
    


};


const mapStateToProps = (state) => {
    return {
        total: state.TR.total
    };
  };
  
  export default connect(mapStateToProps, { totalup })(Apps);
  
