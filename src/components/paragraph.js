import React from 'react';
import styled, { css } from 'styled-components';

import random from './utils/random';
import range from './utils/range';
import rem from './utils/rem';
import { Paper } from './paper';
import { Header } from './header';

const P = ({ className, lines = 3, paragraphs = 1 }) => (
  <Paper className={className} shape="rectangle">
    {range(0, paragraphs).map(i => (
      <Paper key={`p${i}`}>
        {range(0, lines).map(l => (
          <Header key={`p${i}l${l}`} words={random(1, 6)} size={8} />
        ))}
      </Paper>
    ))}
  </Paper>
);

const rightAlign = () => {
  const width = random(90);

  return css`
    width: ${width}%;
    margin-left: ${100 - width}%;
  `;
};

export const Paragraph = styled(P)`
  display: flex;
  flex-direction: column;
  height: auto;
  margin: ${rem(8)} 0;

  ${Paper} {
    padding: ${rem(8)};
  }

  ${Header} {
    width: 100%;
    margin-bottom: 0;

    &:first-child {
      ${rightAlign()};
    }

    &:last-child {
      width: ${random(20, 80)}%;
    }
  }
`;
