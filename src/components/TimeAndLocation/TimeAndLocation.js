import React from 'react'
import styled from 'styled-components'

export  const TimeCard = styled.div `
    display: flex ;
    justify-content: center;
    margin-top: 24px;
    margin-bottom: 24px;
`
export  const LocationCard = styled.div `
    display: flex ;
    justify-content: center;
    margin-top: 24px;
    margin-bottom: 24px;
`
export const Text = styled.p `
 justify-content: center;
 text-align: center;
 color: white;
 font: extralight;
 font-size: ${({ theme }) => theme.fontSizes[3]}px;
 line-height: 28px;
 margin-bottom: 30px;
`
export const TimeText = styled(Text)`
    font-size: ${({ theme }) => theme.fontSizes[2]}px;
`;
    


export default function TimeAndLocation() {
  return (
    <>
        <TimeCard>
            <TimeText>
                Friday, 18 November 2022 | Local time: 12:46 PM
            </TimeText>
        </TimeCard>
        <LocationCard>
            <Text>
                Berlin
            </Text>
        </LocationCard>
    </>
  )
};
