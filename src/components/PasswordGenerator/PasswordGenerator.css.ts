import styled from 'styled-components';
import { Button } from 'components';

export const StyledButton = styled(Button)`
  width: 100%;
  margin: ${({ theme: { space } }) => space.xl} 0;

  @media (${({ theme: { breakpoints } }) => breakpoints.ssm}) {
    width: 90%;
  }
`;
