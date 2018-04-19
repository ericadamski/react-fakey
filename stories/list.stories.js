import React from 'react';
import { storiesOf } from '@storybook/react';

import { List } from '../src/components/list';

storiesOf('List', module)
  .add('Default', () => <List />)
  .add('Custom Number Of Elements', () => <List items={10} />);
