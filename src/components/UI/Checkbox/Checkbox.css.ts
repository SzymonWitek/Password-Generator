import styled from 'styled-components/macro';

export const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const CheckMark = styled.span`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 0;
  left: 0;
  background-color: aliceblue;

  &::after {
    content: '';
    position: absolute;
    display: none;
  }
`;

interface WrapperProps {
  isActive: boolean;
}

export const Wrapper = styled.label<WrapperProps>`
  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;

  padding-left: 35px;
  margin-bottom: 12px;
  font-size: 22px;

  & ${CheckMark} {
    background-color: ${({ isActive, theme }) =>
      isActive ? theme.colors.green : 'transparent'};
    /* border: ${({ isActive }) => (isActive ? 'none' : '2px solid black')}; */

    border: ${({ isActive, theme }) =>
      isActive
        ? `2px solid ${theme.colors.green}`
        : `2px solid ${theme.colors.white}`};
  }
  &:hover ${CheckMark} {
    background-color: ${({ isActive, theme }) =>
      isActive ? theme.colors.green : 'rgba(100,100,100,0.5)'};
  }

  & ${CheckMark}::after {
    left: 7px;
    top: 2px;
    width: 8px;
    height: 15px;
    /* border: solid ${({ theme: { colors } }) => colors.gray}; */
    border: solid rgb(20, 20, 20);
    border-width: 0 4px 4px 0;
    transform: rotate(45deg);
  }

  & ${StyledInput}:checked ~ ${CheckMark}::after {
    display: block;
  }
`;
