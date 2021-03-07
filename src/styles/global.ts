import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

a{
    text-decoration: none;
  }

body {
  background: #FFF;
  color: #FFF;
  -webkit-font-smoothing: antialiased;
}

body, input, button{
  font-family: 'Abel', serif;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong{
  font-weight: 500
}

button{
  cursor: pointer;
}
`;


export const RelatedGenres = styled.ul`
  flex: .5;
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin-top: 20px;
  width: 80%;
`;

