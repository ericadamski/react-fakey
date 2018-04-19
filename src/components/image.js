import styled, { css } from 'styled-components';
import rem from './utils/rem';
import colors from './utils/colors';

const normalize = ({ circle, height = 50, width = 50 }) => {
  if (circle) {
    const size = Math.max(height, width);

    return css`
      border-radius: 100%;
      width: ${rem(size)};
      height: ${rem(size)};
    `;
  }

  return css`
    width: ${rem(width)};
    height: ${rem(height)};
  `;
};

export const Image = styled.div`
  ${normalize};
  background-color: ${colors.grey.normal};
`;
