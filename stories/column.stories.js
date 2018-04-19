import React from 'react';
import { storiesOf } from '@storybook/react';

import { Column } from '../src/components/column';

storiesOf('Columns', module)
  .add('Default', () => <Column />)
  .add('Custom Count', () => <Column count={10} />);
