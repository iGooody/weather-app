import styled from 'styled-components'

export const Button = styled.button`
  outline: none; 
  border: 0;
  background: transparent;
  margin: 10px;
  height: 52px;
  width: 150px;
  border: 0;
  border-radius: 40px;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes[3]}px;;
  color: whitesmoke;
`