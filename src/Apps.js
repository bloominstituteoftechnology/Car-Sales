import  React from "react"
import { connect } from "react-redux"
import { totalup } from "./actions/totalupAction"



class Apps extends React.Component {
    state = {
        total: 0,
        car: {
            image: '', name: '', price: 0
        },
        additionalFeatures: {
            key: 0 , feature: ''
        }

    };

    
    render(){
        return(
        <React.Fragment>
          <div className="box">
            <Header car={state.car} />
            <AddedFeatures car={state.car} />
          </div>
          <div className="box">
            <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
            <Total car={state.car} additionalPrice={state.additionalPrice} />
          </div>
        </React.Fragment>
        );
    }


};


const mapStateToProps = (state) => {
    return {
      members: state.membersReducer.members
    };
  };
  
  export default connect(mapStateToProps, { addNewMember })(totalup);
  
