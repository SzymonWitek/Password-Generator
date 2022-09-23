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

interface TextProps {
  bold?: boolean;
  textAlign?: string;
}

export const Text = styled.p<TextProps>`
  font-weight: ${({ bold }) => (bold ? 'bold' : 'regular')};
  padding: 10px 20px;

  display: flex;
  justify-content: center;
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
  font-size: ${({ theme: { bodyFontSizes } }) => bodyFontSizes.md};
`;
