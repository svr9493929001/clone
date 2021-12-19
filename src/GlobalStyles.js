import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;1,400;1,700&family=Roboto:wght@400;700&display=swap');
body{
  background: #2d2d2d;
  color: #fff;
  font-family: Roboto, sans-serif;
}
p{
  margin: 10px 0;
}
blockquote{
    background-color: rgba(0, 0, 0, 0.1);
    padding: 15px;
    border-radius: 4px;
}
`;
