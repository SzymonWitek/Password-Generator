import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 80px;
  min-height: 100vh;
`;

export const Text = styled.h3`
  color: ${({ theme: { colors } }) => colors.textDark};
`;
