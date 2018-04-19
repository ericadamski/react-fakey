import React from 'react';
import styled from 'styled-components';

import random from './utils/random';
import range from './utils/range';
import rem from './utils/rem';

import { Paper } from './paper';
import { Line } from './line';

const L = ({ className, items = 1 }) => (
  <Paper className={className}>
    {range(0, items).map(k => (
      <Paper key={k}>
        <Line width={2} />
        <Line width={random(20)} />
      </Paper>
    ))}
  </Paper>
);

export const List = styled(L)`
  ${Paper} {
    display: flex;

    ${Line} {
      &:first-child {
        margin-right: ${rem(8)};
      }
    }
  }
`;
