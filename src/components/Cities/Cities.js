import { cities } from "../constants/Constants"
import React from 'react'
import { Button } from "../Button/Button"
import styled from "styled-components";

export const List = styled.div `
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`


export default function Cities() {
  return (
    <List>
         {cities.map((city, id) => (
        
        <Button 
          key={id} 
          onClick={() => {
            console.log(city.id);
        }}>{city.title}</Button>
     ))}
    </List>
  )
};
