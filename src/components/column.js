import React from 'react';
import styled from 'styled-components';

import random from './utils/random';
import range from './utils/range';
import rem from './utils/rem';

import { Paper } from './paper';
import { Line } from './line';

const C = ({ className, count = 1, per = 3, minWidth = 40 }) => (
  <Paper className={className}>
    {range(0, count).map(i => (
      <Paper key={i}>
        {range(0, per).map(k => (
          <Paper key={`${i}.${k}`}>
            <Line width={random(minWidth)} />
          </Paper>
        ))}
      </Paper>
    ))}
  </Paper>
);

export const Column = styled(C)`
  display: flex;
  width: ${props => (props.width ? props.width : random())}%;

  ${Line} {
    width: ${p => p.full && 100}%;
  }

  ${Paper} {
    width: 100%;
  }
`;
