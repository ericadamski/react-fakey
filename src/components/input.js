import styled from 'styled-components';
import colors from './utils/colors';
import rem from './utils/rem';

export const Input = styled.div`
  border-radius: ${rem(2)};
  border: ${rem(2)} solid #0000000f;
  height: ${rem(40)};
  max-width: ${props => rem(props.width || 250)};
  width: 100%;
  background-color: ${colors.grey.light};
`;
