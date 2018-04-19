import React from 'react';
import { storiesOf } from '@storybook/react';

import { Line } from '../src/components/line';

storiesOf('Line', module)
  .add('Default', () => <Line />)
  .add('Custom Width', () => <Line width={30} />);
