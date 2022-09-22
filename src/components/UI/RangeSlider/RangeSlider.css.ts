import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  padding: ${({ theme: { space } }) => space.s} 0
    ${({ theme: { space } }) => space.xxxl};

  @media (${({ theme: { breakpoints } }) => breakpoints.ssm}) {
    width: 90%;
  }
`;

interface TextProps {
  secondary?: boolean;
}

export const Text = styled.p<TextProps>`
  color: ${(props) => (props.secondary ? props.theme.colors.green : 'white')};

  font-size: ${({ secondary, theme: { bodyFontSizes } }) =>
    secondary ? '20px' : bodyFontSizes.sm};
  @media (${({ theme: { breakpoints } }) => breakpoints.lg}) {
    font-size: ${({ secondary, theme: { bodyFontSizes } }) =>
      secondary ? '22px' : bodyFontSizes.lg};
  }
`;

export const Group = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  display: flex;
  padding: ${({ theme: { space } }) => space.md} 0;
`;

export const SliderContainer = styled.div`
  position: relative;
`;

interface StyledSliderProps {
  max: number;
  value: number;
  ref: React.MutableRefObject<HTMLInputElement | null>;
}

export const StyledSlider = styled.input<StyledSliderProps>`
  outline: none;
  width: 100%;
  height: 7px;
  appearance: none;
  background-color: ${({ theme: { colors } }) => colors.black};
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;

  ::after {
    content: '';
    position: absolute;
    height: 7px;
    background-color: ${({ theme: { colors } }) => colors.green};
    left: 0%;
    right: ${(props) => Math.abs((props.value / props.max) * 100 - 100) + '%'};
    z-index: -1;
  }

  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: ${({ theme: { colors } }) => colors.white};
    cursor: pointer;
    border-radius: 50%;
    border: 2px solid ${({ theme: { colors } }) => colors.gray};
  }

  ::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #04aa6d;
    cursor: pointer;
  }
`;
