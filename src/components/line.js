import styled, { css } from 'styled-components';
import rem from './utils/rem';
import colors from './utils/colors';

const line = css`
  width: ${props => (props.width !== undefined ? props.width : 100)}%;
`;

export const Line = styled.div`
  min-width: 1rem;
  height: ${rem(6)};
  background-color: ${colors.grey.normal};
  border-radius: ${rem(3)};
  ${line};
`;
