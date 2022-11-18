import { cities } from "../constants/Constants"
import React from 'react'
import { Button } from "../Button/Button"
import styled from "styled-components";
const List = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);

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
