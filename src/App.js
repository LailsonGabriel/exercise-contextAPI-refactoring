import React from 'react';
import './App.css';
import Cars from './Cars';
import MyProvider from './MyContext';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      red: false,
      blue: false,
      yellow: false,
    }

    this.handleCarPosition = this.handleCarPosition.bind(this);
  }

  handleCarPosition(car, side) {
    this.setState({ [car]: side })
  }

  render() {
    const utilities = { 
      cars: { ...this.state },
      handleCar: this.handleCarPosition,
    }
    return (
      <MyProvider.Provider value={ utilities }>
          <Cars />
      </MyProvider.Provider>
    );
  }
}

export default App;
