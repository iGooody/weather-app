import { cities } from "../constants/Constants"
import React from 'react'
import { Button } from "../Button/Button"
import styled from "styled-components";
const List = styled.div `
display: flex;
flex-direction: row;
justify-content: center;
background-color: bisque;

`


export default function Cities() {
  return (
    <List>
         {cities.map((city, id) => (
        
        <Button key={id}>{city.title}</Button>
     ))}
    </List>
  )
};
