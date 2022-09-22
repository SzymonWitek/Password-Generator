import styled from 'styled-components/macro';

import { Card, Button } from 'components';

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: min(450px, 90vw);
  padding: ${({ theme: { space } }) => `${space.md} ${space.xl}`};
  margin: ${({ theme: { space } }) => space.md} 0;

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    margin-top: ${({ theme: { space } }) => space.xl};
    width: min(580px, 90vw);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Option = styled.div`
  display: flex;
  height: 25px;
  margin: ${({ theme: { space } }) => space.md} 0;
  width: 100%;

  @media (${({ theme: { breakpoints } }) => breakpoints.ssm}) {
    width: 90%;
  }
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin: ${({ theme: { space } }) => space.xl} 0;

  @media (${({ theme: { breakpoints } }) => breakpoints.ssm}) {
    width: 90%;
  }
`;
