import React from 'react'
import Cities from './components/Cities/Cities';
import { CityInput } from './components/CityInput/CityInput';
import { StyledHeader } from './components/Header';
import TimeAndLocation from './components/TimeAndLocation/TimeAndLocation';
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './theme'
import TemperatureAndDetails from './components/TemperatureAndDetails/TemperatureAndDetails';


function App() {

  return (
    <ThemeProvider theme={lightTheme}>
      <StyledHeader>Weather App</StyledHeader>
      <Cities></Cities>
      <CityInput></CityInput>
      <TimeAndLocation></TimeAndLocation>
      <TemperatureAndDetails/>
    </ThemeProvider >
  );
}

export default App;
