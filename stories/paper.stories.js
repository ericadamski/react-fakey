import React from 'react';
import { storiesOf } from '@storybook/react';

import { Paper } from '../src/components/paper';
import { Container } from './utils';

storiesOf('Paper', module)
  .add('Default', () => (
    <Container>
      <Paper />
    </Container>
  ))
  .add('Rectangle', () => (
    <Container>
      <Paper shape="rectangle" />
    </Container>
  ))
  .add('Square', () => (
    <Container>
      <Paper shape="square" />
    </Container>
  ))
  .add('Card', () => (
    <Container>
      <Paper shape="card" />
    </Container>
  ));
