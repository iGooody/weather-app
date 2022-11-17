import React from 'react'
import { Button } from '../Button/Button'
import styled from 'styled-components'
import searchicon from '../../assets/icons/searchicon.png'
export const UISearch = styled.div ` 
background-image: url(${searchicon});
size: 40;
font-weight: bold;
color: black;
text-decoration: none;
&:hover,
&:focus {
  color: palevioletred;
}
&:active {
  color: red;
}
`

export const CityInput = () => {
  return (
    <div>
      <input type="text" placeholder="Enter the city"/>
        <Button>
            Find
        </Button>
        <UISearch/>
    </div>
  );
}