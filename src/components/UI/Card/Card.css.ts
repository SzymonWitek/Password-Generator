import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  border: 2px solid rgb(0, 10, 16);
  background-color: ${({ theme: { colors } }) => colors.gray};
`;
