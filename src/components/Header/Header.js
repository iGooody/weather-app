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
  /* Create a conic gradient. */
  /* Double percentages to avoid blur (#000 10%, #fff 10%, #fff 20%, ...). */
  background: #CA4246;
  background-color: #CA4246;
  background: conic-gradient(
    #CA4246 16.666%, 
    #E16541 16.666%, 
    #E16541 33.333%, 
    #F18F43 33.333%, 
    #F18F43 50%, 
    #8B9862 50%, 
    #8B9862 66.666%, 
    #476098 66.666%, 
    #476098 83.333%, 
    #A7489B 83.333%);
  
  /* Set thee background size and repeat properties. */
  background-size: 57%;
  background-repeat: repeat;
  
  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  
    text-align: center;
  `;
  