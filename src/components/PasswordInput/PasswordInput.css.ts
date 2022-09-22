import styled from 'styled-components/macro';
import { Input } from 'components';

export const StyledInput = styled(Input)`
  margin-top: ${({ theme: { space } }) => space.xxl};
  width: min(450px, 90vw);

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    margin-top: ${({ theme: { space } }) => space.xxxl};
    width: min(580px, 90vw);
  }
`;

export const IconWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 8px;

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    margin-top: 12px;
  }
`;
