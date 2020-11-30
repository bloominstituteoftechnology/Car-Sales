import React from "react"
import { connect } from "react-redux"
import {addNewFeature} from "../Actions/additionalNewFeaturesAction"

const AdditionalFeature = (props) => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={()=>props.addNewFeature(props.feature)}>Add</button>
      {props.feature.name} ({props.feature.price}) {props.header}
    </li>
  )
}

// const mapStateToStateProps = (state) => {
//   return{
//     additionalFeature:state.additionalFeature
//   }
// }


const mapStateToProps = (state) => {
  return {
    additionalFeature: state.additionalFeatures,
    header: state.header,
  }
}

export default connect(mapStateToProps, {addNewFeature})(AdditionalFeature)
