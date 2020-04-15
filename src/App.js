import React, { useEffect, useState } from "react";
import { Route, useHistory } from "react-router-dom";
import ModCar from "./pages/ModCar";
import SelectCar from "./pages/SelectCar";
import axios from "axios";

const App = function() {
  let history = useHistory();
  const [cars, setCars] = useState([]);
  const [models, setModels] = useState([]);
  const [trims, setTrims] = useState([]);

  const getCars = () => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://www.carqueryapi.com/api/0.3/?callback=&cmd=getMakes&sold_in_us=1"
      )
      .then(res => {
        const resData = JSON.parse(res.data.slice(1, res.data.length - 2));
        setCars(resData);
      })
      .catch(err => console.log(err));
  };

  useEffect(getCars, []);

  const marketShareAPI = () => {
    axios.get("http://api.marketcheck.com/v2/stats/car?api_key=5QDQwp7v393tuHQ4UmHh3pXPXizNstUB&ymm=2015|ford|f-150", { headers: { "Content-Type": "application/json"}})
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
  
  const getModels = make => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://www.carqueryapi.com/api/0.3/?callback=&cmd=getModels&make=${make}&sold_in_us=1`
      )
      .then(res => {
        const resData = JSON.parse(res.data.slice(1, res.data.length - 2));
        console.log(resData)
        setModels(resData);
        history.push(`/selectCar/model`);
      })
      .catch(err => console.log(err));
  };

  const getTrims = (make, model) => {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://www.carqueryapi.com/api/0.3/?callback=&cmd=getTrims&make=${make}&model=${model}&sold_in_us=1`
      )
      .then(res => {
        const resData = JSON.parse(res.data.slice(1, res.data.length - 2));
        console.log(resData);
        setTrims(resData);
        history.push(`/selectCar/trim`);
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Route
        path="/selectCar"
        component={props => (
          <SelectCar
            {...props}
            cars={cars}
            models={models}
            trims={trims}
            getModels={getModels}
            getTrims={getTrims}
          />
        )}
      />
      <Route path="/modCar/:carId" component={ModCar} />
    </div>
  );
};

export default App;
