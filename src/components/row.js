import React from 'react';
import styled from 'styled-components';

import random from './utils/random';
import range from './utils/range';
import rem from './utils/rem';

import { Paper } from './paper';
import { Line } from './line';

const R = ({ className, count = 1 }) => (
  <Paper className={className}>
    {range(0, count).map(k => (
      <Paper key={k}>
        <Line width={random(20)} />
      </Paper>
    ))}
  </Paper>
);

export const Row = styled(R)``;
