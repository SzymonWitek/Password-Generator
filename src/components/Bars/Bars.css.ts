import styled from 'styled-components/macro';

interface BarProps {
  isActive?: boolean;
}

export const Bar = styled.div<BarProps>`
  height: 35px;
  width: 12px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.yellow : 'transparent'};
  border: 3px solid
    ${({ isActive, theme }) =>
      isActive ? theme.colors.yellow : theme.colors.white};
  margin-left: ${({ theme: { space } }) => space.s};
`;

export const Wrapper = styled.div`
  display: flex;
`;
