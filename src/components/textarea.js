import styled from 'styled-components';
import colors from './utils/colors';
import rem from './utils/rem';

export const Textarea = styled.div`
  position: relative;
  border-radius: ${rem(2)};
  border: ${rem(2)} solid #0000000f;
  height: ${props => rem(props.height || 250)};
  max-width: ${props => rem(props.width || 500)};
  width: 100%;
  background-color: ${colors.grey.light};

  &:after {
    position: absolute;
    background-color: #0000000f;
    border-radius: ${rem(5)};
    content: '';
    height: 80%;
    top: 2.5%;
    width: ${rem(5)};
    right: ${rem(5)};
  }
`;
