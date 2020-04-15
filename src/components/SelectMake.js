import React from "react";

const SelectMake = function({ cars, getModels }) {
  return (
    <div className="selectCar-container">
      <h1 className="title">Select Model</h1>
      <div>
        {cars.Makes &&
          cars.Makes.map(car => (
            <button
              onClick={() => getModels(car.make_display)}
              key={car.make_id}
              className="button is-light"
            >
              {car.make_display}
            </button>
          ))}
      </div>
    </div>
  );
};

export default SelectMake;
