import React from 'react';
import { storiesOf } from '@storybook/react';

import { Row } from '../src/components/row';

storiesOf('Rows', module)
  .add('Default', () => <Row />)
  .add('Custom Count', () => <Row count={10} />);
