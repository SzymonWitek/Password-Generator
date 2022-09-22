import styled from 'styled-components/macro';

interface BarProps {
  isActive?: boolean;
}

export const Bar = styled.div<BarProps>`
  height: 30px;
  width: 11px;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.colors.yellow : 'transparent'};
  border: 2px solid
    ${({ isActive, theme }) =>
      isActive ? theme.colors.yellow : theme.colors.white};
  margin-left: ${({ theme: { space } }) => space.s};

  @media (${({ theme: { breakpoints } }) => breakpoints.md}) {
    margin-left: ${({ theme: { space } }) => space.md};
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;
