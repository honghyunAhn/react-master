import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Router from "./Router";
import { useState } from "react";
import { darkTheme, lightTheme } from "./theme";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-weight: 300;
  font-family: 'Source Sans Pro', sans-serif;
  background-color:${(props) => props.theme.bgColor};
  color:${(props) => props.theme.textColor};
  line-height: 1.2;
}
a {
  text-decoration:none;
  color:inherit;
}
`;

const ButtonStyle = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const StyledBsFillMoonFill = styled(BsFillMoonFill)`
  width: 30px;
  height: 30px;
`;

const StyledBsFillSunFill = styled(BsFillSunFill)`
  width: 30px;
  height: 30px;
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((props) => !props);
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <GlobalStyle />
        <ButtonStyle>
          <p onClick={() => toggleDarkMode()}>
            {darkMode ? (
              <StyledBsFillSunFill color="white" />
            ) : (
              <StyledBsFillMoonFill color="black" />
            )}
          </p>
        </ButtonStyle>
        <Router darkMode={darkMode} />
      </ThemeProvider>
    </>
  );
}

export default App;
