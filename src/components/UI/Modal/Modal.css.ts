import styled from 'styled-components/macro';
import { Card } from 'components/UI';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const Content = styled(Card)`
  max-width: 80vw;
  min-width: max(30vh, 300px);
  min-height: max(35vh, 300px);
  padding: ${({ theme: { space } }) => space.s};
  display: flex;
  border-radius: 5px;

  flex-wrap: wrap;
  align-content: flex-start;
  flex-direction: column;

  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    padding: ${({ theme: { space } }) => `${space.xl} ${space.xxl}`};
  }
`;

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${({ theme: { space } }) => space.md};

  height: 10%;
  height: max-content;
`;

export const CloseIcon = styled(FontAwesomeIcon)`
  color: ${({ theme: { colors } }) => colors.green};
  padding: ${({ theme: { space } }) => space.s};

  :hover {
    cursor: pointer;
    color: ${({ theme: { colors } }) => colors.white};
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 200px;
  padding-bottom: ${({ theme: { space } }) => space.md};
`;
