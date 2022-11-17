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
    padding: 10px;
    background: gainsboro;
    color: green;
    text-align: center;
  `;
  