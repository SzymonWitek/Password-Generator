import styled from 'styled-components/macro';

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
