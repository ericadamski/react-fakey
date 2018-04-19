import React from 'react';
import { storiesOf } from '@storybook/react';

import { Input } from '../src/components/input';

storiesOf('Input', module)
  .add('Default', () => <Input />)
  .add('Custom Width', () => <Input width={500} />);
