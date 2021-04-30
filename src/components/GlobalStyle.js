import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
//css reset
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1500px){
    font-size: 95%;
  }
  @media (max-width: 1300px){
    font-size: 90%;
  }
  @media (max-width: 800px){
    font-size: 80%;
  }

  @media (max-width: 500px){
    font-size: 65%;
  }
}
body{
  background: #0C090D;
  font-family: 'Montserrat', sans-serif;
  overflow-x: hidden;
  color: #fefefe;
}
button{
  font-weight: bold;
  cursor: pointer;
  font-size: 1.1rem;
  padding: 1rem 2rem;
  border: 3px solid #f15946;
  background: transparent;
  color: white;
  transition: all 0.5s ease;
  font-family: 'DotGothic16', sans-serif;
  &:hover{
    background-color: #f15946;
    color: white
  }
  @media (max-width: 1024px) {
    margin-bottom: 1rem;
  }
}
h2{
  font-weight: lighter;
  font-size: 4rem;
}
h3{
  color: white;
}
h4{
  font-weight: bold;
  font-size: 2rem;
}
a{
  font-size: 1.1rem;
}
span{
  font-weight: bold;
  color: #f15946;
}
p{
  padding: 3rem 0rem;
  color: #ccc;
  font-size: 1.4rem;
  line-height: 150%;
}

`;
export default GlobalStyle;
