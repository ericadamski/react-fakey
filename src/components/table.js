import React from 'react';
import styled, { css } from 'styled-components';

import range from './utils/range';
import random from './utils/random';
import rem from './utils/rem';
import colors from './utils/colors';

import { Paper } from './paper';
import { Line } from './line';

const C = ({ className, width }) => (
  <Paper className={className}>
    <Line width={width} />
  </Paper>
);

const Column = styled(C)``;

const Carret = styled(({ className, empty }) => (
  <Paper className={className}>{!empty && '▾'}</Paper>
))``;

const Carrets = Paper.extend`
  display: none;
  @media (max-width: 400px) {
    display: initial;
  }
`;

const R = ({ className, cols, width }) => (
  <Paper className={className}>
    {range(0, cols).map(i => <Column key={i} width={width} />)}
  </Paper>
);

const Row = styled(R)``;

const T = ({ className, rows = 5, cols = 4 }) => (
  <Paper className={className}>
    {range(0, rows).map(i => <Row key={i} cols={cols} width={random(40)} />)}
    <Carrets>
      {[
        <Carret key="empty" empty />,
        ...range(0, cols - 1).map(i => <Carret key={`c${i}`} />),
      ]}
    </Carrets>
  </Paper>
);

const col = css`
  height: 3rem;
  margin: ${rem(8)} 0;
  border-radius: 0;
  display: flex;
  align-items: center;

  &:nth-child(even) {
    background-color: ${colors.grey.light};
  }

  &:first-child {
    ${Line} {
      height: ${rem(10)};
      background-color: ${colors.grey.dark};
    }
  }
`;

const row = css`
  width: 100%;
  padding: 0;
  border-radius: 0;
`;

export const Table = styled(T)`
  display: flex;
  width: 100%;
  border: ${rem(1)} solid ${colors.grey.normal};
  padding-left: 0;
  padding-right: 0;

  ${Carrets} {
    ${row};
    width: 20%;

    ${Carret} {
      ${col};
    }
  }

  ${Line} {
    height: ${rem(8)};
  }

  ${Row} {
    ${row};

    @media (max-width: 400px) {
      &:nth-last-child(n + 4) {
        display: none;
      }
    }

    &:nth-last-child(2) {
      ${Column} {
        justify-content: flex-end;
      }
    }

    ${Column} {
      ${col};
    }
  }
`;
