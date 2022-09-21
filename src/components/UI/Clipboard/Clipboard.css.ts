import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Icon = styled(FontAwesomeIcon)`
  color: ${({ theme: { colors } }) => colors.green};
  padding: 5px;
  transition: 0.3s color;

  :hover {
    cursor: pointer;
    color: ${({ theme: { colors } }) => colors.white};
  }
`;
