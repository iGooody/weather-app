import React from 'react'
import { Card, Icon } from '../CityInput'
import { Text } from '../TimeAndLocation/TimeAndLocation'
import styled from 'styled-components'
import { List } from '../Cities' 
import {TbTemperature} from 'react-icons/tb'

export const Image = styled.img`
    size: 120px;
    display: flex ;
    align-items: left;
`;
export const DescriptionText = styled(Text)`
    
    margin-top: 30px;
    padding-bottom: 20px;
    font-size: ${({ theme }) => theme.fontSizes[3]}px;
    font-family: Poppins;
    background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(29,132,253,1) 50%, rgba(252,176,69,1) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const TempText = styled(Text)`
    margin-bottom:0;
    display: flex ;
    flex-direction: row;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes[4]}px;
`

export default function TemperatureAndDetails() {
  return (
    <>
        <Card>
            <DescriptionText>
                Cloudy or whatever
            </DescriptionText>
        </Card>
        <List>
            <Image src={'https://openweathermap.org/img/wn/01d@2x.png'}></Image>
            <TempText>34 °C</TempText>
            <TempText>
                <Icon>
                    <TbTemperature color='white' size={50}/>
                </Icon>
                <TempText>Real felt: 36 °C</TempText>
            </TempText>
            
        </List>
    </>
    
  )
}
