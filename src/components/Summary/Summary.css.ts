import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.black};
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  padding: ${({ theme: { space } }) => space.md};
  margin: ${({ theme: { space } }) => space.xxxl} 0
    ${({ theme: { space } }) => space.s};

  @media (${({ theme: { breakpoints } }) => breakpoints.ssm}) {
    width: 90%;
    padding: ${({ theme: { space } }) => `${space.md} ${space.xxl}`};
  }

  @media (${({ theme: { breakpoints } }) => breakpoints.sm}) {
    padding: ${({ theme: { space } }) => `${space.md},${space.xxxl}`};
  }
`;

export const Text = styled.p`
  font-weight: 500;
  color: ${({ theme: { colors } }) => colors.textDark};
`;

export const Message = styled.p`
  min-width: 100px;
  display: flex;
  justify-content: flex-end;
  padding-right: ${({ theme: { space } }) => space.md};
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;
