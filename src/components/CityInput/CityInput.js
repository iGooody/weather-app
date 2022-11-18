import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {MdPlace} from 'react-icons/md'
import styled from 'styled-components'

export const Card = styled.div`
    width: 100%;
   
`
export const CardHeader = styled.div`
    padding: 30px;
    display: flex;
    justify-content: center;
    font-size: ${({ theme }) => theme.fontSizes[2]}px;;
`
export const CardBody = styled.div`
    padding: 20px;
`
export const CardBlock = styled.div`
    display: flex;
    margin: 10px 0;
    flex-direction: column;
`
export const CardElement = styled.p`
    margin: 0;
`
export const CardHeaderInput = styled.input`
    ::placeholder {
    color: gray;
    }
    width: 400px;
    height: 50px;
    text-indent: 20px;
    border-color: white;
    border: none;
    margin-right: 20px;
    background: white;
    border-radius: 50px;
`

export const Icon = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 20px;
 `

export const CityInput = () => {
  return (
    <Card>
      <CardHeader>
        <CardHeaderInput type='text' placeholder="Search..." >
        </CardHeaderInput>
        <Icon >
          <BsSearch color='white' size={40}   />
        </Icon>
        <Icon>
          <MdPlace color='white' size={50}/>
        </Icon> 
      </CardHeader>
    </Card>
  );
}