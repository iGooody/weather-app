import React from 'react'
import './App.css'
import { Button } from './components/Button/Button';
import Cities from './components/Cities/Cities';
import { CityInput } from './components/CityInput/CityInput';
import { cities } from './components/constants/Constants';
import { StyledHeader } from './components/Header';


function App() {

  return (
    <div className="App">
      <StyledHeader>Weather App</StyledHeader>
      <Cities></Cities>
      <CityInput></CityInput>
    </div>
  );
}

export default App;
