import React from 'react';
import styled, { css } from 'styled-components';

import { Line } from './line';
import { Paper } from './paper';

import range from './utils/range';
import random from './utils/random';
import rem from './utils/rem';

const size = ({ size = 1 }) => {
  const base = 64;

  return css`
    height: ${rem(Math.max(base / size))};
  `;
};

const H = ({ className, words = 1, size, center }) => (
  <Paper className={className} center>
    {range(0, words).map(k => (
      <Line
        key={`w${k}`}
        width={random(25, Math.max(50, 80 / Math.min(4, words)))}
      />
    ))}
  </Paper>
);

const center = css`
  justify-content: center;
  align-items: center;
`;

export const Header = styled(H)`
  display: flex;
  flex-wrap: ${props => props.wrap && 'wrap'};
  flex-grow: 0;
  flex-shrink: 0;
  margin-bottom: ${rem(8)};

  ${p => p.center && center};

  ${Line} {
    margin-right: ${rem(8)};
    margin-bottom: ${props => props.wrap && rem(8)};
    ${size};
  }
`;
