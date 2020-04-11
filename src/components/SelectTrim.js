import React from "react";

const SelectTrim = function({ trims }) {
  return (
    <div className="selectCar-container">
      <h1 className="title">Select Model</h1>
      <div>
        {trims.Trims &&
          trims.Trims.map((trim, i) => {
            if (trim.model_trim) {
              return (
                <button
                  onClick={() => console.log("huh")}
                  key={i}
                  className="button is-light"
                >
                  {trim.model_trim}
                </button>
              );
            }
          })}
      </div>
    </div>
  );
};

export default SelectTrim;
