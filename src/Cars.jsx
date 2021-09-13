// src/Cars.jsx
import PropTypes from "prop-types";
import React from "react";
import carBlue from "./images/carBlue.jpeg";
import carRed from "./images/carRed.jpeg";
import carYellow from "./images/carYellow.jpeg";
import MyProvider from "./MyContext";

class Cars extends React.Component {
  render() {
    const { cars, handleCar } = this.context;
    return (
      <div>
        <div>
          <img
            className={cars.red ? "car-right" : "car-left"}
            src={carRed}
            alt="red car"
          />
          <button onClick={() => handleCar("red", !cars.red)} type="button">
            Move
          </button>
        </div>
        <div>
          <img
            className={cars.blue ? "car-right" : "car-left"}
            src={carBlue}
            alt="blue car"
          />
          <button onClick={() => handleCar("blue", !cars.blue)} type="button">
            Move
          </button>
        </div>
        <div>
          <img
            className={cars.yellow ? "car-right" : "car-left"}
            src={carYellow}
            alt="yellow car"
          />
          <button
            onClick={() => handleCar("yellow", !cars.yellow)}
            type="button"
          >
            Move
          </button>
        </div>
      </div>
    );
  }
}

Cars.propTypes = {
  moveCar: PropTypes.func.isRequired,
  blueCar: PropTypes.bool.isRequired,
  redCar: PropTypes.bool.isRequired,
  yellowCar: PropTypes.bool.isRequired,
};

Cars.contextType = MyProvider;

export default Cars;
