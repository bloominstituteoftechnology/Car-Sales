import  React from "react"
import { connect } from "react-redux"
import { totalup } from "./actions/totalupAction"
import Header from "./components/Header"


class Apps extends React.Component {
        constructor(props){
            super(props)
            this.state ={
                total: 0,
                car: {
                    image: '', name: '', price: 322
                },
                additionalFeatures: {
                    key: 0 , feature: ''
                },
                feature: {
                    name: '', price:222
                }
        
            };
        }

    
    render(){
        return(
        <React.Fragment>
          <div className="box">
            <Header car={this.state.car} />
            {/* <AddedFeatures car={state.car} /> */}
          </div>
          {/* <div className="box">
            <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
            <Total car={state.car} additionalPrice={state.additionalPrice} />
          </div> */
          
          
          }
        </React.Fragment>
        );
    }


};


const mapStateToProps = (state) => {
    return {
        total: state.TR.total
    };
  };
  
  export default connect(mapStateToProps, { totalup })(Apps);
  
