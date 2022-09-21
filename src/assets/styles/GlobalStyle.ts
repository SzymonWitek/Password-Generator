import { createGlobalStyle } from 'styled-components';
import { theme } from 'assets/styles';

export const GlobalStyle = createGlobalStyle<{ theme: typeof theme }>`
*{margin:0; padding:0;}
*,
*::before,
*::after {
  box-sizing: border-box;
}
a{
  text-decoration: none;
}

html,body{
    font-family:${({ theme: { fonts } }) => fonts.primary};
    color:${({ theme: { colors } }) => colors.white}
}

p{
  line-height:1.25;
  font-size:${({ theme: { bodyFontSizes } }) => bodyFontSizes.sm};
}

.wrapper{
  min-height:100vh;
  
  display:flex;
  flex-direction: column;
  background-color:${({ theme: { colors } }) => colors.background}
}

@media (${({ theme: { breakpoints } }) => breakpoints.lg})
{
  p{
    font-size:${({ theme: { bodyFontSizes } }) => bodyFontSizes.lg};
    line-height:1.375;
  }

  h2{
    font-size:26px;
  }
}
`;

export default GlobalStyle;
