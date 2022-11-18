import React from 'react'
import { Button } from '../Button/Button'
import styled from 'styled-components'

export const Card = styled.div`
    width: 100%;
    background: #e7e7fa;
`
export const CardHeader = styled.div`
    padding: 20px;
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    display: flex;
    justify-content: center;
    font-size: 40px;
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
    width: 300px;
    height: 40px;
    text-indent: 20px;
    border-color: white;
    border: none;
    margin-right: 20px;
    background: white;
`

export const CityInput = () => {
  return (
    <Card>
      <CardHeader>
        <CardHeaderInput type='text' placeholder="Search..."/>
      </CardHeader>
    </Card>
  );
}