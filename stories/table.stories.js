import React from 'react';
import { storiesOf } from '@storybook/react';

import { Container } from './utils';
import { Table } from '../src/components/table';

storiesOf('Table', module).add('Default', () => (
  <Container>
    <Table />
  </Container>
));
