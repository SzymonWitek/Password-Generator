import styled from 'styled-components/macro';

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
