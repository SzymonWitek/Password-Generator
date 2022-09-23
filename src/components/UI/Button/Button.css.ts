import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 15px;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  background-color: ${({ theme: { colors } }) => colors.green};
  color: ${({ theme: { colors } }) => colors.dark};
  border: 3px solid ${({ theme: { colors } }) => colors.green};
  transition: border 0.2s, background-color 0.2s, color 0.2s;

  :hover {
    cursor: pointer;
    border: 3px solid ${({ theme: { colors } }) => colors.white};
    background-color: transparent;
    color: ${({ theme: { colors } }) => colors.white};
  }
`;
