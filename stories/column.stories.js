import React from 'react';
import { storiesOf } from '@storybook/react';

import { Column } from '../src/components/column';

storiesOf('Columns', module)
  .add('Default', () => <Column />)
  .add('Full', () => <Column count={2} full width={25} />)
  .add('Custom Count', () => <Column count={10} per={5} />);
