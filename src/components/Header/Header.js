import styled from "styled-components";
export const Header = ({ className, title }) => {
    title = 'Weather app';
    return (
      <header className={className}>
        <h1>{title}</h1>
      </header>
    );
  };
  
  export const StyledHeader = styled(Header)`
    font-size: ${({ theme }) => theme.fontSizes[3]}px;
    justify-content: center;
    padding: 10px;
    color: whitesmoke;
    text-align: center;
  `;
  