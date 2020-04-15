import React from "react";

const SelectModel = function({ models, getTrims }) {
  return (
    <div className="selectCar-container">
      <h1 className="title">Select {models.Models && models.Models[0].model_make_id} Model</h1>
      <div>
        {models.Models &&
          models.Models.map((model, i) => (
            <button
              onClick={() => getTrims(model.model_make_id, model.model_name)}
              key={i}
              className="button is-light"
            >
              {model.model_name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default SelectModel;
