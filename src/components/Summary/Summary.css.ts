import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.black};
  align-items: center;
  justify-content: space-between;
  text-transform: uppercase;
  padding: ${({ theme: { space } }) => space.md};

  @media (${({ theme: { breakpoints } }) => breakpoints.sm}) {
    width: 80%;
  }
`;

export const Text = styled.p``;

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
