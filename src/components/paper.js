import styled, { css } from 'styled-components';
import rem from './utils/rem';

const shapes = {
  rectangle: css`
    width: ${props => rem(props.size ? props.size * 2 : 700)};
    height: ${props => rem(props.size ? props.size : 350)};
  `,
  square: css`
    width: ${props => rem(props.size ? props.size : 350)};
    height: ${props => rem(props.size ? props.size : 350)};
  `,
  card: css`
    width: ${props => rem(props.size ? props.size : 350)};
    height: ${props => rem(props.size ? props.size * 1.75 : 300 * 1.75)};
  `,
};

export const Paper = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  border-radius: ${rem(2)};
  ${props => props.shape && shapes[props.shape]};

  & > & {
    padding: ${rem(8)};
  }
`;
