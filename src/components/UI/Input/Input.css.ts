import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  position: relative;

  & div {
    position: absolute;
    right: 5%;
    top: 0;
    bottom: 0;
  }
`;

export const StyledInput = styled.input`
  width: min(450px, 85vw);
  font-family: ${({ theme: { fonts } }) => fonts.primary};
  font-size: 20px;
  padding: ${({ theme: { space } }) => space.xl};
  background-color: ${({ theme: { colors } }) => colors.gray};
  border: none;
  min-height: 50px;
  border: 2px solid rgb(0, 10, 16);
  color: ${({ theme: { colors } }) => colors.white};
  font-weight: 500;

  ::placeholder {
    color: ${({ theme: { colors } }) => colors.textDark};
  }

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    padding: ${({ theme: { space } }) => `${space.xl} ${space.xxl}`};
  }
`;
