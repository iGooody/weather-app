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
    justify-content: center;
    background: rgb(238,174,202);
    background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
    padding: 10px;
    color: whitesmoke;
    text-align: center;
  `;
  