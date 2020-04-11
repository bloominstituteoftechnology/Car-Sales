import React from "react";
import { Route } from "react-router-dom";
import SelectMake from "../components/SelectMake";
import SelectModel from "../components/SelectModel";
import SelectTrim from "../components/SelectTrim";

const SelectCar = function({ cars, getModels, models, getTrims, trims }) {
    return (
        <div>
            <Route path="/selectCar/make" component={() => <SelectMake cars={cars} getModels={getModels}/>} />
            <Route path="/selectCar/model" component={() => <SelectModel models={models} getTrims={getTrims} />} />
            <Route path="/selectCar/trim" component={() => <SelectTrim trims={trims} />} />
        </div>
    )
}

export default SelectCar;
