import styled from 'styled-components/macro';

import { Card, Button } from 'components';

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: min(450px, 85vw);
  padding: ${({ theme: { space } }) => `${space.md} ${space.xl}`};
  margin: ${({ theme: { space } }) => space.md} 0;

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    margin-top: ${({ theme: { space } }) => space.xl};
  }
`;

export const Option = styled.div`
  display: flex;
  height: 25px;
  margin: ${({ theme: { space } }) => space.xxl} 0;
  width: 80%;
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  width: 80%;
  margin: ${({ theme: { space } }) => space.xl} 0;
`;
